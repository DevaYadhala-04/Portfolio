const hamburger=document.querySelector(".hamburger");
const menu_bar=document.querySelector(".navbar-menu .menu-bar");

hamburger.addEventListener("click",()=>{menu_bar.classList.toggle("show")});

// Close menu when a link is clicked
menu_bar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu_bar.classList.remove("show");
    });
});