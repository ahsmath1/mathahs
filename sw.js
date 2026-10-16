const CACHE='compagnon-maths-v4-1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./data-algebra.js','./data-analyse.js','./data-exercises.js','./data-counterexamples.js','./data-v3.js','./manifest.json','./ressources/livre-algebre-1.pdf','./ressources/livre-analyse-1.pdf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('compagnon-maths-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;})));});
