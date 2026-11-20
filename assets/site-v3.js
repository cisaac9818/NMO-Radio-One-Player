'use strict';
const stations={
 'radio-one':{name:'NMO Radio One',kind:'Radio',path:'/nmo-radio-one/',src:'/players/radio-one.html',description:'Southern Soul and Old School R&B, with independent artists in the mix.'},
 'indieground':{name:'NMO Indieground Radio',kind:'Radio',path:'/indieground-radio/',src:'/players/indieground.html',description:'Hip-hop, rap and independent artists. Tune in to NMO Indieground Radio.'},
 'nmo-tv':{name:'NMO Television',kind:'Television',path:'/nmo-tv/',src:'https://tv.nmotvtoo.com/server-stream-video-widget/nmotv',description:'Interviews, live programming and independent talent on NMO Television.'},
 'indie-vybez':{name:'Indie Vybez TV',kind:'Television',path:'/indie-vybez-tv/',src:'https://vybez.nmotvtoo.com/server-stream-video-widget/nmotion',description:'Independent hip-hop music videos on Indie Vybez TV.'}
};
let selected='radio-one';
const mount=document.getElementById('player-mount');
function selectStation(key,load=false,updateUrl=false){
 const s=stations[key];if(!s)return;selected=key;
 document.querySelectorAll('[data-station]').forEach(b=>{const active=b.dataset.station===key;b.classList.toggle('selected',active);active?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current')});
 document.getElementById('player-title').textContent=s.name;
 document.getElementById('player-kind').textContent=s.kind.toUpperCase();
 document.getElementById('external-player').href=s.src;
 const description=document.getElementById('player-description');if(description)description.textContent=s.description;
 if(updateUrl){try{history.pushState({station:key},'',s.path+'#player')}catch{}}
 if(load)loadPlayer();
}
function loadPlayer(){
 const s=stations[selected];const frame=document.createElement('iframe');
 frame.title=s.name+' player';frame.src=s.src;frame.allow='autoplay; fullscreen; picture-in-picture';frame.allowFullscreen=true;
 frame.className=s.kind==='Radio'?'radio-frame':'video-frame';
 mount.replaceChildren(frame);
}
document.querySelectorAll('[data-station]').forEach(b=>b.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();selectStation(b.dataset.station,true,true);document.getElementById('player').scrollIntoView({behavior:'auto',block:'start'});}));
document.getElementById('load-player')?.addEventListener('click',loadPlayer);
window.addEventListener('message',event=>{
 const f=mount.querySelector('iframe');
 if(event.origin!==location.origin||!f||event.source!==f.contentWindow||event.data?.type!=='nmo-player-size')return;
 const h=Number(event.data.height);if(Number.isFinite(h)&&h>50&&h<5000)f.style.height=h+'px';
});
function fromPath(){return Object.keys(stations).find(k=>stations[k].path.replace(/\/$/,'')===location.pathname.replace(/\/$/,''))||'radio-one'}
addEventListener('popstate',()=>selectStation(fromPath(),true));
selectStation(fromPath(),location.hash==='#player');
document.getElementById('year').textContent=new Date().getFullYear();
