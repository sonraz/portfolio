/* ==================================================
   CUSTOM DROPDOWNS
================================================== */

document.querySelectorAll(".custom-select").forEach(select => {

    const trigger = select.querySelector(".custom-select-trigger");
    const label = trigger.querySelector("span");
    const hiddenInput = select.querySelector("input[type='hidden']");
    const options = select.querySelectorAll(".custom-select-option");

    /* ==========================================
       OPEN / CLOSE DROPDOWN
    ========================================== */

    trigger.addEventListener("click", (event) => {

        event.stopPropagation();

        // Close all other dropdowns
        document.querySelectorAll(".custom-select").forEach(otherSelect => {

            if (otherSelect !== select) {
                otherSelect.classList.remove("open");
            }

        });

        select.classList.toggle("open");

    });

    /* ==========================================
       SELECT OPTION
    ========================================== */

    options.forEach(option => {

        option.addEventListener("click", () => {

            // Remove previous selection
            options.forEach(item => {
                item.classList.remove("selected");
            });

            // Highlight selected option
            option.classList.add("selected");

            // Update visible text
            label.textContent = option.textContent.trim();

            // Save hidden value
            hiddenInput.value = option.dataset.value;

            // Mark dropdown as selected
            select.classList.add("selected");

            // Close dropdown
            select.classList.remove("open");

        });

    });

});

/* ==========================================
   CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", () => {

    document.querySelectorAll(".custom-select").forEach(select => {

        select.classList.remove("open");

    });

});