// Multi Audio Player — mobile web version. Once opened it also works offline, and it keeps itself
// up to date: when online, the page always comes fresh from the site (a new upload shows up the
// next time it's opened); offline (or the network is very slow), the saved copy opens instead.
const VERSION = 'ace506ffd0'; // (set by tools/build-mobile.js: a new build replaces the old saved files)
const CACHE = 'map-' + VERSION;
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'apple-touch-icon-precomposed.png', 'favicon-32.png', 'favicon.ico'];

// What's new (Settings → What's new…): CHANGELOG.md is saved with the rest, so the page reads it offline too; a site
// built from a page before it has none, and that mustn't stop the rest from being saved. Like the page, it comes fresh
// when online (a new upload's notes show at once, not only once this new worker has taken over), the saved copy when
// offline or slow. Its pictures (changelog/…) are saved the first time they're shown. A new build (a changed changelog
// or picture is one) starts from a new cache.
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL).then(() => c.add('CHANGELOG.md').catch(() => {}))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('map-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') { // the page itself: fresh when possible
    const net = fetch(r).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); }
      return res;
    });
    const slow = new Promise(ok => setTimeout(ok, 4000)).then(() => caches.match('index.html'));
    e.respondWith(Promise.race([net.catch(() => caches.match('index.html')), slow.then(hit => hit || net)]));
    return;
  }
  const where = new URL(r.url).pathname;
  if (/\/CHANGELOG\.md$/.test(where)) { // What's new's words: fresh when possible, as the page is
    const net = fetch(r).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
      return res;
    });
    const saved = () => caches.match(r, { ignoreSearch: true });
    const slow = new Promise(ok => setTimeout(ok, 4000)).then(saved);
    e.respondWith(Promise.race([net.catch(saved), slow.then(hit => hit || net)]));
    return;
  }
  const keep = /\/changelog\/.+$/.test(where); // (What's new's pictures: kept once shown)
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(hit => hit || fetch(r).then(res => {
    if (keep && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
    return res;
  }))); // (icon.png?v=… is icon.png)
});
