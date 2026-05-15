const cacheName = "KennyMakesGames-Cult of PIN-0.11.24";
const contentToCache = [
    "Build/CultOfPin_v0.11.24_WebGL.loader.js",
    "Build/CultOfPin_v0.11.24_WebGL.framework.js.unityweb",
    "Build/CultOfPin_v0.11.24_WebGL.data.unityweb",
    "Build/CultOfPin_v0.11.24_WebGL.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
