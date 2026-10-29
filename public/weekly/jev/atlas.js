const label = value => value.replaceAll('_', ' ').replace(/^./, c => c.toUpperCase());
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const percent = value => Math.round(value * 100) + '%';
let threshold = .8;
function diagram(item, scenario, index) {
 const choice = scenario.result.choice;
 switch(item.visual) {
 case 'audit': return '<div class="audit-map">'+item.scenarios.map((s,i)=>'<div class="audit-row '+(i===index?'active':'')+'"><span>'+esc(s.label)+'</span><strong>'+label(s.result.choice)+'</strong></div>').join('')+'</div><div class="threshold"><label for="threshold">Review threshold <output id="threshold-value">'+percent(threshold)+'</output></label><input id="threshold" type="range" min="0" max="100" value="'+threshold*100+'"><p class="policy" id="policy"></p></div>';
 case 'pipeline': return '<div class="pipeline"><div class="step done"><strong>Work ran</strong><span>Execution recorded</span></div><span class="connector" aria-hidden="true">→</span><div class="step '+(choice==='complete'?'done':'')+'"><strong>'+(choice==='complete'?'Delivered':'Delivery failed')+'</strong><span>'+(choice==='complete'?'Receipt available':'No receipt')+'</span></div></div>';
 case 'evidence': return '<div class="evidence-scale"><p><span>Observed</span>Tokens used · $0 recorded · billing source missing</p><p><span>Claim</span>'+(index===0?'“The runs were free.”':'“We need billing evidence.”')+'</p><div class="claim-mark">'+(index===0?'Evidence gap → unsupported leap':'Evidence gap → request verification')+'</div></div>';
 case 'diff': return '<div class="diff"><div><span>Original</span><p>'+esc(scenario.before)+'</p></div><div class="after"><span>Revision</span><p>'+esc(scenario.after)+'</p></div></div>';
 case 'rubric': return '<div class="checklist">'+['Concrete input','Known environment','Observable outcome'].map(t=>'<div class="check-row"><span>'+t+'</span><strong>'+(index===1?'Present':'Missing')+'</strong></div>').join('')+'</div>';
 case 'lesson': return '<div class="lesson-flow">'+[['Understand','Name the environment'],['Build',index===1?'Create a calendar sandbox':'No bounded exercise'],['Inspect',index===1?'Check the final state':'No specific result']].map(([a,b],i)=>'<div class="'+(index===1||i===0?'selected':'')+'"><strong>'+a+'</strong><span>'+b+'</span></div>').join('')+'</div>';
 case 'inbox': return '<div class="slots">'+['reply','read','ignore'].map(t=>'<div class="slot '+(choice===t?'selected':'')+'"><span>'+label(t)+'</span><span>'+(choice===t?'This message':'—')+'</span></div>').join('')+'</div>';
 case 'fit': return '<div><div class="fit-row"><span>Architecture</span><strong>'+(index===0?'Farmhouse':'Contemporary')+'</strong></div><div class="fit-row"><span>Rail access</span><strong>'+(index===0?'Not stated':'15 min, claimed')+'</strong></div><div class="fit-row"><span>Source checked?</span><strong>No</strong></div></div>';
 case 'timeline': return '<div class="timeline"><div><span>Earlier preference</span><p>'+(index===0?'Oversized editorial type for this site.':'Dramatic type for a poster.')+'</p></div><div><span>New preference</span><p>Comfortable type for a reading tool.</p></div></div>';
 case 'context': return '<div>'+[['draft_editor','Draft comparison'],['automation_audit','Daily-jobs audit'],['lesson_brief','Evaluation workshop']].map(([key,name])=>'<div class="context-node '+(choice===key?'selected':'')+'"><i aria-hidden="true"></i><span>'+name+'</span></div>').join('')+'</div>';
 default:return '';
 }
}
function render(section,item,index){
 const scenario=item.scenarios[index],result=scenario.result;
 section.querySelector('.visual').innerHTML=diagram(item,scenario,index);
 section.querySelector('.readout').innerHTML='<p class="result-label">Jev’s judgment</p><p class="verdict">'+esc(label(result.choice))+'</p><div class="confidence"><span>Model confidence</span><strong>'+result.confidence.toFixed(2)+'</strong></div><div class="distribution" aria-label="Answer probabilities">'+Object.entries(result.probabilities).sort((a,b)=>b[1]-a[1]).map(([key,value])=>'<div class="probability"><span>'+esc(label(key))+'</span><div class="track" aria-hidden="true"><i style="transform:scaleX('+value+')"></i></div><strong>'+percent(value)+'</strong></div>').join('')+'</div>';
 section.querySelector('.evidence').textContent=scenario.state;
 section.querySelectorAll('.picker button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
 if(item.id==='session'){
  const policy=()=>{section.querySelector('#policy').textContent=result.confidence<threshold?'Below threshold: inspect the evidence and interpretation.':'Above threshold: the judgment is concentrated. Inspect its evidence before deciding.';section.querySelector('#threshold-value').textContent=percent(threshold);};
  section.querySelector('#threshold').addEventListener('input',e=>{threshold=Number(e.target.value)/100;policy();});policy();
 }
}
async function init(){
 const response=await fetch('results.json');
 if(!response.ok)throw new Error('Could not load the recorded evaluation.');
 const data=await response.json();
 if(!Array.isArray(data.cases)||data.cases.length!==10)throw new Error('The evaluation data is incomplete.');
 document.querySelector('#run-note').textContent='Recorded '+new Date(data.evaluatedAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})+' · '+data.model+' · 23 judgments · examples generalized from your context';
 document.querySelector('#index').innerHTML=data.cases.map(item=>'<a href="#'+item.id+'">'+esc(item.domain)+'</a>').join('');
 for(const item of data.cases){
  const section=document.createElement('section');section.className='experiment';section.id=item.id;section.setAttribute('aria-labelledby',item.id+'-title');
  section.innerHTML='<div class="heading"><div class="domain">'+esc(item.domain)+'</div><div><h2 id="'+item.id+'-title">'+esc(item.title)+'</h2><p>'+esc(item.why)+'</p><p class="source">Context: '+esc(item.source)+'</p></div></div><div class="picker" role="group" aria-label="Scenarios for '+esc(item.title)+'">'+item.scenarios.map((s,i)=>'<button type="button" data-index="'+i+'" aria-pressed="'+(i===0)+'">'+esc(s.label)+'</button>').join('')+'</div><div class="bench"><div class="visual"></div><div class="readout" aria-live="polite"></div></div><p class="action"><strong>What happens next.</strong> '+esc(item.action)+'</p><details><summary>Inspect the exact evidence and rubric</summary><p class="evidence"></p><dl>'+Object.entries(item.criteria).map(([key,text])=>'<div><dt>'+esc(label(key))+'</dt><dd>'+esc(text)+'</dd></div>').join('')+'</dl></details>';
  section.querySelectorAll('.picker button').forEach(b=>b.addEventListener('click',()=>render(section,item,Number(b.dataset.index))));
  document.querySelector('#experiments').append(section);render(section,item,0);
 }
}
init().catch(error=>{document.querySelector('#run-note').textContent='Evaluation unavailable';const p=document.createElement('p');p.textContent=error.message+' Please reload to try again.';document.querySelector('#experiments').append(p);});
