'use strict';
const CACHE='curious1000-pwa-v1-'+new URL(self.registration.scope).pathname;
const FILES=['./','./index.html','./manifest.json','./pwa.js','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES.map(p=>new Request(new URL(p,self.registration.scope),{cache:'reload'})));await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||!url.href.startsWith(self.registration.scope))return;
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).then(async response=>{if(response.ok){const cache=await caches.open(CACHE);await cache.put(new URL('./index.html',self.registration.scope),response.clone());return response;}return (await caches.open(CACHE).then(cache=>cache.match(new URL('./index.html',self.registration.scope))))||response;}).catch(()=>caches.open(CACHE).then(cache=>cache.match(new URL('./index.html',self.registration.scope)))));return;
 }
 if(FILES.some(file=>new URL(file,self.registration.scope).href===url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
