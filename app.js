(function () {
    // Add event listeners to all elements with the class "control"
    [...document.querySelectorAll(".control")].forEach((button) => {
        button.addEventListener("click", function () {
            // Remove the "active-btn" class from the currently active button
            document
                .querySelector(".active-btn")
                .classList.remove("active-btn");
            // Add the "active-btn" class to the clicked button
            this.classList.add("active-btn");
            // Remove the "active" class from the currently active element
            document.querySelector(".active").classList.remove("active");
            // Add the "active" class to the element specified by the clicked button's data-id attribute
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Add an event listener to the element with the class "theme-btn"
    document.querySelector(".theme-btn").addEventListener("click", () => {
        // Toggle the "light-mode" class on the body element
        document.body.classList.toggle("light-mode");
    });
})();
