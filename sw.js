/* Ata Viva — cache offline (a transcrição por voz sempre usa internet) */
const V = 'ataviva-v1.3';

const SHELL = [
  './', './index.html', './manifest.json', './icon.svg',
  'https://unpkg.com/lucide@latest',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await Promise.allSettled(SHELL.map(u => c.add(u)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;
  const sameOrigin = new URL(req.url).origin === location.origin;

  e.respondWith((async () => {
    if (sameOrigin) {
      try {
        const res = await fetch(req);
        if (res && res.ok) { const c = await caches.open(V); c.put(req, res.clone()); }
        return res;
      } catch (err) {
        const hit = await caches.match(req);
        return hit || await caches.match('./index.html') || Response.error();
      }
    } else {
      const hit = await caches.match(req);
      if (hit) return hit;
      try {
        const res = await fetch(req);
        if (res && res.ok) { const c = await caches.open(V); c.put(req, res.clone()); }
        return res;
      } catch (err) { return Response.error(); }
    }
  })());
});