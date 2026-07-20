// Sistema de temas (se implementará en una fase posterior)const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

const html=document.documentElement;

const current=html.getAttribute("data-theme");

if(current==="dark"){

html.setAttribute("data-theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

html.setAttribute("data-theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});