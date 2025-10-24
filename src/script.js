const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () =>{
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    menuBtn.setAttribute("aria-expanded", isOpen);
    mobileMenu.classList.toggle("scale-y-100");
});