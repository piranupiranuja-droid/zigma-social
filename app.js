const pages=["dashboard","create","calendar","analytics","inbox","media","accounts","ai","campaigns","approvals","reports","brand","competitors","listening","automation","bulk","hashtags","repurpose","audience","replies","team","linkbio"];
function openLogin(){document.getElementById("landingPage").classList.add("hidden");document.getElementById("loginPage").classList.remove("hidden");window.scrollTo(0,0)}
function showLanding(){document.getElementById("app").classList.add("hidden");document.getElementById("loginPage").classList.add("hidden");document.getElementById("landingPage").classList.remove("hidden");window.scrollTo(0,0)}
function login(e){e.preventDefault();if(!document.getElementById("email").value||!document.getElementById("password").value)return;document.getElementById("loginPage").classList.add("hidden");document.getElementById("landingPage").classList.add("hidden");document.getElementById("app").classList.remove("hidden");showPage("dashboard")}
function logout(){showLanding()}
function showPage(name){pages.forEach(p=>{const el=document.getElementById(p);if(el)el.classList.toggle("active-page",p===name)});document.querySelectorAll(".side-nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===name));document.querySelector(".sidebar").classList.remove("show");window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll(".side-nav a").forEach(a=>a.addEventListener("click",()=>showPage(a.dataset.page)));
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2400)}
function selectPlatform(btn,name){document.querySelectorAll(".platform-tabs button").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");document.getElementById("previewPlatform").textContent=name}
function generateCaption(){document.getElementById("caption").value="Big ideas deserve to be shared. ✨ Discover what’s new, get inspired and join our community today!";updatePreview();toast("AI caption generated — demo")}
function addHashtags(){document.getElementById("hashtags").value="#ZigmaSocial #SocialMedia #ContentCreation #DigitalMarketing #CreatorTools";updatePreview();toast("Hashtags added — demo")}
function updatePreview(){const c=document.getElementById("caption"),t=document.getElementById("count");document.getElementById("previewText").textContent=c.value||"Your caption will appear here.";t.textContent=c.value.length+" / 2200";document.getElementById("previewTags").textContent=document.getElementById("hashtags").value}
document.getElementById("caption").addEventListener("input",updatePreview);document.getElementById("hashtags").addEventListener("input",updatePreview);
function showFile(input){if(input.files[0]){document.getElementById("fileName").textContent="✓ "+input.files[0].name;toast("Media selected")}}
function saveDraft(){toast("Post saved as draft — frontend demo")}
function schedulePost(){toast("Post scheduled successfully — frontend demo");setTimeout(()=>showPage("calendar"),700)}
updatePreview();

function showDemo(){toast("Demo preview: Start Free opens the interactive dashboard.")}

function changeAnalyticsRange(value){
  const labels={7:'Last 7 days',30:'Last 30 days',90:'Last 90 days',365:'This year'};
  const label=labels[value]||'Last 30 days';
  const el=document.getElementById('chartRangeLabel');
  if(el) el.textContent=label+' · reach & engagement';
  toast('Analytics range changed to '+label+' — demo');
}
function setAnalyticsChannel(btn,name){
  document.querySelectorAll('.channel-switcher button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const label=document.getElementById('analyticsChannelLabel');
  if(label) label.textContent=name;
  toast(name+' insights loaded — demo');
}
function exportAnalytics(){toast('Analytics report prepared — frontend demo');}

let aiMode="caption";
function setAI(mode){aiMode=mode;toast("AI mode selected: "+mode)}
function generateAIContent(){
  const p=(document.getElementById("aiPrompt")||{}).value||"your next campaign";
  const results={
    caption:"✨ Make your next idea impossible to ignore. "+p+" — created for your community.",
    ideas:"1. Behind-the-scenes reel\n2. Customer story carousel\n3. Quick tips video\n4. Product spotlight\n5. Community question post",
    hashtags:"#ZigmaSocial #SocialMedia #ContentCreation #DigitalMarketing #ContentStrategy",
    cta:"Ready to grow? Discover "+p+" today and join the conversation.",
    rewrite:"A clearer, more engaging version of your message: "+p+". Keep it simple, useful and easy to remember.",
    translate:"AI translation preview: "+p
  };
  document.getElementById("aiResult").textContent=results[aiMode]||results.caption;
  toast("AI content generated — demo");
}
function copyAI(){const t=document.getElementById("aiResult").textContent;navigator.clipboard?.writeText(t);toast("Generated content copied")}
function approveItem(btn){const row=btn.closest(".approval-row");const status=row.querySelector(".approval");status.textContent="Approved";status.className="approval approved";btn.textContent="View";btn.onclick=()=>toast("Approved content opened");toast("Content approved — demo")}


function refreshListening(){toast('Listening monitor refreshed — demo')}
function addDemoItem(type){toast((type==='topic'?'Topic':'Item')+' added — demo')}
function toggleAutomation(input,name){toast(name+(input.checked?' enabled':' paused')+' — demo')}



function repurposeDemo(){const source=(document.getElementById('repurposeSource')||{}).value||'your core content';const r=document.getElementById('repurposeResults');if(r)r.innerHTML='<div><span>Instagram</span><p>'+source+' — concise visual caption with a community CTA.</p></div><div><span>LinkedIn</span><p>'+source+' — professional version with a clear value statement.</p></div><div><span>TikTok</span><p>Hook: '+source+' — short-form script direction.</p></div><div><span>Facebook</span><p>'+source+' — friendly version with an engagement question.</p></div>';toast('Platform variations created — demo')}
function useReply(name){toast(name+' inserted into reply composer — demo')}
