/* ===== Compagnon Maths V2 — moteur autonome ===== */
const VERSION="2.0.1";
const INTERVALS=[1,3,7,14,30];
const DIMENSIONS=["comprehension","calculation","reasoning","demonstration","transfer"];
const DIM_LABELS={comprehension:"Compréhension",calculation:"Calcul",reasoning:"Raisonnement",demonstration:"Démonstration",transfer:"Transfert"};
const LEVELS=["À construire","Fragile","En cours","Solide","Maîtrisé"];
const ICONS=["🔴","🟠","🟡","🔵","🟢"];
const DEFAULT_THRESHOLDS={comprehension:80,calculation:75,reasoning:75,demonstration:70,transfer:70};
const ERROR_TYPES={definition:"Erreur de définition",logic:"Erreur logique",quantifier:"Erreur de quantificateur",calculation:"Erreur de calcul",algebra:"Erreur algébrique",strategy:"Erreur de stratégie",theorem:"Erreur de théorème",hypothesis:"Erreur d'hypothèse",writing:"Erreur de rédaction",proof:"Erreur de démonstration",interpretation:"Erreur d'interprétation"};
const STORAGE_KEY="compagnon_maths_v2";

let state={version:VERSION,theme:"",thresholds:{...DEFAULT_THRESHOLDS},notions:{},errors:[],days:[],totalMinutes:0,history:[],diagnosticDone:false,session:null,counterexampleIndex:0};
let view="home",currentNotion=null,lessonStep=0,exerciseIndex=0,hintLevel=0,answered=false,startTime=0;

const allLessons=()=>[...(typeof ALGEBRA_LESSONS!=="undefined"?ALGEBRA_LESSONS:[]),...(typeof ANALYSE_LESSONS!=="undefined"?ANALYSE_LESSONS:[])];
const today=()=>new Date().toISOString().slice(0,10);
const addDays=n=>new Date(Date.now()+n*864e5).toISOString().slice(0,10);
const escapeHtml=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw)return;
    const saved=JSON.parse(raw);
    state={...state,...saved,thresholds:{...DEFAULT_THRESHOLDS,...(saved.thresholds||{})}};
  }catch(e){console.warn("Données locales invalides, réinitialisation.");}
}
function saveState(){try{state.version=VERSION;localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(e){console.warn("Sauvegarde impossible.");}}
function markDay(){if(!state.days.includes(today()))state.days.push(today());}
function streak(){let n=0,d=0;while(state.days.includes(addDays(-d))){n++;d++;}return n;}
function getNotion(id){
  if(!state.notions[id])state.notions[id]={scores:Object.fromEntries(DIMENSIONS.map(d=>[d,0])),attempts:0,successes:0,failures:0,autonomousSuccesses:0,hintedSuccesses:0,lastReview:null,nextReview:null,interval:1,confidence:0,done:false,note:"",history:[]};
  return state.notions[id];
}
function avgScore(id){const n=getNotion(id);return Math.round(DIMENSIONS.reduce((s,d)=>s+n.scores[d],0)/DIMENSIONS.length);}
function masteryLevel(id){
  const n=getNotion(id), avg=avgScore(id);
  if(avg<25)return 0;if(avg<50)return 1;if(avg<70)return 2;if(avg<85)return 3;
  return DIMENSIONS.some(d=>n.scores[d]<state.thresholds[d])?3:4;
}
function statusIcon(id){return ICONS[masteryLevel(id)]}
function statusLabel(id){return LEVELS[masteryLevel(id)]}
function getPrerequisites(id){const n=allLessons().find(x=>x.id===id);return n?.prerequisites||[];}
function weakPrerequisites(id){return getPrerequisites(id).filter(p=>!getNotion(p).done||masteryLevel(p)<2);}
function updateSpacedRepetition(id,quality){
  const n=getNotion(id);n.lastReview=today();
  if(quality===2){n.autonomousSuccesses++;n.interval=INTERVALS[Math.min(INTERVALS.indexOf(n.interval)+1,INTERVALS.length-1)];}
  else if(quality===1){n.hintedSuccesses++;n.interval=Math.max(1,n.interval);}
  else{n.failures++;n.interval=1;}
  n.nextReview=addDays(n.interval);saveState();
}

function nextRecommendation(){
  const t=today(), due=Object.keys(state.notions).find(id=>state.notions[id].nextReview&&state.notions[id].nextReview<=t);
  if(due)return{id:due,reason:"Révision espacée à faire"};
  const fragile=Object.keys(state.notions).find(id=>state.notions[id].done&&masteryLevel(id)<3);
  if(fragile)return{id:fragile,reason:"Notion fragile ou en cours"};
  const fresh=allLessons().find(n=>!state.notions[n.id]||!state.notions[n.id].done);
  if(fresh){const weak=weakPrerequisites(fresh.id);if(weak.length)return{id:weak[0],reason:`Prérequis à revoir avant « ${fresh.title} »`};return{id:fresh.id,reason:"Nouvelle notion"};}
  return{id:allLessons()[0]?.id,reason:"Transfert : refais un exercice"};
}

function navigate(v){view=v;render();}
function render(){
  renderNav();const main=document.getElementById("main");
  const views={home,path,map:renderMap,counterexample,errors,stats,lesson,report,diagnostic,settings};
  main.innerHTML=(views[view]||home)();window.scrollTo(0,0);
}
function renderNav(){
  const items=[["home","🏠 Accueil"],["path","📚 Parcours"],["map","🗺️ Carte"],["diagnostic","🧪 Diagnostic"],["counterexample","⚠️ Contre-exemple"],["errors","📕 Erreurs"],["stats","📈 Statistiques"],["settings","⚙️ Données"]];
  document.getElementById("nav").innerHTML=`<h1>Compagnon Maths</h1>`+items.map(([v,l])=>`<button class="${view===v?"on":""}" onclick="navigate('${v}')">${l}</button>`).join("")+`<button onclick="toggleTheme()">🌓 Thème</button>`;
}
function toggleTheme(){const h=document.documentElement,n=h.dataset.theme==="dark"?"light":"dark";h.dataset.theme=n;state.theme=n;saveState();}
function home(){
  const rec=nextRecommendation(), r=allLessons().find(n=>n.id===rec.id);
  const due=Object.keys(state.notions).filter(id=>state.notions[id].nextReview&&state.notions[id].nextReview<=today()).length;
  const fragile=Object.keys(state.notions).filter(id=>state.notions[id].done&&masteryLevel(id)<3).length;
  const mastered=Object.keys(state.notions).filter(id=>masteryLevel(id)===4).length;
  return `<h2>Bienvenue</h2>
  <div class="c"><h3>🎯 Objectif du jour</h3><b>${escapeHtml(r?.title||"—")}</b> <span class="mu">— ${escapeHtml(rec.reason)}</span>
  <div class="row" style="margin-top:8px">${r?`<button class="p" onclick="openNotion('${r.id}',${rec.reason.startsWith("Révision")},false)">Commencer</button>`:""}${r?`<button onclick="openNotion('${r.id}',false,true)">Passer les prérequis</button>`:""}</div></div>
  <div class="c"><h3>📊 Tableau de bord</h3><div>⏱ Temps étudié : ${Math.round(state.totalMinutes)} min</div><div>📚 Notions maîtrisées : ${mastered}</div><div>🟠 Notions fragiles : ${fragile}</div><div>🔁 Révisions dues : ${due}</div><div>🔥 Régularité : ${streak()} jour(s)</div></div>
  <div class="c"><h3>📕 Erreurs récentes</h3>${state.errors.slice(-3).reverse().map(e=>`<div>• ${escapeHtml(e.notion)} — <i>${escapeHtml(ERROR_TYPES[e.type]||e.type||"Erreur")}</i></div>`).join("")||"<span class='mu'>Aucune erreur enregistrée.</span>"}</div>`;
}
function path(){
  return `<h2>📚 Parcours</h2><p class="mu">Notions pédagogiquement développées dans cette version : ${allLessons().length}. La carte complète des chapitres est disponible dans « Carte ».</p>`+
  allLessons().map(n=>{const id=n.id,lvl=masteryLevel(id),s=getNotion(id);return `<div class="c"><div class="row"><b style="flex:1">${statusIcon(id)} ${escapeHtml(n.title)}</b><span class="mu">${escapeHtml(n.chapter)}</span></div><div class="grid5" style="margin-top:8px">${DIMENSIONS.map(d=>`<div class="metric"><div class="small mu">${DIM_LABELS[d]}</div><b>${s.scores[d]}%</b></div>`).join("")}</div><div class="row" style="margin-top:8px"><button class="p" onclick="openNotion('${id}')">Étudier</button>${s.done?`<button onclick="openNotion('${id}',true)">Rappel actif</button>`:""}</div></div>`}).join("");
}
function renderMap(){
  const trees=[
    {title:"Algèbre",tree:ALGEBRA_TREE,lessons:ALGEBRA_LESSONS},
    {title:"Analyse",tree:ANALYSE_TREE,lessons:ANALYSE_LESSONS}
  ];
  let html=`<h2>🗺️ Carte des connaissances</h2>
    <p class="mu">Structure des chapitres fournie dans le prototype. Seules les notions réellement développées sont directement étudiables.</p>`;
  for(const item of trees){
    html+=`<h3>${escapeHtml(item.title)}</h3>`;
    for(const ch of item.tree.chapters){
      html+=`<div class="c">
        <b>Chap. ${ch.n} — ${escapeHtml(ch.title)}</b>
        <span class="mu">(p. ${ch.page})</span>
        <div class="mu">${escapeHtml(ch.sections.join(" · "))}</div>`;
      for(const nid of ch.notions){
        const lesson=item.lessons.find(x=>x.id===nid);
        if(lesson){
          html+=`<div class="row" style="margin-top:6px">
            ${statusIcon(nid)} ${escapeHtml(lesson.title)}
            <button onclick="openNotion('${nid}')">Étudier</button>
          </div>`;
        }else{
          html+=`<div class="mu">• ${escapeHtml(nid)} <em>(structure seule)</em></div>`;
        }
      }
      html+=`</div>`;
    }
  }
  return html;
}
function counterexample(){
  if(!COUNTEREXAMPLES.length)return "<h2>Contre-exemples</h2><p>Aucun contenu.</p>";
  const x=COUNTEREXAMPLES[state.counterexampleIndex%COUNTEREXAMPLES.length];
  return `<h2>⚠️ Trouve le contre-exemple</h2><div class="c"><h3>Affirmation — ${state.counterexampleIndex%COUNTEREXAMPLES.length+1}/${COUNTEREXAMPLES.length}</h3><b>${escapeHtml(x.s)}</b><p>Quel est un contre-exemple ?</p>${x.options.map((o,k)=>`<button class="o" onclick="checkCounterexample(${k})">${escapeHtml(o)}</button>`).join("")}<div id="cex-feedback"></div></div>`;
}
function checkCounterexample(k){
  const x=COUNTEREXAMPLES[state.counterexampleIndex%COUNTEREXAMPLES.length],fb=document.getElementById("cex-feedback");
  if(k===x.ok)fb.innerHTML=`<div class="msg g">✅ ${escapeHtml(x.explain)}</div><p>Reformule l'énoncé pour qu'il devienne vrai :</p><textarea id="cex-reform"></textarea><button class="p" onclick="showReformulation()">Voir une reformulation</button>`;
  else fb.innerHTML=`<div class="msg r">❌ Ce n'est pas un contre-exemple. Réessaie.</div>`;
}
function showReformulation(){
  const x=COUNTEREXAMPLES[state.counterexampleIndex%COUNTEREXAMPLES.length];
  document.getElementById("cex-feedback").innerHTML+=`<div class="msg y">Reformulation correcte : ${escapeHtml(x.reformulate)}</div><button class="p" onclick="state.counterexampleIndex++;saveState();render()">Suivante</button>`;
}
function errors(){
  return `<h2>📕 Carnet d'erreurs</h2>${state.errors.length?[...state.errors].reverse().map(e=>`<div class="c"><b>${escapeHtml(e.notion)}</b> · <i>${escapeHtml(ERROR_TYPES[e.type]||e.type||"Erreur")}</i>${e.count>=3?` · 🔁 <b>Erreur répétée ${e.count} fois</b>`:""}<br>${escapeHtml(e.question)}<br>Ta réponse : ${escapeHtml(e.answer||"—")}<br><span class="mu">Correction : ${escapeHtml(e.fix)} · ${e.date} · ×${e.count}</span><div><button onclick="openNotion('${e.notionId}',false,true)">Retravailler</button></div></div>`).join(""):"<p class='mu'>Aucune erreur enregistrée.</p>"}`;
}
function stats(){
  const hist=state.history||[],total=hist.length,ok=hist.filter(h=>h.ok),autonomous=ok.filter(h=>!h.hinted),ec={};
  hist.filter(h=>!h.ok).forEach(h=>ec[h.type]=(ec[h.type]||0)+1);
  const top=Object.entries(ec).sort((a,b)=>b[1]-a[1])[0];
  return `<h2>📈 Statistiques</h2><div class="c">Temps total : ${Math.round(state.totalMinutes)} min<br>Notions vues : ${Object.keys(state.notions).filter(id=>getNotion(id).done).length}/${allLessons().length}<br>Exercices : ${total} · réussite ${total?Math.round(100*ok.length/total):0} %<br>Réussite sans indice : ${autonomous.length} · avec indice : ${ok.length-autonomous.length}<br>Série : ${streak()} jour(s)</div><div class="c">${top&&total>=5?`Erreur la plus fréquente : <b>${escapeHtml(ERROR_TYPES[top[0]]||top[0])}</b> (${top[1]}×).`:"Pas encore assez de données pour dégager un point faible."}</div>`;
}

function openNotion(id,isReview=false,skipPrereq=false){
  currentNotion=allLessons().find(n=>n.id===id);if(!currentNotion)return;
  lessonStep=isReview?9:0;exerciseIndex=0;hintLevel=0;answered=false;startTime=Date.now();
  state.session={id,exercises:0,ok:0,hinted:0,errors:[]};view="lesson";
  if(!isReview&&!skipPrereq&&weakPrerequisites(id).length)lessonStep=-1;
  render();
}
function lesson(){
  const c=currentNotion;if(!c)return "<p>Notion introuvable.</p>";
  if(lessonStep===-1){
    const weak=weakPrerequisites(c.id);return `<h2>${escapeHtml(c.title)}</h2><div class="c"><h3>Prérequis</h3>${getPrerequisites(c.id).map(q=>{const n=allLessons().find(x=>x.id===q);return `<div>${weak.includes(q)?"⚠":"✓"} ${escapeHtml(n?.title||q)} ${statusIcon(q)}</div>`}).join("")}<p>Cette notion dépend de prérequis encore fragiles.</p><div class="row">${weak[0]?`<button class="p" onclick="openNotion('${weak[0]}')">Revoir le prérequis</button>`:""}<button onclick="openNotion('${c.id}',false,true)">Continuer quand même</button></div></div>`;
  }
  if(lessonStep===9)return `<h2>Rappel actif : ${escapeHtml(c.title)}</h2><div class="c">${escapeHtml(c.recall)}<textarea id="recall-input" placeholder="Ta réponse, sans regarder le cours…"></textarea><button onclick="document.getElementById('recall-def').hidden=false">Voir la définition</button><div id="recall-def" hidden><div class="def" style="margin:10px 0">${c.def}</div><div class="row"><button onclick="rateRecall(2)">✅ Je l'avais</button><button onclick="rateRecall(1)">🟡 En partie</button><button onclick="rateRecall(0)">❌ Non</button></div></div></div>`;
  const sections=[["Question de départ",c.q],["Intuition",c.intu],["Définition rigoureuse",`<div class="def">${c.def}</div>`],["Exemple",c.ex],["Contre-exemple",c.cex],["Pourquoi ?",`${c.why}<p class="mu">Prends une minute pour y réfléchir avant de continuer.</p>`]];
  if(lessonStep<sections.length)return `<h2>${escapeHtml(c.title)}</h2><p class="mu">${escapeHtml(c.chapter)} · étape ${lessonStep+1}/${sections.length}</p>${sections.slice(0,lessonStep+1).map((s,i)=>`<div class="c" ${i<lessonStep?'style="opacity:.75"':''}><h3>${s[0]}</h3>${s[1]}</div>`).join("")}<div class="row"><button class="p" onclick="lessonStep++;render()">Suivant</button><button onclick="showHelp()">🤔 Je ne comprends pas</button></div><div id="help-zone"></div>`;
  const ex=c.exercises[exerciseIndex];
  if(!ex)return `<h2>Explique avec tes mots</h2><div class="c">Ferme le cours. Sans regarder : explique la notion, donne un exemple et un contre-exemple.<textarea id="final-explanation"></textarea><button class="p" onclick="finishLesson()">Terminer</button></div>`;
  return `<h2>Exercice ${exerciseIndex+1}/${c.exercises.length}</h2><div class="c"><b>${escapeHtml(ex.q)}</b>${ex.options.map((o,i)=>`<button class="o" ${answered?"disabled":""} onclick="answerExercise(${i})">${escapeHtml(o[0])}</button>`).join("")}<div id="exercise-feedback"></div>${!answered?`<div class="row"><button onclick="showHint()">💡 Indice (${hintLevel}/3)</button></div>`:""}</div>`;
}
function showHelp(){
  const c=currentNotion,z=document.getElementById("help-zone");if(!z)return;
  const levels=[["Reformulation",c.intu],["Analogie","Pense à une situation concrète où cette notion intervient."],["Exemple",c.ex],["Contre-exemple",c.cex],["Définition rigoureuse",c.def],["Prérequis",getPrerequisites(c.id).join(", ")||"Aucun prérequis dans ce corpus."]];
  let l=Math.min((parseInt(z.dataset.level||"0")+1),levels.length);z.dataset.level=l;
  z.innerHTML=levels.slice(0,l).map((x,i)=>`<div class="c"><h3>Niveau ${i+1} — ${x[0]}</h3>${x[1]}</div>`).join("")+(l<levels.length?`<button onclick="showHelp()">Encore une aide</button>`:"");
}
function answerExercise(i){
  const c=currentNotion,ex=c.exercises[exerciseIndex],option=ex.options[i],good=i===ex.ok;
  answered=true;markDay();const n=getNotion(c.id),dim=ex.dim||"reasoning";n.attempts++;
  if(good){n.successes++;n.scores[dim]=Math.min(100,n.scores[dim]+(hintLevel?10:25));n.scores.comprehension=Math.min(100,n.scores.comprehension+(hintLevel?3:6));if(hintLevel)n.hintedSuccesses++;else n.autonomousSuccesses++;state.session.ok++;if(hintLevel)state.session.hinted++;}
  else{n.failures++;state.session.errors.push(option[1]||"Erreur");const existing=state.errors.find(e=>e.question===ex.q);if(existing){existing.count++;existing.date=today();}else state.errors.push({notion:c.title,notionId:c.id,question:ex.q,answer:option[0],type:option[1]||"error",why:option[2]||"",fix:ex.sol,hinted:hintLevel,date:today(),count:1});}
  state.session.exercises++;state.history.push({id:c.id,ok:good,hinted:hintLevel>0,date:today(),dim,type:good?null:(option[1]||"error")});saveState();render();
  const fb=document.getElementById("exercise-feedback");if(!fb)return;
  fb.innerHTML=good?`<div class="msg g">✅ Correct. ${escapeHtml(ex.sol)}</div><button class="p" onclick="nextExercise()">Continuer</button>`:`<div class="msg r">❌ ${escapeHtml(option[1]||"Erreur")}. ${escapeHtml(option[2]||"")}</div><div class="row"><button onclick="answered=false;render()">Réessayer</button><button onclick="showHint()">💡 Indice</button></div>`;
}
function showHint(){
  const ex=currentNotion.exercises[exerciseIndex],fb=document.getElementById("exercise-feedback");if(!fb)return;
  if(hintLevel<3){hintLevel++;fb.innerHTML=`<div class="msg y">${"💡".repeat(hintLevel)} ${escapeHtml(ex.hints[hintLevel-1])}</div>`;}
  else fb.innerHTML=`<div class="msg y">📝 ${escapeHtml(ex.sol)}</div>`;
}
function nextExercise(){exerciseIndex++;hintLevel=0;answered=false;render();}
function finishLesson(){
  const text=document.getElementById("final-explanation")?.value.trim()||"";if(text.length<30){alert("Écris au moins une ou deux phrases.");return;}
  const n=getNotion(currentNotion.id);n.scores.comprehension=Math.min(100,n.scores.comprehension+15);n.done=true;n.note=text;n.lastReview=today();n.nextReview=addDays(1);
  state.totalMinutes+=(Date.now()-startTime)/60000;state.session.minutes=Math.round((Date.now()-startTime)/60000);markDay();saveState();view="report";render();
}
function rateRecall(q){updateSpacedRepetition(currentNotion.id,q);if(q===2)getNotion(currentNotion.id).scores.transfer=Math.min(100,getNotion(currentNotion.id).scores.transfer+10);state.totalMinutes+=(Date.now()-startTime)/60000;markDay();saveState();view="home";render();}
function report(){
  const s=state.session,c=currentNotion;return `<h2>Séance terminée</h2><div class="c">Durée : ${s?.minutes||0} min · ${s?.ok||0}/${s?.exercises||0} exercices réussis (${s?.hinted||0} avec indice)<p><b>${escapeHtml(c.title)}</b> : ${statusIcon(c.id)} ${statusLabel(c.id)}</p>${DIMENSIONS.map(d=>`<div>${DIM_LABELS[d]} : ${getNotion(c.id).scores[d]} %</div>`).join("")}<p>${s?.errors?.length?"Erreurs : "+[...new Set(s.errors)].map(e=>escapeHtml(ERROR_TYPES[e]||e)).join(", "):"Aucune erreur."}</p><p class="mu">Prochaine révision : ${getNotion(c.id).nextReview||"—"}.</p><button class="p" onclick="navigate('home')">Accueil</button></div>`;
}

function diagnostic(){
  const qs=[
    ["Négation de « P ⇒ Q » ?","P et non Q"],["∀x ∃y, y > x est-elle vraie sur ℝ ?","Oui"],["f(x)=x² est-elle injective sur ℝ ?","Non"],["|3+4i| = ?","5"],["Une suite bornée converge-t-elle toujours ?","Non"],["La partie entière est-elle continue en 1 ?","Non"],["Que vaut z·z̄ ?","|z|²"],["Si f∘g est injective, g est-elle injective ?","Oui"],["|x| est-elle dérivable en 0 ?","Non"],["La somme de deux rationnels est-elle rationnelle ?","Oui"]];
  if(state.diagnosticDone)return `<h2>🧪 Diagnostic initial</h2><div class="c"><p>Diagnostic déjà effectué dans ce navigateur.</p><button class="p" onclick="resetDiagnostic()">Recommencer</button></div>`;
  return `<h2>🧪 Diagnostic initial</h2><div class="c"><p>Version courte du diagnostic fournie par le prototype : ${qs.length} questions.</p>${qs.map((q,i)=>`<div class="c"><b>${i+1}. ${escapeHtml(q[0])}</b><input id="dq${i}" placeholder="Ta réponse"></div>`).join("")}<button class="p" onclick="finishDiagnostic()">Évaluer</button></div>`;
}
function finishDiagnostic(){
  const answers=["P et non Q","Oui","Non","5","Non","Non","|z|²","Oui","Non","Oui"];let score=0;
  answers.forEach((a,i)=>{const v=document.getElementById("dq"+i)?.value.trim().toLowerCase();if(v&&v===a.toLowerCase())score++;});
  state.diagnosticDone=true;state.history.push({type:"diagnostic",date:today(),score,total:answers.length});markDay();saveState();
  alert(`Diagnostic enregistré : ${score}/${answers.length}.`);render();
}
function resetDiagnostic(){state.diagnosticDone=false;saveState();render();}
function settings(){
  return `<h2>⚙️ Données et réglages</h2><div class="c"><h3>Seuils de maîtrise</h3>${DIMENSIONS.map(d=>`<label>${DIM_LABELS[d]} : <input id="th-${d}" type="number" min="0" max="100" value="${state.thresholds[d]}"></label>`).join("")}<button class="p" onclick="saveThresholds()">Enregistrer les seuils</button></div>
  <div class="c"><h3>Sauvegarde</h3><p class="mu">Exportez vos progrès avant de changer de navigateur ou d'appareil.</p><div class="row"><button class="p" onclick="exportData()">⬇ Exporter JSON</button><label><button onclick="document.getElementById('import-file').click()">⬆ Importer JSON</button><input id="import-file" type="file" accept="application/json" hidden onchange="importData(this.files[0])"></label><button onclick="resetAll()">Réinitialiser les données</button></div></div>
  <div class="c"><h3>À propos</h3><p>Compagnon Maths V2.1 — moteur local, sans compte et sans serveur. Le corpus complet des chapitres est cartographié, mais seuls les contenus pédagogiques fournis dans le prototype sont développés.</p></div>`;
}
function saveThresholds(){DIMENSIONS.forEach(d=>{const v=Number(document.getElementById("th-"+d).value);state.thresholds[d]=Math.max(0,Math.min(100,isFinite(v)?v:DEFAULT_THRESHOLDS[d]));});saveState();render();}
function exportData(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download=`compagnon-maths-sauvegarde-${today()}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function importData(file){
  if(!file)return;const r=new FileReader();r.onload=()=>{try{const incoming=JSON.parse(r.result);if(!incoming||typeof incoming!=="object")throw Error();state={...state,...incoming,thresholds:{...DEFAULT_THRESHOLDS,...(incoming.thresholds||{})}};saveState();render();alert("Sauvegarde importée.");}catch(e){alert("Fichier JSON invalide.");}};r.readAsText(file);
}
function resetAll(){if(confirm("Effacer toutes les données locales de Compagnon Maths ?")){localStorage.removeItem(STORAGE_KEY);location.reload();}}
loadState();if(state.theme)document.documentElement.dataset.theme=state.theme;render();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
