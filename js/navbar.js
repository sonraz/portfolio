/*STICKY NAVBAR*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});

/*MOBILE MENU*/

const hamburger=document.querySelector(".hamburger");

const navLinks=document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

/*MOBILE DROPDOWNS*/

const dropdowns=document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown=>{

dropdown.addEventListener("click",()=>{

if(window.innerWidth<=768){

dropdown.classList.toggle("active");

}

});

});