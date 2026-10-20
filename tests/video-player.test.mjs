import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
const source = (await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8')).match(/<script>([\s\S]*?)<\/script>/)[1];
const script = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;

function fixture({ saveData = false, reduced = false } = {}) {
  let now = 0, nextTimer = 0, observer;
  const timers = new Map();
  const error = { hidden: true, querySelector: (s) => controls[s] };
  const controls = { span: { textContent: '' }, a: { href: '' }, button: new EventTarget() };
  const mobile = Object.assign(new EventTarget(), { matches: true });
  const motion = Object.assign(new EventTarget(), { matches: reduced });
  const section = { style: { setProperty() {} }, dataset: {}, getBoundingClientRect: () => ({ top: 0 }) };
  const video = Object.assign(new EventTarget(), {
    src: '', preload: 'none', muted: true, hidden: false, paused: true, seeking: false,
    duration: 43.88, currentTime: 0, readyState: 0, networkState: 2, error: null,
    dataset: {}, parentElement: {}, buffered: { length: 0 }, loads: 0, plays: 0,
    canPlayType: () => 'probably',
    load() { this.loads++; this.readyState = 0; this.currentTime = 0; this.error = null; this.paused = true; },
    play() { this.plays++; this.paused = false; if (this.readyState >= 3) this.dispatchEvent(new Event('playing')); return Promise.resolve(); },
    pause() { this.paused = true; },
  });
  const document = Object.assign(new EventTarget(), { hidden: false, querySelector: (s) => ({ '#aftermovie-video': video, '.film-section': section, '.film-error': error })[s] ?? null });
  const window = Object.assign(new EventTarget(), { innerHeight: 844, matchMedia: (q) => q.includes('reduced') ? motion : mobile });
  vm.runInNewContext(script, { window, document, navigator: { connection: { saveData } }, HTMLMediaElement: { HAVE_FUTURE_DATA: 3, NETWORK_IDLE: 1 },
    IntersectionObserver: class { constructor(callback) { observer = callback; } observe() {} },
    setTimeout: (fn, ms) => { const id = ++nextTimer; timers.set(id, { fn, at: now + ms }); return id; },
    clearTimeout: id => timers.delete(id), requestAnimationFrame: fn => fn(),
  });
  const visible = value => observer([{ isIntersecting: value, intersectionRect: { width: value ? 390 : 0, height: value ? 844 : 0 } }]);
  const tick = ms => {
    const end = now + ms;
    while (true) { const next = [...timers].filter(([,t]) => t.at <= end).sort((a,b) => a[1].at-b[1].at)[0]; if (!next) break; now=next[1].at; timers.delete(next[0]); next[1].fn(); }
    now = end;
  };
  const ready = () => { video.readyState = 4; video.buffered = { length: 1, start: () => 0, end: () => 43.88 }; video.onloadedmetadata?.(); video.dispatchEvent(new Event('canplay')); };
  const fail = (code = 2) => { video.error = { code }; video.readyState = 0; video.dispatchEvent(new Event('error')); };
  return { video, error, controls, document, window, visible, tick, ready, fail };
}
const flush = async () => { await Promise.resolve(); await Promise.resolve(); };

test('starts the media loader even if cellular preloading never emits canplay', () => {
  const f = fixture(); f.visible(true); assert.equal(f.video.loads, 1); assert.equal(f.video.plays, 0);
  f.tick(2500); assert.equal(f.video.plays, 1);
});
test('keeps the poster and avoids loading for data saving and reduced motion', () => {
  for (const settings of [{ saveData: true }, { reduced: true }]) {
    const f = fixture(settings); f.visible(true); f.tick(10000);
    assert.equal(f.video.loads, 0); assert.equal(f.video.plays, 0); assert.equal(f.video.hidden, true);
  }
});
test('scroll and tab pauses preserve position and add no error overlay', async () => {
  const f = fixture(); f.visible(true); f.ready(); await flush();
  f.video.currentTime = 8; f.visible(false); assert.equal(f.video.paused, true); assert.equal(f.error.hidden, true);
  f.visible(true); assert.equal(f.video.paused, false); assert.equal(f.video.currentTime, 8); await flush();
  f.document.hidden = true; f.document.dispatchEvent(new Event('visibilitychange')); assert.equal(f.video.paused, true);
});
test('retries a network failure and resumes the remembered position', async () => {
  const f = fixture(); f.visible(true); f.ready(); await flush();
  f.video.currentTime = 8; f.video.dispatchEvent(new Event('timeupdate')); f.fail();
  assert.equal(f.error.hidden, true); f.tick(1500); assert.equal(f.video.loads, 2);
  f.ready(); await flush(); assert.equal(f.video.currentTime, 8); assert.equal(f.video.paused, false); assert.equal(f.error.hidden, true);
});
test('bounds retries, then permits an explicit retry without a page reload', async () => {
  const f = fixture(); f.visible(true); f.fail(); f.tick(1500); f.fail(); f.tick(3000); f.fail();
  assert.equal(f.error.hidden, false); assert.equal(f.video.hidden, true);
  const loads = f.video.loads; f.tick(30000); assert.equal(f.video.loads, loads);
  f.controls.button.dispatchEvent(new Event('click')); assert.equal(f.error.hidden, true); assert.equal(f.video.loads, loads + 1);
  await flush();
});
test('switches codec only once and keeps the lightweight MP4 as the mobile default', () => {
  const f = fixture(); f.visible(true); assert(f.video.src.endsWith('mobile-stream.mp4'));
  f.fail(4); assert(f.video.src.endsWith('mobile-cut.webm'));
  f.fail(4); f.tick(1500); assert(f.video.src.endsWith('mobile-cut.webm'));
});
