/* ==================================================
   THEME TOGGLE
   Switches between light and dark themes, updates all
   theme buttons, and remembers the choice on refresh.
================================================== */

const themeButtons = document.querySelectorAll(".theme-btn");
const savedTheme = localStorage.getItem("theme");

/* Apply the saved theme when the page opens. */
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

/* Update every theme button to match the current theme. */
function updateThemeButtons() {
    const isDarkTheme = document.body.classList.contains("dark-theme");

    themeButtons.forEach(function (button) {
        const icon = button.querySelector("i");
        const text = button.querySelector(".theme-btn-text");

        if (isDarkTheme) {
            icon.className = "fa-solid fa-sun";
            text.textContent = "Light";
            button.setAttribute("aria-label", "Switch to light theme");
        } else {
            icon.className = "fa-solid fa-moon";
            text.textContent = "Dark";
            button.setAttribute("aria-label", "Switch to dark theme");
        }
    });
}

/* Set the correct icon and text when the page first loads. */
updateThemeButtons();

/* Allow every desktop or mobile theme button to control the same theme. */
themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        const activeTheme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";

        localStorage.setItem("theme", activeTheme);

        updateThemeButtons();
    });
});