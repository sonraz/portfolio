/*==================================================
        ENTRANCE ANIMATIONS
====================================================

Purpose:
Reveals elements smoothly
when the page loads.

==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(

        ".fade-up, .fade-right"

    );

    animatedElements.forEach(element => {

        element.classList.add("show");

    });

});