import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker, { parseRange } from '../worker/video-ranges.mjs';
import videoSizes from '../worker/video-sizes.json' with { type: 'json' };
import { stat } from 'node:fs/promises';

globalThis.FixedLengthStream = class extends TransformStream {
  constructor(length) {
    let received = 0;
    super({ transform(chunk, controller) { received += chunk.byteLength; controller.enqueue(chunk); }, flush() { assert.equal(received, length); } });
  }
};
const bytes = new TextEncoder().encode('0123456789');
const asset = () => new Response(new ReadableStream({
  start(c) { c.enqueue(bytes.slice(0, 3)); c.enqueue(bytes.slice(3, 7)); c.enqueue(bytes.slice(7)); c.close(); },
}), { headers: { 'Content-Type': 'video/mp4', 'Content-Length': '10', ETag: '"original"' } });
const run = (headers = {}, method = 'GET') => worker.fetch(new Request('https://example.test/videos/movie.mp4', { method, headers }), { ASSETS: { fetch: async () => asset() } }, { waitUntil() {} });

test('the range size manifest matches every shipped video', async () => {
  for (const [pathname, size] of Object.entries(videoSizes)) assert.equal((await stat(new URL('../public' + pathname, import.meta.url))).size, size, pathname);
});

test('returns only the two-byte media probe, across the real response handler', async () => {
  const r = await run({ Range: 'bytes=0-1' });
  assert.equal(r.status, 206);
  assert.equal(r.headers.get('content-range'), 'bytes 0-1/10');
  assert.equal(r.headers.get('content-length'), '2');
  assert.equal(r.headers.get('accept-ranges'), 'bytes');
  assert.equal(await r.text(), '01');
});
for (const [range, expected] of [['bytes=2-8', '2345678'], ['bytes=7-', '789'], ['bytes=-3', '789'], ['bytes=-99', '0123456789'], ['bytes=8-99', '89']]) {
  test(`supports resume/seek ${range}`, async () => { const r = await run({ Range: range }); assert.equal(r.status, 206); assert.equal(await r.text(), expected); });
}
test('rejects unsatisfiable ranges with size and an empty body', async () => {
  const r = await run({ Range: 'bytes=10-' });
  assert.equal(r.status, 416); assert.equal(r.headers.get('content-range'), 'bytes */10'); assert.equal(await r.text(), '');
  assert.equal(parseRange('bytes=4-3', 10), false);
  assert.equal(parseRange('bytes=-0', 10), false);
});
test('ignores unsupported/malformed ranges and mismatched If-Range', async () => {
  for (const headers of [{ Range: 'bytes=0-1,3-4' }, { Range: 'bytes=-' }, { Range: 'bytes=0-1', 'If-Range': '"different"' }, { Range: 'bytes=0-1', 'If-Range': 'W/"original"' }]) {
    const r = await run(headers); assert.equal(r.status, 200); assert.equal(await r.text(), '0123456789');
  }
});
test('honors the matching asset version for resumed downloads', async () => {
  const r = await run({ Range: 'bytes=8-', 'If-Range': '"original"' }); assert.equal(r.status, 206); assert.equal(await r.text(), '89');
});
test('preserves upstream missing-file responses', async () => {
  const r = await worker.fetch(new Request('https://example.test/videos/missing.mp4'), { ASSETS: { fetch: async () => new Response('Missing', { status: 404 }) } }, {});
  assert.equal(r.status, 404);
});
test('serves ranges when the Cloudflare asset binding omits Content-Length', async () => {
  const pathname = '/videos/2026/aftermovie-mobile-stream.mp4';
  const upstream = asset(); upstream.headers.delete('content-length');
  const r = await worker.fetch(new Request('https://example.test' + pathname, { headers: { Range: 'bytes=0-1' } }), { ASSETS: { fetch: async () => upstream } }, { waitUntil() {} });
  assert.equal(r.status, 206); assert.equal(r.headers.get('content-range'), `bytes 0-1/${videoSizes[pathname]}`); assert.equal(await r.text(), '01');
});
