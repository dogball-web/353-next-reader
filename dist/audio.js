/* Author performance script, 2026-10-17. Blank scenes inherit the preceding cue.
   system38 is reserved; era jingle applies in both directions. */
const GameAudio=(()=>{
 const musicNames=['computer','minigame','curse','investigation','zhao','reasoning','lin','counseling','ending'];
 const effects=['fine','writing','era','item','click','wrong','correct','confirm','tear','startup','curtain','cover2012','cover2018'];
 let unlocked=false,muted=false,current='',bgm=null,writing=null,last=null,scene='',era=2012,voice=false,installed=false;
 const pool=new Set();let masterVolume=1;
 function applyVolumes(){if(bgm)bgm.volume=(voice?.12:.42)*masterVolume;if(writing)writing.volume=.65*masterVolume;pool.forEach(a=>a.volume=.65*masterVolume);document.querySelectorAll?.('audio').forEach(a=>{a.volume=masterVolume;a.muted=muted;});}
 function setVolume(value){const n=Number(value);if(!Number.isFinite(n))return;masterVolume=Math.max(0,Math.min(1,n));try{localStorage.setItem('353-audio-volume',String(masterVolume));}catch(e){}applyVolumes();const range=document.querySelector('#audio-volume'),out=document.querySelector('#audio-volume-value');if(range)range.value=String(Math.round(masterVolume*100));if(out)out.textContent=Math.round(masterVolume*100)+'%';}

 function make(id,isMusic=false){if(typeof Audio==='undefined')return null;const a=new Audio('assets/audio/'+(isMusic?'bgm-':'se-')+id+'.mp3');a.preload='none';a.volume=(isMusic?.42:.65)*masterVolume;return a}
 function silent(){return typeof epilogueSilent==='function'&&epilogueSilent();}
 function stopAll(){bgm?.pause();writing?.pause();pool.forEach(a=>a.pause());document.querySelectorAll?.('audio').forEach(a=>a.pause());}
 function safe(a){if(silent()||!a||!a.paused||!unlocked||muted||document.visibilityState==='hidden')return;const p=a.play();if(p?.catch)p.catch(()=>{});}
 function se(id){if(silent()||!unlocked||muted||!effects.includes(id))return;const a=make(id);if(!a)return;pool.add(a);a.onended=a.onerror=()=>pool.delete(a);safe(a);}
 function music(id){if(id==='silence'){stopAll();current='silence';return;}if(!musicNames.includes(id))return;if(current!==id){bgm?.pause();current=id;bgm=make(id,true);if(bgm)bgm.loop=true;}if(bgm){bgm.volume=(voice?.12:.42)*masterVolume;if(bgm.paused)safe(bgm);}}
 function cue(s){const p=s.phase,k=s.vnKey;if(p==='epilogue')return s.epStep>=2?'silence':s.epStep===1?'zhao':'reasoning';
  if(p==='grading')return 'silence';if(p==='finish')return 'ending';
  if(p==='vn'){
   if(k==='memory')return 'computer';
   if(VN[k]?.era===2018)return 'zhao';
   if(k.startsWith('counsel')||k==='confession')return 'counseling';
   if(['meeting','meetingResume','roleVictim','roleSender','ending3'].includes(k))return 'lin';
   if(['failed','return2012','ending1','ending2'].includes(k))return 'reasoning';
  }
  if(p==='workerIntro'||p==='workQuestions')return 'zhao';
  if(p==='poster'||p==='desktop'&&s.app==='review')return 'minigame';
  if(p==='desktop')return s.app==='sns'&&s.progress.ah>=1?'curse':'computer';
  if(p==='posterBrief')return 'computer';
  if(['warmCheck','roleHypothesis','endingChoice','compare','workerPaper','workerAfter','perception'].includes(p))return 'reasoning';
  if(['writingDesk','transcribing','worker','studentRoom','draftCompare'].includes(p))return 'investigation';
  return current||'computer';
 }
 function getEra(s){if(s.phase==='grading'||s.phase==='finish')return 2018;if(s.phase==='epilogue')return s.epStep>=1?2018:2012;return ['workerIntro','worker','compare','workerPaper','workerAfter','perception','workQuestions'].includes(s.phase)||s.phase==='vn'&&VN[s.vnKey]?.era===2018?2018:2012;}
 function fade(from,to){const el=document.createElement('div');el.className='performance-transition';el.style.setProperty('--transition-color',from!==to?(to===2018?'#102944':'#e8e4cc'):'#000');document.body.appendChild(el);setTimeout(()=>el.remove(),950);}
 function showEraDate(to){document.querySelector('.era-date-card')?.remove();const el=document.createElement('div');el.className='era-date-card';el.setAttribute('role','status');el.setAttribute('aria-live','polite');el.textContent=to===2018?'2018年1月':'2012年';document.body.appendChild(el);setTimeout(()=>el.remove(),2600);}
 function snapshot(s){return {phase:s.phase,vnKey:s.vnKey,vnStep:s.vnStep,progress:{...s.progress},posterBriefCount:s.posterBriefCount,posterReceipt:s.posterReceipt,curtainOpen:s.curtainOpen,gapSeen:s.gapSeen,found:s.found,peek:s.peek};}
 function sync(){if(typeof state==='undefined')return;const s=state,newEra=getEra(s),key=s.phase+':'+(s.phase==='vn'?s.vnKey:s.phase==='epilogue'?s.epStep:'');
  if(last){for(const k of ['teacher','ah','an'])if(s.progress[k]>last.progress[k]){se('fine');if(document.querySelector('.shell')?.classList.contains('minimized'))notify(k);}if(s.posterBriefCount>last.posterBriefCount||s.posterReceipt&&!last.posterReceipt)se('fine');if(s.phase==='vn'&&s.vnKey==='memory'&&last.vnKey==='memory'&&s.vnStep>last.vnStep)se('fine');if(s.curtainOpen!==last.curtainOpen&&['worker','workerAfter'].includes(s.phase)&&s.phase===last.phase)se('curtain');}
  if(key!==scene){if(scene){if(newEra!==era){if(s.phase!=='finish'){se('era');showEraDate(newEra);}fade(era,newEra);}else if(s.phase==='writingDesk'||s.phase==='vn'&&['counsel1','meetingResume'].includes(s.vnKey))fade(era,era);}
   if(s.phase==='studentRoom'&&last?.phase==='worker'){se('cover2012');}
   if(s.phase==='vn'&&s.vnKey==='memory')se('fine');
   if(s.phase==='epilogue'&&s.epStep===1)se('wrong');if(s.phase==='finish')revealEnding();scene=key;era=newEra;
  }
  music(cue(s));
  if(s.phase==='transcribing'){if(!writing){writing=make('writing');if(writing)writing.loop=true;}if(writing?.paused)safe(writing);}else if(writing){writing.pause();writing=null;}
  last=snapshot(s);
 }
 function notify(key){const old=document.querySelector('#fine-notification');old?.remove();const el=document.createElement('button');el.id='fine-notification';el.className='fine-notification';el.textContent='Fine　'+({teacher:'賴老師',ah:'何稻禾',an:'許安純'}[key]||'新訊息')+'傳來訊息';el.onclick=()=>{el.remove();state.fineContact=key;state.chat=['ah','an','teacher'].indexOf(key);app('sns');};document.body.appendChild(el);setTimeout(()=>el.remove(),6000);}
 function revealEnding(){const parent=document.querySelector('.endcard');if(!parent?.children)return;Array.from(parent.children).forEach((el,i)=>{el.classList.add('ending-reveal');el.style.animationDelay=i+'s';el.style.pointerEvents='none';setTimeout(()=>{if(state.phase!=='finish'||!el.isConnected)return;el.style.pointerEvents='';se('correct');},i*1000);});}
 function activate(){if(!unlocked){unlocked=true;sync();}safe(bgm);safe(writing);}
 function toggle(){muted=!muted;try{localStorage.setItem('353-audio-muted',String(muted));}catch(e){}applyVolumes();if(muted){bgm?.pause();writing?.pause();pool.forEach(a=>a.pause());}else{activate();sync();}const b=document.querySelector('#audio-toggle');if(b){b.textContent=muted?'♪ 靜音':'♪ 音效';b.setAttribute('aria-pressed',String(muted));}}
 function install(){if(installed||typeof Audio==='undefined')return;installed=true;try{muted=localStorage.getItem('353-audio-muted')==='true';const saved=localStorage.getItem('353-audio-volume');if(saved!==null&&saved!==undefined&&saved!==''&&Number.isFinite(Number(saved)))masterVolume=Math.max(0,Math.min(1,Number(saved)));}catch(e){}
  const b=document.createElement('button');b.id='audio-toggle';b.className='audio-toggle';b.textContent=muted?'♪ 靜音':'♪ 音效';b.setAttribute('aria-label','切換遊戲音樂與音效');b.setAttribute('aria-pressed',String(muted));b.onclick=toggle;const controls=document.createElement('details');controls.className='audio-controls';const summary=document.createElement('summary');summary.textContent='♪ 音量';summary.setAttribute('aria-label','開啟音量設定');controls.appendChild(summary);const panel=document.createElement('div');panel.className='audio-panel';const label=document.createElement('label');label.textContent='音量';label.htmlFor='audio-volume';const range=document.createElement('input');range.id='audio-volume';range.type='range';range.min='0';range.max='100';range.step='1';range.value=String(Math.round(masterVolume*100));range.setAttribute('aria-label','遊戲音量');range.oninput=()=>setVolume(Number(range.value)/100);const out=document.createElement('output');out.id='audio-volume-value';out.htmlFor='audio-volume';out.textContent=Math.round(masterVolume*100)+'%';panel.appendChild(label);panel.appendChild(range);panel.appendChild(out);panel.appendChild(b);controls.appendChild(panel);document.body.appendChild(controls);
  document.addEventListener('pointerdown',activate,{passive:true});document.addEventListener('keydown',activate);
  document.addEventListener('click',e=>{activate();if(e.target.closest?.('button,a,[data-hot],.vn-dialogue,.return-dialog,.scene-dialogue')&&!e.target.closest?.('audio,.audio-controls'))se('click');},true);
  document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO'){e.target.volume=masterVolume;e.target.muted=muted;voice=true;if(bgm)bgm.volume=.12*masterVolume;}},true);for(const event of ['pause','ended'])document.addEventListener(event,e=>{if(e.target.tagName==='AUDIO'){voice=false;if(bgm)bgm.volume=.42*masterVolume;}},true);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){bgm?.pause();writing?.pause();pool.forEach(a=>a.pause());}else{activate();sync();}});sync();
 }
 function before(id){if(id==='diagnose'&&state.phase==='worker'&&selected===1&&proof===1)se('cover2018');return {phase:state.phase,line:state.line,copy:state.copy,destroyed:state.destroyed,draftErrors:state.draftErrors};}
 function after(id,b){if(id==='showdiagnosis')fade(2018,2018);if(id==='begin')se('startup');if(id==='pfinish')se('fine');if(id==='viewposter')se('item');if(id==='destroy'&&!b.destroyed&&state.destroyed){se('tear');setTimeout(()=>se('tear'),500);}
  if(id==='diagnose'&&b.phase==='worker'){const ok=state.phase==='studentRoom';se(ok?'correct':'wrong');}
  if(id==='compare'&&b.phase==='compare')se(state.phase==='workerPaper'?'correct':'wrong');
  if(id==='perception'&&b.phase==='perception')se(state.phase==='vn'?'correct':'wrong');
  if(/^warmcheck[0-2]$/.test(id)&&b.phase==='warmCheck')se(id==='warmcheck0'?'correct':'wrong');
  if(id==='accuse'&&b.phase==='draftCompare'&&(state.draftErrors>b.draftErrors||state.phase==='vn'))se(state.confrontation?'correct':'wrong');
 }
 function reset(){stopAll();current='';bgm=null;writing=null;last=null;scene='';era=2012;voice=false;}
 return {install,sync,se,cue,getEra,before,after,reset,setVolume};
})();
