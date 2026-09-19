const DATA={
  plumbing:{
    label:"تأسیسات",
    symptoms:[
      {id:"clog",label:"گرفتگی لوله",title:"گرفتگی لوله / فاضلاب",text:"اگر آب کند پایین می‌رود یا مسیر کاملاً بسته است، احتمال گرفتگی وجود دارد.",price:"۷۰۰٬۰۰۰ تا ۳٬۰۰۰٬۰۰۰",tags:["فوریت: متوسط تا زیاد","نیاز احتمالی به فنر"],questions:["آیا قیمت بر اساس متراژ فنر حساب می‌شود؟","هزینه ایاب‌وذهاب جداست؟","اگر گرفتگی برگردد، ضمانت دارید؟"]},
      {id:"leak",label:"نشتی آب",title:"نشتی یا آب‌ریزی",text:"محل نشتی و دسترسی به لوله روی زمان و هزینه اثر زیادی دارد.",price:"از ۶۰۰٬۰۰۰ + قطعات",tags:["بازدید مهم","قطعه ممکن است جدا باشد"],questions:["اجرت عیب‌یابی جداست؟","قطعه را شما تهیه می‌کنید یا من؟","قبل از تخریب، محل دقیق نشتی مشخص می‌شود؟"]},
      {id:"pressure",label:"افت فشار",title:"افت فشار آب",text:"افت فشار می‌تواند از شیرآلات، رسوب، پمپ یا شبکه ساختمان باشد؛ تشخیص قطعی نیاز به بررسی دارد.",price:"از ۴۰۰٬۰۰۰ + قطعات",tags:["تشخیص در محل","علت‌های متنوع"],questions:["هزینه تشخیص چقدر است؟","آیا پمپ یا فشارشکن باید بررسی شود؟","اگر مشکل از شبکه ساختمان باشد، راه‌حل چیست؟"]}
    ]
  },
  package:{
    label:"پکیج",
    symptoms:[
      {id:"hot",label:"آب گرم ندارم",title:"مشکل آب گرم پکیج",text:"ممکن است تنظیمات، فشار، مبدل، پمپ یا قطعه دیگری دخیل باشد.",price:"۵۰۰٬۰۰۰ تا ۹۰۰٬۰۰۰ + قطعه",tags:["تشخیص قبل از تعویض","قطعه‌محور"],questions:["اجرت تشخیص چقدر است؟","آیا قطعه قابل تعمیر است؟","قبل از تعویض قطعه قیمت کامل را می‌گویید؟"]},
      {id:"pressure",label:"افت فشار",title:"افت فشار پکیج",text:"افت فشار می‌تواند با نشتی، منبع انبساط یا تنظیمات مرتبط باشد.",price:"۴۰۰٬۰۰۰ تا ۷۰۰٬۰۰۰",tags:["فشار را ثبت کنید","بازدید توصیه می‌شود"],questions:["علت افت فشار چیست؟","آیا نشتی در مدار بررسی می‌شود؟","هزینه قطعه احتمالی چقدر است؟"]},
      {id:"service",label:"سرویس دوره‌ای",title:"سرویس کامل پکیج",text:"سرویس دوره‌ای معمولاً شامل چند اقدام بررسی و تنظیم است.",price:"۲٬۵۰۰٬۰۰۰ تا ۳٬۵۰۰٬۰۰۰",tags:["هر دستگاه","قیمت مرجع شهریور ۱۴۰۵"],questions:["موارد سرویس دقیقاً چیست؟","رسوب‌زدایی جدا حساب می‌شود؟","بعد از سرویس چه چیزی ضمانت می‌شود؟"]}
    ]
  },
  ac:{
    label:"کولر گازی",
    symptoms:[
      {id:"hot",label:"خوب خنک نمی‌کند",title:"افت سرمایش کولر گازی",text:"کاهش سرمایش می‌تواند از کثیفی، کمبود گاز، نشتی یا بخش دیگری از سیستم باشد.",price:"۱٬۲۰۰٬۰۰۰ تا ۲٬۲۰۰٬۰۰۰",tags:["تشخیص قبل از شارژ","بازدید توصیه می‌شود"],questions:["اول سرویس و تمیزکاری انجام می‌دهید؟","قبل از شارژ، نشتی بررسی می‌شود؟","هزینه شارژ و اجرت جداست؟"]},
      {id:"water",label:"آب می‌دهد",title:"آبریزی پنل داخلی",text:"آبریزی معمولاً نیازمند بررسی مسیر تخلیه، تراز و شرایط پنل است.",price:"۱٬۱۰۰٬۰۰۰ تا ۱٬۶۰۰٬۰۰۰",tags:["محل آبریزی مهم","ممکن است سرویس لازم باشد"],questions:["فقط مسیر تخلیه بررسی می‌شود یا سرویس کامل؟","قطعه‌ای لازم است؟","گارانتی رفع آبریزی دارید؟"]},
      {id:"service",label:"سرویس",title:"سرویس کامل کولر گازی",text:"سرویس کامل برای نگهداری و پاک‌سازی سیستم انجام می‌شود.",price:"۱٬۲۰۰٬۰۰۰ تا ۱٬۵۰۰٬۰۰۰",tags:["قیمت مرجع تهران","بدون شارژ گاز"],questions:["قیمت شامل شست‌وشوی یونیت بیرونی هم هست؟","شارژ گاز جداست؟","چه بخش‌هایی سرویس می‌شوند؟"]}
    ]
  },
  electric:{
    label:"برق",
    symptoms:[
      {id:"trip",label:"فیوز می‌پرد",title:"پرش فیوز",text:"پرش تکراری فیوز می‌تواند نشانه اضافه‌بار، اتصال یا مشکل تجهیز باشد؛ خودتان تابلو را دستکاری نکنید.",price:"از ۵۰۰٬۰۰۰ + قطعات",tags:["ایمنی بالا","نیاز به متخصص"],questions:["علت را قبل از تعویض فیوز پیدا می‌کنید؟","هزینه عیب‌یابی چقدر است؟","قطعه یا سیم‌کشی اضافی لازم است؟"],safety:"⚠ برای ایمنی، تعمیرات برق و باز کردن تابلو را خودتان انجام ندهید. در صورت بوی سوختگی یا جرقه، برق مدار را از محل ایمن قطع و با متخصص تماس بگیرید."},
      {id:"flicker",label:"چراغ نوسان دارد",title:"نوسان یا چشمک‌زدن چراغ",text:"علت می‌تواند از اتصال، کلید، سیم‌کشی یا خود منبع نور باشد.",price:"از ۵۰۰٬۰۰۰ + قطعات",tags:["تشخیص در محل","ایمنی مهم"],questions:["اتصالات کامل بررسی می‌شود؟","عیب‌یابی قبل از تعویض قطعه انجام می‌شود؟"],safety:"⚠ اگر نوسان همراه با بوی سوختگی، داغ‌شدن یا صدای غیرعادی است، کار را متوقف و از متخصص کمک بگیرید."},
      {id:"outage",label:"یک بخش خانه برق ندارد",title:"قطعی برق یک مدار",text:"ابتدا باید مشخص شود مشکل از حفاظت مدار، اتصال یا مصرف‌کننده است.",price:"از ۵۰۰٬۰۰۰ + قطعات",tags:["تشخیص مسیر","نیاز به متخصص"],questions:["مدار از تابلو تا مصرف‌کننده بررسی می‌شود؟","هزینه عیب‌یابی و تعمیر جداست؟"],safety:"⚠ برای جلوگیری از برق‌گرفتگی، سیم‌کشی باز را دستکاری نکنید."}
    ]
  }
};

let selectedService=null,selectedResult=null;
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
function setStep(n){
  $$(".step").forEach(x=>x.classList.toggle("active",x.dataset.step==n));
  $$(".step-panel").forEach(x=>x.classList.remove("active"));
  $("#step"+n).classList.add("active");
}
function renderSymptoms(){
  const box=$("#symptomChoices");box.innerHTML="";
  DATA[selectedService].symptoms.forEach(s=>{
    const b=document.createElement("button");b.className="choice";b.innerHTML='<span>•</span><b>'+s.label+'</b><small>برای بررسی اولیه</small>';
    b.onclick=()=>{selectedResult=s;renderResult();setStep(3)};box.appendChild(b);
  });
}
function renderResult(){
  $("#resultTitle").textContent=selectedResult.title;
  $("#resultText").textContent=selectedResult.text;
  $("#resultPrice").textContent=selectedResult.price;
  $("#resultTags").innerHTML=selectedResult.tags.map(t=>'<span>'+t+'</span>').join("");
  $("#questionList").innerHTML=selectedResult.questions.map(q=>'<div>✓ '+q+'</div>').join("");
  $("#safetyBox").textContent=selectedResult.safety||"این نتیجه فقط راهنمای اولیه است؛ تشخیص قطعی و قیمت نهایی به بررسی متخصص وابسته است.";
  $("#safetyBox").style.display="block";
  $("#serviceSelect").value=DATA[selectedService].label;
}
$$(".choice[data-service]").forEach(b=>b.onclick=()=>{selectedService=b.dataset.service;renderSymptoms();setStep(2)});
$$(".step[data-step]").forEach(b=>b.addEventListener("click",()=>{
  const n=+b.dataset.step;if(n===2&&selectedService)renderSymptoms();if(n===3&&selectedResult)renderResult();setStep(n);
}));
$("#back1").onclick=()=>setStep(1);
$("#restart").onclick=()=>{selectedService=null;selectedResult=null;setStep(1)};
$("#requestForm").addEventListener("submit",e=>{
  e.preventDefault();
  const n=$("#name").value.trim(),p=$("#phone").value.trim(),s=$("#serviceSelect").value;
  const ok=/^09\d{9}$/.test(p.replace(/\s/g,""));
  const box=$("#requestResult");
  if(!ok){box.textContent="شماره موبایل را با فرمت 09xxxxxxxxx وارد کن.";box.classList.add("show");return}
  const code="BK-"+Math.random().toString(36).slice(2,8).toUpperCase();
  const payload={code,name:n,phone:p,service:s,description:$("#description").value.trim(),createdAt:new Date().toISOString()};
  try{localStorage.setItem("ghablkar-last-request",JSON.stringify(payload));}catch{}
  box.innerHTML="درخواست آزمایشی ساخته شد. کد پیگیری: <b>"+code+"</b><br>در MVP فعلی هنوز به متخصص واقعی ارسال نمی‌شود.";
  box.classList.add("show");
});
$("#year").textContent=new Date().getFullYear();
