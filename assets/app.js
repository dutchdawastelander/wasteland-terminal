const el=s=>document.querySelector(s);
const boot=el('#boot'),logos=el('#boot-logos'),lines=el('#boot-lines');
const progress=el('.boot-progress>i'),skip=el('#boot-skip');
const chime=el('#bootchime');
const BOOT_LINES=[
'Initializing Vault‑Tec interface ... OK',
'Mounting holotape archives ... OK',
'Decrypting pre‑war records ... OK',
'Scanning Ohio sector ... FOUND',
'Routing terminals ... OK',
'Loading stories.json ... OK',
'Granting user access ... OK'
];
function typeLine(target,text,speed=10){return new Promise(res=>{let i=0;const iv=setInterval(()=>{target.textContent+=text[i++];if(i>=text.length){clearInterval(iv);res();}},speed);});}
async function runBoot(){boot.classList.remove('hidden');try{chime.play();}catch{};for(let i=0;i<BOOT_LINES.length;i++){const line=document.createElement('div');lines.appendChild(line);await typeLine(line,BOOT_LINES[i]);progress.style.width=Math.round(((i+1)/BOOT_LINES.length)*100)+'%';await new Promise(r=>setTimeout(r,150));}setTimeout(()=>boot.classList.add('hidden'),400);}
skip.addEventListener('click',()=>boot.classList.add('hidden'));
window.addEventListener('load',runBoot);