document.addEventListener("DOMContentLoaded", function(){
  const dt=document.getElementById("datetime");
  if(dt){
    const update=()=>dt.textContent=new Date().toLocaleString();
    update(); setInterval(update,1000);
  }
  const toggle=document.getElementById("menuToggle");
  const links=document.getElementById("navLinks");
  if(toggle && links){ toggle.addEventListener("click",()=>links.classList.toggle("show")); }

  document.querySelectorAll(".faq-question").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const item=btn.parentElement;
      item.classList.toggle("open");
      btn.querySelector("span").textContent=item.classList.contains("open")?"−":"+";
    });
  });
});

function submitContact(event){
  event.preventDefault();
  const email=document.getElementById("email").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern=/^\d{11}$/;
  if(!emailPattern.test(email)){alert("Please enter a valid email address.");return false;}
  if(!phonePattern.test(phone)){alert("Phone number must contain exactly 11 digits.");return false;}
  alert("Thank you! Your message has been submitted successfully.");
  document.getElementById("contactForm").reset();
  return false;
}