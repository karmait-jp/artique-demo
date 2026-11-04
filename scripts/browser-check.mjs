// Optional local browser verification: run preview and Chromium with --remote-debugging-port=9222.
// No browser-testing dependency is required; this uses the Chrome DevTools Protocol.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const targets=await(await fetch('http://127.0.0.1:9222/json')).json();
const target=targets.find(t=>t.type==='page');
const socket=new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r=>socket.addEventListener('open',r,{once:true}));
let serial=0;const pending=new Map();const errors=[];
socket.addEventListener('message',event=>{const message=JSON.parse(event.data);if(message.id){const p=pending.get(message.id);pending.delete(message.id);message.error?p.reject(message.error):p.resolve(message.result);}if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.text+' '+(message.params.exceptionDetails.exception?.description??''));});
const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
const pause=(ms=180)=>new Promise(r=>setTimeout(r,ms));
const evaluate=async expression=>{const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(result.exceptionDetails)throw Error(result.exceptionDetails.exception?.description??result.exceptionDetails.text);return result.result.value;};
const route=async path=>{await evaluate(`location.hash=${JSON.stringify('#'+path)}`);await pause();};
const click=async selector=>{assert(await evaluate(`!!document.querySelector(${JSON.stringify(selector)})`),`Missing ${selector}`);await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);await pause();};
const fill=async(selector,value)=>{await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});Object.getOwnPropertyDescriptor(e.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,'value').set.call(e,${JSON.stringify(value)});e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));})()`);};
const screenshot=async name=>{const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(`.shots/${name}.png`,Buffer.from(shot.data,'base64'));};
try{
 await mkdir('.shots',{recursive:true});await send('Page.enable');await send('Runtime.enable');
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await send('Emulation.setTimezoneOverride',{timezoneId:'Asia/Tokyo'});
 await send('Page.addScriptToEvaluateOnNewDocument',{source:"Object.defineProperty(navigator,'language',{get:()=> 'fr-FR'});"});
 await send('Page.navigate',{url:'http://127.0.0.1:4173/artique-demo/'});await pause(900);await evaluate('localStorage.clear()');await send('Page.reload');await pause(800);await evaluate('document.fonts.ready');
 assert.equal(await evaluate('document.documentElement.lang'),'fr','French default');
 assert.equal(await evaluate('document.querySelectorAll(".sale-row").length'),4);
 await click('.cookie-banner button');await screenshot('home-390');
 await click('.skip-link');assert.equal(await evaluate('location.hash'),'','Skip leaves route unchanged');
 await route('/sale/A');assert.equal(await evaluate('document.querySelectorAll(".lot-card").length'),12);
 await screenshot('sale-390');
 await route('/lot/A-001');assert.equal(await evaluate('document.querySelector(".bid-form select").options.length'),6);
 await click('.lot-image-stage');assert(await evaluate('!!document.querySelector(".image-modal")'));await click('.image-modal .modal-close');
 await click('.lot-watch');assert(await evaluate('JSON.parse(localStorage.getItem("artique-demo-state-v1")).lots["A-001"].watched'));
 await click('.bid-button');assert(await evaluate('!!document.querySelector(".registration-form")'));
 for(const [name,value]of Object.entries({name:'Camille Démo',email:'demo@example.test',phone:'0000',cardLast4:'4242'}))await fill(`[name="${name}"]`,value);
 await click('.registration-form button[type=submit]');assert(await evaluate('JSON.parse(localStorage.getItem("artique-demo-state-v1")).lots["A-001"].participated'));
 await click('.checkbox-field input');await fill('.proxy-field input','100000');await click('.bid-button');
 assert(await evaluate('JSON.parse(localStorage.getItem("artique-demo-state-v1")).lots["A-001"].visitorMax===100000'));
 await screenshot('lot-390');
 await click('.demo-tab');await evaluate("Array.from(document.querySelectorAll('.demo-panel>button')).find(b=>b.textContent.includes('Clôturer')).click()");await pause();
 assert(await evaluate('!!document.querySelector(".bid-status a[href*=checkout]")'),'Won lot checkout link');
 await click('.bid-status a');assert(await evaluate('!!document.querySelector(".checkout-form")'));
 await fill('.card-number-field input','4242');assert(await evaluate('!!document.querySelector(".card-brand")'));await screenshot('checkout-390');
 await click('.pay-button');assert(await evaluate('!!document.querySelector(".confirmation-notice")'));
 assert(await evaluate('JSON.parse(localStorage.getItem("artique-demo-state-v1")).orders["A-001"].total>0'));
 await route('/consign');await fill('.consign-form input:not([type=file])','Vase de démonstration');await fill('.consign-form textarea','Un objet de famille, pour cette démonstration.');await click('.form-actions button[type=submit]');
 assert.equal(await evaluate('document.querySelector(".consign-progress .is-active span").textContent'),'02');
 const inputs=await evaluate('document.querySelectorAll(".consign-form input").length');for(let i=0;i<inputs;i++)await fill(`.consign-form input:nth-of-type(1)`,'France');
 await evaluate("document.querySelectorAll('.consign-form input').forEach(e=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'Demo');e.dispatchEvent(new Event('input',{bubbles:true}));})");await click('.form-actions button[type=submit]');
 assert.equal(await evaluate('document.querySelector(".consign-progress .is-active span").textContent'),'03');await fill('.consign-form input[required]','Paris, France');await click('.form-actions button[type=submit]');
 assert(await evaluate('document.querySelector("main").textContent.includes("3 jours ouvrés")'));
 const paths=['/','/sales','/sale/A','/sale/B','/sale/C','/sale/D','/lot/A-001','/lot/B-001','/my-bids','/watchlist','/checkout/A-001','/confirmation/A-001','/consign','/how-it-works','/about','/demo-notes','/legal/terms','/legal/privacy','/legal/mentions','/legal/cookies','/missing'];
 const overflow=[];
 for(const language of ['fr','en','ja']){
  await click(`.language-switch [lang=${language}]`);
  for(const path of paths){await route(path);assert(await evaluate('!!document.querySelector("h1")'),`h1 ${path} ${language}`);const width=await evaluate('document.documentElement.scrollWidth');if(width>390)overflow.push({path,language,width});assert.equal(await evaluate('Array.from(document.images).filter(i=>i.complete&&i.naturalWidth===0).length'),0,`broken image ${path}`);}
  await route('/demo-notes');assert.equal(await evaluate('document.querySelectorAll(".assumption-list>div").length'),36);
 }
 assert.deepEqual(overflow,[],'No horizontal overflow at 390px');
 for(const width of [360,430,768,1440]){
  await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<768});
  for(const language of ['fr','en','ja']){
   await click(`.language-switch [lang=${language}]`);
   for(const path of ['/','/sale/B','/lot/B-001','/consign','/how-it-works','/about','/demo-notes','/legal/terms']){await route(path);assert((await evaluate('document.documentElement.scrollWidth'))<=width,`Overflow ${width}px ${language} ${path}`);}
  }
 }
 await click('.language-switch [lang=en]');await route('/');await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await pause(200);await screenshot('home-1440');
 assert.equal(errors.length,0,errors.join('\n'));
 console.log('Browser checks passed: FR default, all routes in FR/EN/JA, 390px overflow, images, registration, direct/proxy bid, watch, win/checkout/confirmation, consign, skip link.');
}finally{socket.close();}
