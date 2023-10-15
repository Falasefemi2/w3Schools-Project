document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("mobile-visible");
        mobileMenuIcon.classList.toggle("open");
    });
});
