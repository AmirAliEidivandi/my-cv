let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
let themeToggler = document.querySelector("#theme-toggler");

// toggle menu
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
});

// theme toggler
themeToggler.addEventListener("click", () => {
    themeToggler.classList.toggle("fa-sun");
    if (themeToggler.classList.contains("fa-sun")) {
        document.body.classList.add("active");
    } else {
        document.body.classList.remove("active");
    }
});
