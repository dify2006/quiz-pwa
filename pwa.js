'use strict';
(() => {
 const status=document.getElementById('offline-status');
 const button=document.getElementById('install-app');
 let prompt;
 window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();prompt=event;button.hidden=false;});
 button.addEventListener('click',async()=>{if(!prompt)return;await prompt.prompt();await prompt.userChoice;prompt=null;button.hidden=true;});
 window.addEventListener('appinstalled',()=>{button.hidden=true;prompt=null;});
 if(!('serviceWorker' in navigator)){status.textContent='此瀏覽器未能啟用離線功能，請保持連網使用。';return;}
 window.addEventListener('load',async()=>{
  try {
   const reg=await navigator.serviceWorker.register('./service-worker.js',{scope:'./',updateViaCache:'none'});
   await navigator.serviceWorker.ready;
   status.textContent='離線準備完成，可以斷網重新開啟及答題。';
   reg.update().catch(()=>{});
  } catch(error) {status.textContent='離線準備未完成，請連網重新開啟網站再試。';}
 });
})();
