document.addEventListener("DOMContentLoaded",()=>{
  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();

  document.querySelectorAll("[data-placeholder-link]").forEach(link=>{
    link.addEventListener("click",(event)=>{
      event.preventDefault();
      alert("TODO: Add your real LinkedIn URL in index.html.");
    });
  });

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08});

  document.querySelectorAll(".project-card,.timeline-item,.capability-card,.principle-list>div,.contact-panel").forEach(el=>{
    el.classList.add("reveal");
    observer.observe(el);
  });
});
