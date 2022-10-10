const chatButton = document.querySelector('.feedback-chat-js');
const burgerChatButton = document.querySelector('.burger-feedback-chat-js');
const feedbackContainer = document.querySelector('.feedback-container-js');
const feedbackWrapper = document.querySelector('.feedback-form__wrapper');
const pageBody = document.querySelector(".js-page-body-selection");
const closeButton = document.querySelector('.feedback-close-button-js');
const secondCloseButton = document.querySelector('.feedback-low-close-button-js');
const menuToHide = document.querySelector(".js-container");

chatButton.addEventListener('click', (event) => {
    feedbackWrapper.classList.toggle('feedback-wrapper-show');
    feedbackContainer.classList.toggle('feedback-show-modal');
    pageBody.classList.toggle("js-page-body-stop-scroll");
});


burgerChatButton.addEventListener('click', (event) => {
    feedbackWrapper.classList.toggle('feedback-wrapper-show');
    feedbackContainer.classList.toggle('feedback-show-modal');
    menuToHide.classList.toggle("js-opacity-container");
    if (window.innerWidth >= 1120) {
        pageBody.classList.toggle("js-page-body-stop-scroll");
    }
});


closeButton.addEventListener('click', (event) => {
    feedbackWrapper.classList.toggle('feedback-wrapper-show');
    feedbackContainer.classList.toggle('feedback-show-modal');
    pageBody.classList.toggle("js-page-body-stop-scroll");
})

secondCloseButton.addEventListener('click', (event) => {
    feedbackWrapper.classList.toggle('feedback-wrapper-show');
    feedbackContainer.classList.toggle('feedback-show-modal');
    pageBody.classList.toggle("js-page-body-stop-scroll");
})