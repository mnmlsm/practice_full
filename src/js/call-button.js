const chatCallButton = document.querySelector('.call-chat-js');
const burgerChatButton = document.querySelector('.burger-call-chat-js');
const callContainer = document.querySelector('.call-container-js');
const callWrapper = document.querySelector('.call-form__wrapper');
const pageBody = document.querySelector(".js-page-body-selection");
const closeChatButton = document.querySelector('.call-close-button-js');
const secondChatCloseButton = document.querySelector('.call-low-close-button-js');
const menuToHide = document.querySelector(".js-container");

chatCallButton.addEventListener('click', (event) => {
    callWrapper.classList.toggle('call-wrapper-show');
    callContainer.classList.toggle('call-show-modal');
    pageBody.classList.toggle("js-page-body-stop-scroll");
});


burgerChatButton.addEventListener('click', (event) => {
    callWrapper.classList.toggle('call-wrapper-show');
    callContainer.classList.toggle('call-show-modal');
    menuToHide.classList.toggle("js-opacity-container");
    if (window.innerWidth >= 1120) {
        pageBody.classList.toggle("js-page-body-stop-scroll");
    }
});


closeChatButton.addEventListener('click', (event) => {
    callWrapper.classList.toggle('call-wrapper-show');
    callContainer.classList.toggle('call-show-modal');
    pageBody.classList.toggle("js-page-body-stop-scroll");
})

secondChatCloseButton.addEventListener('click', (event) => {
    callWrapper.classList.toggle('call-wrapper-show');
    callContainer.classList.toggle('call-show-modal');
    pageBody.classList.toggle("js-page-body-stop-scroll");
})