const $=id=>document.getElementById(id);
$('reportDate').value = new Date().toISOString().slice(0,10);
function reportText(){
  const v=id=>$(id).value.trim();
  return `# ${v('reportId') || 'FIELD-REPORT'}\n\n`+
`**Date:** ${v('reportDate')}  \n**Site / Area:** ${v('site') || 'Not specified'}  \n**Classification:** ${v('classification')}  \n**Prepared by:** Domenic Garza, SPRAT Level III\n\n`+
`## Observed facts\n${v('facts') || 'No facts entered.'}\n\n`+
`## Analysis\n${v('analysis') || 'No analysis entered.'}\n\n`+
`## Recommended action\n${v('action') || 'No action entered.'}\n\n`+
`---\nPrepared through Strategickhaos Industrial Field Intelligence. Verify against company procedures and supervisor direction before action.\n`;
}
function download(name, text, type='text/plain'){
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type})); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500);
}
$('downloadMd').addEventListener('click',()=>download(($('reportId').value||'field-report')+'.md',reportText(),'text/markdown'));
$('copyReport').addEventListener('click',async()=>{await navigator.clipboard.writeText(reportText()); $('copyReport').textContent='Copied'; setTimeout(()=>$('copyReport').textContent='Copy report text',1200)});
let lastReceipt=null;
$('sealBtn').addEventListener('click',async()=>{
  const file=$('sealFile').files[0]; if(!file){$('receiptOut').textContent='DENY_NO_FILE';return;}
  const bytes=await file.arrayBuffer(); const digest=await crypto.subtle.digest('SHA-256',bytes);
  const sha=[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');
  lastReceipt={schema:'SAGCO-FIELD-REPORT-RECEIPT-V1',status:'PASS',file:file.name,bytes:file.size,sha256:sha,sealed_at:new Date().toISOString(),prepared_by:'Domenic Garza',role:'SPRAT Level III'};
  $('receiptOut').textContent=JSON.stringify(lastReceipt,null,2); $('downloadReceipt').classList.remove('hidden');
});
$('downloadReceipt').addEventListener('click',()=>{if(lastReceipt)download(lastReceipt.file+'.receipt.json',JSON.stringify(lastReceipt,null,2),'application/json')});
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
fetch('reports/index.json').then(r=>r.json()).then(rows=>{if(!Array.isArray(rows)||!rows.length)return; $('reportRows').innerHTML=rows.map(x=>`<tr><td>${esc(x.id)}</td><td>${esc(x.date)}</td><td>${esc(x.type)}</td><td>${esc(x.subject)}</td><td>${esc(x.status)}</td></tr>`).join('')}).catch(()=>{});
