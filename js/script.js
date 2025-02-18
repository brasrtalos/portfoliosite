document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#005bb5";
        } else {
            header.style.backgroundColor = "#0078D7";
        }
    });
});
