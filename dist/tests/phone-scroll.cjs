const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
let markup='first',writes=0,current=null;const frames=[];const launcher={style:{}};const layer={querySelector:()=>current};
Object.defineProperty(layer,'innerHTML',{get(){return markup;},set(value){writes++;if(current)current.isConnected=false;const events={};current=value?{scrollHeight:600,scrollTop:0,isConnected:true,events,querySelectorAll:()=>[{tagName:'IMG',addEventListener:(name,fn)=>events[name]=fn}]}:null;}});
const ctx=vm.createContext({document:{querySelector:q=>q==='#shen-phone-layer'?layer:q==='#shen-phone-launcher'?launcher:q==='.shell'?{classList:{toggle(){}}}:null},window:{addEventListener(){},innerHeight:800},requestAnimationFrame:fn=>frames.push(fn),state:{begun:true,phase:'desktop',phoneOpen:true,phoneContacts:false},VN:{},modal:'',fineUI:()=>markup,console});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../phone.js'),'utf8'),ctx);const run=s=>vm.runInContext(s,ctx);const flush=()=>{while(frames.length)frames.shift()();};
run('syncShenPhone()');assert.equal(writes,1);assert.equal(current.scrollTop,600);const first=current;run('syncShenPhone()');assert.equal(writes,1);assert.strictEqual(current,first); // renderModal's second sync must not erase the scrolled DOM.
current.scrollHeight=750;flush();assert.equal(current.scrollTop,750);
markup='new photo message';run('syncShenPhone()');assert.equal(writes,2);const photo=current;photo.scrollHeight=1100;photo.events.load();flush();assert.equal(photo.scrollTop,1100);
markup='another conversation';run('syncShenPhone()');const next=current;first.events.load();photo.events.load();assert.strictEqual(current,next);assert.equal(current.scrollTop,600);flush();
run('state.phoneOpen=false;syncShenPhone()');assert.equal(current,null);photo.events.load();flush();assert.equal(current,null);
console.log('PASS phone scroll: repeated sync retains DOM and scroll, new messages pin after layout, delayed photo load pins bottom, stale callbacks cannot scroll a different or closed chat.');
