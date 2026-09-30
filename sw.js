// Offline-Modus: erst Netz (damit Updates ankommen), sonst Zwischenspeicher.
const V = 'vereinskasse-v3';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './abril-fatface.woff2', './kaushan-script.woff2',
  './mark.png', './logo.jpg',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(V).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then(m => m || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
