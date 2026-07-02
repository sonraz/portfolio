/* ==================================================
   BACK-TO-TOP BUTTON
   Shows the button after the visitor scrolls down,
   then smoothly returns them to the top when clicked.
================================================== */

const backToTopButton = document.getElementById("backToTop");

/* Only run the feature if the button exists on this page. */
if (backToTopButton) {
    function toggleBackToTopButton() {
        if (window.scrollY > 250) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    }

    /* Check visibility whenever the visitor scrolls. */
    window.addEventListener("scroll", toggleBackToTopButton);

    /* Check once when the page first loads or refreshes. */
    toggleBackToTopButton();

    /* Smoothly return to the top when the button is clicked. */
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}