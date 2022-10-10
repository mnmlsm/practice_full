// Открывание и закрывание меню по нажатию кнопки

const closeButton = document.querySelector(".js-close-button");
const burgerButton = document.querySelector(".js-burger-button");
const menuToHide = document.querySelector(".js-container");
const pageBody = document.querySelector(".js-page-body-selection");

const mainMenuList = document.querySelector(".js-main-menu__list");

// Слайд меню
burgerButton.addEventListener("click", () => {
    menuToHide.classList.toggle("js-opacity-container");
    pageBody.classList.toggle("js-page-body-stop-scroll");
});

menuToHide.addEventListener("click", (event) => {
    if (event.target.classList[2] == "js-close-button"
        || event.target.classList[2] == "js-opacity-container") {
        menuToHide.classList.toggle("js-opacity-container");
        pageBody.classList.toggle("js-page-body-stop-scroll");
    }
});
