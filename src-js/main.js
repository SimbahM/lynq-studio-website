const menuIcon = document.querySelector(".nav-container nav .mobile-nav .mobile-nav-menu .menu-icon-container .menu-icon")
const colorLogo = document.querySelector(".nav-container nav .mobile-nav .mobile-nav-menu .lynq-logo img.color-logo")
const whiteLogo = document.querySelector(".nav-container nav .mobile-nav .mobile-nav-menu .lynq-logo img.white-logo")
const mobileNavItems = document.querySelector(".mobile-nav-items")


menuIcon.addEventListener("click", () => {
    mobileNavItems.classList.toggle("active")
    menuIcon.classList.toggle("active")
    document.body.classList.toggle("on-scroll")
    colorLogo.classList.toggle("active")
    whiteLogo.classList.toggle("active")

})