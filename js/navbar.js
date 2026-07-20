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
/* ==========================================
Mobile Dropdown Toggle
========================================== */

const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(toggle => {

    toggle.addEventListener("click", function(e){

        e.preventDefault();
        e.stopPropagation();

        const dropdown = this.closest(".dropdown");

        dropdown.classList.toggle("active");

    });

});