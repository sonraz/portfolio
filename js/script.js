/*==================================================
            HERO TYPING ANIMATION
====================================================

Library:
Typed.js

Documentation:
https://github.com/mattboldt/typed.js/

Purpose:
Displays rotating services in the hero section.

==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    new Typed("#typing", {

        strings: [

            "Business Websites",

            "Restaurant Websites",

            "School Websites",

            "Portfolio Websites",

            "Organization Websites",

            "Landing Pages",

            "Logo Design",

            "Business Cards",

            "Flyers",

            "Posters",

            "Product Packaging",

            "Virtual Assistance"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        startDelay: 500,

        loop: true,

        smartBackspace: true,

        showCursor: true,

        cursorChar: "|"

    });

});

/*==================================================
        ANIMATED STATISTICS COUNTER
====================================================

Purpose:
Counts numbers from 0 to the target value.

Example:

0

5

10

15

20

==================================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    /*
    Speed of animation.

    Smaller number = slower.

    Larger number = faster.
    */

    const increment = target / 80;

    function updateCounter() {

        if (count < target) {

            count += increment;

            counter.textContent = Math.ceil(count) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target + "+";

        }

    }

    updateCounter();

});