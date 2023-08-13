// JavaScript pour le menu responsive
const menuButton = document.getElementById("menu-button");
const mainMenu = document.getElementById("main-menu");

menuButton.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
});

// JavaScript pour basculer les thèmes
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});
