import videoSizes from './video-sizes.json' with { type: 'json' };
// Serve single byte ranges so a media client can probe, seek and resume a download.
export function parseRange(value, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(value ?? '');
  if (!match || (!match[1] && !match[2])) return null;
  const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(size - 1, Number(match[2])) : size - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) return false;
  return { start, end };
}

export function sliceStream(body, start, end) {
  const reader = body.getReader();
  let offset = 0;
  return new ReadableStream({
    async pull(controller) {
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) { controller.error(new Error('Incomplete video asset')); return; }
          const from = Math.max(0, start - offset);
          const to = Math.min(value.byteLength, end + 1 - offset);
          offset += value.byteLength;
          if (to > from) controller.enqueue(value.subarray(from, to));
          if (offset > end) {
            controller.close();
            await reader.cancel();
            return;
          }
          if (to > from) return;
        }
      } catch (error) { controller.error(error); }
    },
    cancel(reason) { return reader.cancel(reason); },
  });
}

export default {
  async fetch(request, env, ctx) {
    const response = await env.ASSETS.fetch(request);
    if (!['GET', 'HEAD'].includes(request.method) || response.status !== 200 ||
        !response.headers.get('content-type')?.startsWith('video/')) return response;
    // ASSETS does not expose Content-Length inside the Worker, although the edge
    // adds it later. The build records file sizes without reading videos into memory.
    const size = Number(response.headers.get('content-length') ?? videoSizes[new URL(request.url).pathname]);
    if (!Number.isSafeInteger(size) || size <= 0) return response;
    const headers = new Headers(response.headers);
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Cache-Control', 'public, max-age=86400');
    const ifRange = request.headers.get('if-range');
    const unchanged = !ifRange || (!ifRange.startsWith('W/') && ifRange === headers.get('etag')) ||
      (headers.has('last-modified') && Date.parse(ifRange) >= Date.parse(headers.get('last-modified')));
    const range = request.method === 'GET' && unchanged ? parseRange(request.headers.get('range'), size) : null;
    if (range === null) return new Response(response.body, { status: 200, headers });
    if (range === false) {
      await response.body?.cancel();
      headers.set('Content-Range', `bytes */${size}`);
      headers.delete('Content-Length');
      return new Response(null, { status: 416, headers });
    }
    const length = range.end - range.start + 1;
    headers.set('Content-Range', `bytes ${range.start}-${range.end}/${size}`);
    headers.set('Content-Length', String(length));
    // FixedLengthStream supplies a real Content-Length without buffering the whole file.
    const stream = new FixedLengthStream(length);
    ctx.waitUntil(sliceStream(response.body, range.start, range.end).pipeTo(stream.writable).catch(() => {}));
    return new Response(stream.readable, { status: 206, headers });
  },
};
