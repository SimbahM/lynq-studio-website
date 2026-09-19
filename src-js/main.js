const menuIcon = document.querySelector(".nav-container nav .mobile-nav .mobile-nav-menu .menu-icon-container .menu-icon")
const mobileNavItems = document.querySelector(".mobile-nav-items")
const lynqLogo = document.querySelector(".nav-container nav .mobile-nav .mobile-nav-menu .lynq-logo")


menuIcon.addEventListener("click", () => {
    mobileNavItems.classList.toggle("active")
    menuIcon.classList.toggle("active")
    document.body.classList.toggle("on-scroll")
    lynqLogo.classList.toggle("active")

})