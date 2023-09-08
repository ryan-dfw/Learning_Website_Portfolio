document.addEventListener("DOMContentLoaded", function () {
    const navbarMenu = document.getElementById("navbar-menu");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navbarNav = document.querySelector(".navbar-nav");
    function toggleMenu() {
    if (navbarMenu.style.display === "block") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
    }
    }
    hamburgerBtn.addEventListener("click", toggleMenu);
    // Create and populate the menu items
    const menuItems = navbarNav.innerHTML;
    navbarMenu.innerHTML = menuItems;
});
