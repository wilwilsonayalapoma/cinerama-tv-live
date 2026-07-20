const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


});



document
.querySelectorAll(".fade-in,.zoom-in")
.forEach(element=>{


observer.observe(element);


});