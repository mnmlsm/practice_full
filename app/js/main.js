/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// Открывание и закрывание меню по нажатию кнопки\nvar closeButton = document.querySelector(\".js-close-button\");\nvar burgerButton = document.querySelector(\".js-burger-button\");\nvar menuToHide = document.querySelector(\".js-container\");\nvar pageBody = document.querySelector(\".js-page-body-selection\");\nvar mainMenuList = document.querySelector(\".js-main-menu__list\"); // Слайд меню\n\nburgerButton.addEventListener(\"click\", function () {\n  menuToHide.classList.toggle(\"js-opacity-container\");\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\nmenuToHide.addEventListener(\"click\", function (event) {\n  if (event.target.classList[2] == \"js-close-button\" || event.target.classList[2] == \"js-opacity-container\") {\n    menuToHide.classList.toggle(\"js-opacity-container\");\n    pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/call-button.js":
/*!***************************!*\
  !*** ./js/call-button.js ***!
  \***************************/
/***/ (() => {

eval("var chatCallButton = document.querySelector('.call-chat-js');\nvar burgerChatButton = document.querySelector('.burger-call-chat-js');\nvar callContainer = document.querySelector('.call-container-js');\nvar callWrapper = document.querySelector('.call-form__wrapper');\nvar pageBody = document.querySelector(\".js-page-body-selection\");\nvar closeChatButton = document.querySelector('.call-close-button-js');\nvar secondChatCloseButton = document.querySelector('.call-low-close-button-js');\nvar menuToHide = document.querySelector(\".js-container\");\nchatCallButton.addEventListener('click', function (event) {\n  callWrapper.classList.toggle('call-wrapper-show');\n  callContainer.classList.toggle('call-show-modal');\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\nburgerChatButton.addEventListener('click', function (event) {\n  callWrapper.classList.toggle('call-wrapper-show');\n  callContainer.classList.toggle('call-show-modal');\n  menuToHide.classList.toggle(\"js-opacity-container\");\n\n  if (window.innerWidth >= 1120) {\n    pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n  }\n});\ncloseChatButton.addEventListener('click', function (event) {\n  callWrapper.classList.toggle('call-wrapper-show');\n  callContainer.classList.toggle('call-show-modal');\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\nsecondChatCloseButton.addEventListener('click', function (event) {\n  callWrapper.classList.toggle('call-wrapper-show');\n  callContainer.classList.toggle('call-show-modal');\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\n\n//# sourceURL=webpack:///./js/call-button.js?");

/***/ }),

/***/ "./js/feedback-button.js":
/*!*******************************!*\
  !*** ./js/feedback-button.js ***!
  \*******************************/
/***/ (() => {

eval("var chatButton = document.querySelector('.feedback-chat-js');\nvar burgerChatButton = document.querySelector('.burger-feedback-chat-js');\nvar feedbackContainer = document.querySelector('.feedback-container-js');\nvar feedbackWrapper = document.querySelector('.feedback-form__wrapper');\nvar pageBody = document.querySelector(\".js-page-body-selection\");\nvar closeButton = document.querySelector('.feedback-close-button-js');\nvar secondCloseButton = document.querySelector('.feedback-low-close-button-js');\nvar menuToHide = document.querySelector(\".js-container\");\nchatButton.addEventListener('click', function (event) {\n  feedbackWrapper.classList.toggle('feedback-wrapper-show');\n  feedbackContainer.classList.toggle('feedback-show-modal');\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\nburgerChatButton.addEventListener('click', function (event) {\n  feedbackWrapper.classList.toggle('feedback-wrapper-show');\n  feedbackContainer.classList.toggle('feedback-show-modal');\n  menuToHide.classList.toggle(\"js-opacity-container\");\n\n  if (window.innerWidth >= 1120) {\n    pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n  }\n});\ncloseButton.addEventListener('click', function (event) {\n  feedbackWrapper.classList.toggle('feedback-wrapper-show');\n  feedbackContainer.classList.toggle('feedback-show-modal');\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\nsecondCloseButton.addEventListener('click', function (event) {\n  feedbackWrapper.classList.toggle('feedback-wrapper-show');\n  feedbackContainer.classList.toggle('feedback-show-modal');\n  pageBody.classList.toggle(\"js-page-body-stop-scroll\");\n});\n\n//# sourceURL=webpack:///./js/feedback-button.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ \"./js/swiper.js\");\n/* harmony import */ var _show_all_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-all-button */ \"./js/show-all-button.js\");\n/* harmony import */ var _show_all_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_show_all_button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _feedback_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-button */ \"./js/feedback-button.js\");\n/* harmony import */ var _feedback_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_feedback_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _call_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-button */ \"./js/call-button.js\");\n/* harmony import */ var _call_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_call_button__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/show-all-button.js":
/*!*******************************!*\
  !*** ./js/show-all-button.js ***!
  \*******************************/
/***/ (() => {

eval("var showAllButtonBrands = document.querySelector('.show-all-brands-js');\nvar swiperWrapperBrands = document.querySelector('.swiper-wrapper-brands-js');\nvar showAllLabelBrands = document.querySelector('.show-all-label-js');\nshowAllButtonBrands.addEventListener('click', function () {\n  swiperWrapperBrands.classList.toggle('show-all-hide-brands');\n  showAllButtonBrands.classList.toggle('rotate-show-all-button');\n\n  if (!swiperWrapperBrands.classList.contains('show-all-hide-brands')) {\n    showAllLabelBrands.innerHTML = 'Скрыть';\n  } else {\n    showAllLabelBrands.innerHTML = 'Показать все';\n  }\n}); // Show all button types\n\nvar showAllButtonTypes = document.querySelector('.show-all-types-js');\nvar swiperWrapperTypes = document.querySelector('.swiper-wrapper-types-js');\nvar showAllLabelTypes = document.querySelector('.show-all-label-types-js');\nshowAllButtonTypes.addEventListener('click', function () {\n  swiperWrapperTypes.classList.toggle('show-all-hide-types');\n  showAllButtonTypes.classList.toggle('rotate-show-all-button');\n\n  if (!swiperWrapperTypes.classList.contains('show-all-hide-types')) {\n    showAllLabelTypes.innerHTML = 'Скрыть';\n  } else {\n    showAllLabelTypes.innerHTML = 'Показать все';\n  }\n});\n\n//# sourceURL=webpack:///./js/show-all-button.js?");

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ \"../node_modules/swiper/swiper-bundle.esm.js\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ \"../node_modules/swiper/swiper-bundle.min.css\");\n// import Swiper bundle with all modules installed\n // import styles bundle\n\n\n\nfunction showSwiper() {\n  var init = false;\n\n  if (window.outerWidth < 768) {\n    init = true;\n\n    var _brandsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".brands-swiper-js\", {\n      slidesPerView: \"auto\",\n      pagination: {\n        el: \".swiper-pagination-brands\",\n        clickable: true\n      }\n    });\n\n    var _typesSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".types-swiper-js\", {\n      slidesPerView: \"auto\",\n      pagination: {\n        el: \".swiper-pagination-types\",\n        clickable: true\n      }\n    });\n\n    var _priceSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".price-swiper-js\", {\n      slidesPerView: \"auto\",\n      spaceBetween: 16,\n      pagination: {\n        el: \".swiper-pagination-prices\",\n        clickable: true\n      }\n    });\n  } else if (init && window.outerWidth >= 768) {\n    init = false;\n    brandsSwiper.destroy(true, true);\n    typesSwiper.destroy(true, true);\n    priceSwiper.destroy(true, true);\n    location.reload();\n  }\n}\n\nshowSwiper();\nwindow.addEventListener('resize', showSwiper);\n\n//# sourceURL=webpack:///./js/swiper.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ \"./assets/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header/logo.svg */ \"./img/header/logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/main/logo-picture.png */ \"./img/main/logo-picture.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <meta name=\\\"description\\\" content=\\\"Ремонт техники с гарантией\\\" />\\n    <meta\\n      name=\\\"keywords\\\"\\n      content=\\\"ремонт, техника, ноутбуки, гарантия, качество\\\"\\n    />\\n    <link rel=\\\"shortcut icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/x-icon\\\" />\\n    <title>CPS - ремонт техники</title>\\n  </head>\\n  <body class=\\\"page-body js-page-body-selection\\\">\\n    <div class=\\\"container\\\">\\n      <div class=\\\"page\\\">\\n        <!-- Header -->\\n        <header class=\\\"page-header\\\">\\n          <div\\n            class=\\\"logo-burger-btn-section page-header__logo-burger-btn-section\\\"\\n          >\\n            <button\\n              class=\\\"user-button logo-burger-btn-section__burger-button js-burger-button\\\"\\n            ></button>\\n            <a href=\\\"#\\\" class=\\\"main-logo-link\\\">\\n              <img class=\\\"main-logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"logo\\\" />\\n            </a>\\n            <div class=\\\"divider-image\\\"></div>\\n          </div>\\n          <div class=\\\"user-buttons-set\\\">\\n            <div\\n              class=\\\"connection-buttons user-buttons-set__connection-buttons\\\"\\n            >\\n              <button class=\\\"user-button call-button call-chat-js\\\"></button>\\n              <button class=\\\"user-button chat-button feedback-chat-js\\\"></button>\\n              <button class=\\\"user-button profile-button\\\"></button>\\n              <div class=\\\"divider-image connection-buttons__divider\\\"></div>\\n            </div>\\n            <div class=\\\"service-buttons user-buttons-set__service-buttons\\\">\\n              <button\\n                class=\\\"user-button service-buttons__repair-button\\\"\\n                id=\\\"repair-button\\\"\\n              ></button>\\n              <button\\n                class=\\\"user-button service-buttons__status-button\\\"\\n                id=\\\"status-button\\\"\\n              ></button>\\n            </div>\\n          </div>\\n        </header>\\n        <!-- Main page content -->\\n        <main class=\\\"main-content\\\">\\n          <div\\n            class=\\\"decor-header-user-buttons main-content__header-user-buttons\\\"\\n          >\\n            <div class=\\\"decor-header decor-header-user-buttons__decor-header\\\">\\n              <div class=\\\"text-decoration decor-header__decoration\\\"></div>\\n              <h1 class=\\\"decor-header__main-header\\\">Услуги и сервисы</h1>\\n            </div>\\n\\n            <div class=\\\"main-content__service-buttons\\\">\\n              <label class=\\\"repair-label\\\" for=\\\"repair-btn\\\">\\n                Оставить заявку\\n              </label>\\n              <button\\n                class=\\\"user-button service-buttons__repair-button\\\"\\n                id=\\\"repair-btn\\\"\\n              ></button>\\n              <label class=\\\"status-label\\\" for=\\\"status-btn\\\">\\n                Статус ремонта\\n              </label>\\n              <button\\n                class=\\\"user-button service-buttons__status-button\\\"\\n                id=\\\"status-btn\\\"\\n              ></button>\\n            </div>\\n          </div>\\n          <!-- Main Menu -->\\n          <nav class=\\\"main-menu\\\">\\n            <ul class=\\\"main-menu__list js-main-menu__list\\\">\\n              <li class=\\\"main-menu__item main-menu__item--focused\\\">\\n                <a href=\\\"#\\\" class=\\\"main-menu__link\\\">Ремонтируемые устройства</a>\\n              </li>\\n              <li class=\\\"main-menu__item\\\">\\n                <a href=\\\"#\\\" class=\\\"main-menu__link\\\">Дополнительные услуги</a>\\n              </li>\\n              <li class=\\\"main-menu__item\\\">\\n                <a href=\\\"#\\\" class=\\\"main-menu__link\\\">Цены на услуги</a>\\n              </li>\\n              <li class=\\\"main-menu__item\\\">\\n                <a href=\\\"#\\\" class=\\\"main-menu__link\\\"\\n                  >Адреса авторизованных центров</a\\n                >\\n              </li>\\n              <li class=\\\"main-menu__item\\\">\\n                <a href=\\\"#\\\" class=\\\"main-menu__link\\\">Специальные цены</a>\\n              </li>\\n              <li class=\\\"main-menu__item\\\">\\n                <a href=\\\"#\\\" class=\\\"main-menu__link\\\">Отзывы</a>\\n              </li>\\n            </ul>\\n          </nav>\\n          <!-- Description of Company -->\\n          <section\\n            class=\\\"company-description main-content__company-description\\\"\\n          >\\n            <div class=\\\"decription-text company-description__text\\\">\\n              <p class=\\\"description-text__paragraph\\\">\\n                Мы являемся авторизованным сервисным центром по ремонту техники\\n                Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\\n                официальной гарантией производителя.\\n              </p>\\n              <p class=\\\"second-paragraph description-text__paragraph\\\">\\n                Мы успешно работаем с 1992 года и заслужили репутацию надежного\\n                партнера<span class=\\\"second-paragraph__end-of-description\\\">\\n                  ,что подтверждает большое количество постоянных клиентов. Мы\\n                  гордимся тем, что к нам обращаются по рекомендациям и, в свою\\n                  очередь, советуют нас родным и близким.</span\\n                >\\n              </p>\\n              <div\\n                class=\\\"description-read-further company-description__read-further\\\"\\n              >\\n                <button\\n                  class=\\\"further-button description-read-further__button\\\"\\n                  id=\\\"read-btn\\\"\\n                ></button>\\n                <label class=\\\"description-read-further__label\\\" for=\\\"read-btn\\\">\\n                  Читать далее\\n                </label>\\n              </div>\\n            </div>\\n\\n            <img\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n              alt=\\\"logo\\\"\\n              class=\\\"company-description__logo\\\"\\n            />\\n          </section>\\n          <!-- Brands repair Section -->\\n          <section class=\\\"brands-repair-section\\\">\\n            <header class=\\\"brands-repair-section__header\\\">\\n              <h3 class=\\\"brands-repair-section__header-text\\\">\\n                Ремонт техники различных брендов\\n              </h3>\\n            </header>\\n            <div class=\\\"brand-cards-swiper brands-repair-section__swiper\\\">\\n              <div class=\\\"swiper brands-swiper-js\\\">\\n                <div\\n                  class=\\\"swiper-wrapper swiper__wrapper swiper-wrapper-brands-js show-all-hide-brands\\\"\\n                >\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__sony\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__apple\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div\\n                    class=\\\"swiper-slide swiper__slide swiper-slide__viewsonic\\\"\\n                  >\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__hp\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__acer\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div\\n                    class=\\\"swiper-slide swiper__slide swiper-slide__viewsonic\\\"\\n                  >\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__hp\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__acer\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide swiper-slide__apple\\\">\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                </div>\\n                <div\\n                  class=\\\"swiper-pagination-brands brand-cards-swiper__pagination\\\"\\n                ></div>\\n              </div>\\n              <div class=\\\"show-all-container\\\">\\n                <button\\n                  id=\\\"show-all-brands\\\"\\n                  class=\\\"show-all-container__button show-all-brands-js\\\"\\n                ></button>\\n                <label\\n                  for=\\\"show-all-brands\\\"\\n                  class=\\\"show-all-container__label show-all-label-js\\\"\\n                >\\n                  Показать все</label\\n                >\\n              </div>\\n            </div>\\n          </section>\\n          <!-- Tech types repair -->\\n          <section class=\\\"types-repair-section\\\">\\n            <header class=\\\"types-repair-section__header\\\">\\n              <h3 class=\\\"types-repair-section__header-text\\\">\\n                Ремонт различных видов техники\\n              </h3>\\n            </header>\\n            <div class=\\\"type-cards-swiper types-repair-section__swiper\\\">\\n              <div class=\\\"swiper types-swiper-js\\\">\\n                <div\\n                  class=\\\"swiper-wrapper swiper__wrapper swiper-wrapper-types-js show-all-hide-types\\\"\\n                >\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <label class=\\\"swiper-slide__label\\\">\\n                      Ремонт ноутбуков\\n                    </label>\\n                    <button class=\\\"swiper-slide__button more-button\\\">\\n                      &gt;\\n                    </button>\\n                  </div>\\n                </div>\\n                <div\\n                  class=\\\"swiper-pagination-types type-cards-swiper__pagination\\\"\\n                ></div>\\n              </div>\\n              <div class=\\\"show-all-container\\\">\\n                <button\\n                  id=\\\"show-all-types\\\"\\n                  class=\\\"show-all-container__button show-all-types-js\\\"\\n                ></button>\\n                <label\\n                  for=\\\"show-all-types\\\"\\n                  class=\\\"show-all-container__label show-all-label-types-js\\\"\\n                >\\n                  Показать все</label\\n                >\\n              </div>\\n            </div>\\n          </section>\\n          <!-- Prices section -->\\n          <section class=\\\"prices-repair-section\\\">\\n            <header class=\\\"prices-repair-section__header\\\">\\n              <h3 class=\\\"prices-repair-section__header-text\\\">Цены на услуги</h3>\\n            </header>\\n            <div class=\\\"price-cards-swiper prices-repair-section__swiper\\\">\\n              <div class=\\\"swiper price-swiper-js\\\">\\n                <div class=\\\"swiper-wrapper swiper__wrapper\\\">\\n                  <div class=\\\"swiper-slide swiper__slide table-header\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__text\\\">\\n                        Ремонтные услуги\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__text\\\">Цена</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__text\\\">Срок</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">\\n                        Ремонтные услуги\\n                      </div>\\n                      <div class=\\\"service-description__text\\\">\\n                        Тестирование с выдачей технического заключения\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Цена</div>\\n                      <div class=\\\"service-description__text\\\">Бесплатно</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__header\\\">Срок</div>\\n                        <div class=\\\"service-description__text\\\">30-120 мин</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Диагностика</div>\\n                      <div class=\\\"service-description__text\\\">\\n                        Диагностика любого устройства с заключением\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Цена</div>\\n                      <div class=\\\"service-description__text\\\">1000&#8381;</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__header\\\">Срок</div>\\n                        <div class=\\\"service-description__text\\\">30 мин</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">\\n                        Замена дисплея\\n                      </div>\\n                      <div class=\\\"service-description__text\\\">\\n                        Замена экранов любой сложности\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Цена</div>\\n                      <div class=\\\"service-description__text\\\">2000&#8381;</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__header\\\">Срок</div>\\n                        <div class=\\\"service-description__text\\\">120 мин</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">\\n                        Ремонтные услуги\\n                      </div>\\n                      <div class=\\\"service-description__text\\\">\\n                        Замена программного обеспечения на любые версии\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Цена</div>\\n                      <div class=\\\"service-description__text\\\">2000&#8381;</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__header\\\">Срок</div>\\n                        <div class=\\\"service-description__text\\\">30-120 мин</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">\\n                        Ремонтные услуги\\n                      </div>\\n                      <div class=\\\"service-description__text\\\">\\n                        Тестирование с выдачей технического заключения\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Цена</div>\\n                      <div class=\\\"service-description__text\\\">Бесплатно</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__header\\\">Срок</div>\\n                        <div class=\\\"service-description__text\\\">30-120 мин</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"swiper-slide swiper__slide\\\">\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">\\n                        Ремонтные услуги\\n                      </div>\\n                      <div class=\\\"service-description__text\\\">\\n                        Тестирование с выдачей технического заключения\\n                      </div>\\n                    </div>\\n                    <div class=\\\"service-description\\\">\\n                      <div class=\\\"service-description__header\\\">Цена</div>\\n                      <div class=\\\"service-description__text\\\">Бесплатно</div>\\n                    </div>\\n                    <div class=\\\"order-button-section\\\">\\n                      <div class=\\\"service-description\\\">\\n                        <div class=\\\"service-description__header\\\">Срок</div>\\n                        <div class=\\\"service-description__text\\\">30-120 мин</div>\\n                      </div>\\n                      <button class=\\\"service-description__button order-button\\\">\\n                        Заказать <span>&gt;</span>\\n                      </button>\\n                    </div>\\n                  </div>\\n                </div>\\n                <div\\n                  class=\\\"swiper-pagination-prices price-cards-swiper__pagination\\\"\\n                ></div>\\n              </div>\\n            </div>\\n          </section>\\n          <!-- Commercial offer section -->\\n          <section class=\\\"commercial-offer\\\">\\n            <p class=\\\"commercial-offer__text\\\">\\n              Все цены указаны с учетом НДС. Стоимость ремонта указана на\\n              единичную услугу. Для получения коммерческого предложения на\\n              постоянное обслуживание, оставьте заявку.\\n            </p>\\n            <label class=\\\"commercial-offer__label\\\">\\n              Получить коммерческое предложение\\n              <button class=\\\"commercial-offer__button\\\">&gt;</button>\\n            </label>\\n          </section>\\n        </main>\\n        <footer class=\\\"page-footer page__footer\\\">\\n          <p class=\\\"page-footer__text\\\">\\n            © 2019 CPS<br />\\n            Разработано командой Apesong\\n          </p>\\n          <p class=\\\"page-footer__text\\\">Политика конфиденциальности</p>\\n          <p class=\\\"page-footer__text\\\">\\n            Информация, размещенная на данной странице, не является публичной\\n            офертой\\n          </p>\\n        </footer>\\n      </div>\\n      <!-- Slide menu to show -->\\n      <div class=\\\"container__opacity-container js-container\\\">\\n        <div class=\\\"slide-menu\\\">\\n          <div class=\\\"menu-container\\\">\\n            <div class=\\\"top-header-menu\\\">\\n              <header class=\\\"slide-menu-header menu-container__header\\\">\\n                <div\\n                  class=\\\"logo-close-btn-section slide-menu__logo-close-btn-section\\\"\\n                >\\n                  <button\\n                    class=\\\"user-button slide-menu-header__close-button js-close-button\\\"\\n                  ></button>\\n                  <a href=\\\"#\\\" class=\\\"main-logo-link\\\">\\n                    <img\\n                      class=\\\"main-logo\\\"\\n                      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n                      alt=\\\"logo\\\"\\n                    />\\n                  </a>\\n                </div>\\n                <button\\n                  class=\\\"user-button slide-menu-header__search-button\\\"\\n                ></button>\\n              </header>\\n              <nav class=\\\"slide-menu__main-menu\\\">\\n                <ul class=\\\"slide-menu__main-menu-list\\\">\\n                  <li\\n                    class=\\\"slide-menu__main-menu-item slide-menu__main-menu-item--chosen\\\"\\n                  >\\n                    <a\\n                      href=\\\"#\\\"\\n                      class=\\\"slide-menu__main-menu-link slide-menu__main-menu-link--chosen\\\"\\n                      >Ремонт техники</a\\n                    >\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\"\\n                      >Услуги и сервисы</a\\n                    >\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\"\\n                      >Корпоративным клиентам</a\\n                    >\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\"\\n                      >Продавцам техники</a\\n                    >\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\">Партнерам</a>\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\"\\n                      >Производителям</a\\n                    >\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\"\\n                      >Наши сервисные центры</a\\n                    >\\n                  </li>\\n                  <li class=\\\"slide-menu__main-menu-item\\\">\\n                    <a href=\\\"#\\\" class=\\\"slide-menu__main-menu-link\\\">Контакты</a>\\n                  </li>\\n                </ul>\\n              </nav>\\n            </div>\\n            <div class=\\\"bottom-contact-language\\\">\\n              <div class=\\\"bottom-contact-language__buttons\\\">\\n                <button\\n                  class=\\\"user-button call-button burger-call-chat-js\\\"\\n                ></button>\\n                <button\\n                  class=\\\"user-button chat-button burger-feedback-chat-js\\\"\\n                ></button>\\n                <button class=\\\"user-button profile-button\\\"></button>\\n              </div>\\n              <div class=\\\"connection-text\\\">\\n                <a\\n                  class=\\\"connection-text__mail-link\\\"\\n                  href=\\\"mailto:mail@cps.com\\\"\\n                  target=\\\"_blank\\\"\\n                  >mail@cps.com</a\\n                >\\n                <a class=\\\"connection-text__tel-link\\\" href=\\\"tel:88008908900\\\"\\n                  >8 800 890 8900</a\\n                >\\n              </div>\\n              <div class=\\\"language-switcher-buttons\\\">\\n                <button\\n                  class=\\\"language-switcher-buttons__button language-switcher-buttons__button--chosen\\\"\\n                >\\n                  RU\\n                </button>\\n                <button class=\\\"language-switcher-buttons__button\\\">EN</button>\\n                <button class=\\\"language-switcher-buttons__button\\\">CH</button>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n      <div\\n        class=\\\"container__feedback-container feedback-form feedback-container-js\\\"\\n      >\\n        <button\\n          class=\\\"user-button feedback-form__close-button-large-screen feedback-close-button-js\\\"\\n        ></button>\\n        <div class=\\\"feedback-form__wrapper\\\">\\n          <header class=\\\"feedback-form__header\\\">\\n            <button\\n              class=\\\"user-button feedback-form__close-button feedback-low-close-button-js\\\"\\n            ></button>\\n            <h2 class=\\\"feedback-form__header-text\\\">Обратная связь</h2>\\n          </header>\\n          <form action=\\\"#\\\" method=\\\"get\\\" class=\\\"feedback-form__form form\\\">\\n            <input\\n              type=\\\"text\\\"\\n              name=\\\"user-name\\\"\\n              placeholder=\\\"Имя\\\"\\n              pattern=\\\"^[a-zA-Z]+$\\\"\\n              class=\\\"name-input\\\"\\n              required\\n            />\\n\\n            <input\\n              type=\\\"tel\\\"\\n              name=\\\"user-phone\\\"\\n              placeholder=\\\"Телефон\\\"\\n              required\\n              class=\\\"form__phone-input\\\"\\n            />\\n            <input\\n              type=\\\"email\\\"\\n              name=\\\"user-email\\\"\\n              placeholder=\\\"Электронная почта\\\"\\n              required\\n              class=\\\"form__email-input\\\"\\n            />\\n            <input\\n              type=\\\"text\\\"\\n              name=\\\"user-message\\\"\\n              class=\\\"form__message-input\\\"\\n              placeholder=\\\"Сообщение\\\"\\n            />\\n            <p class=\\\"personal-info-processing form__info-processing\\\">\\n              Нажимая “отправить”, вы даете согласие на\\n              <span>обработку персональных данных</span> и соглашаетесь с нашей\\n              <span>политикой конфиденциальности</span>\\n            </p>\\n            <button type=\\\"submit\\\" class=\\\"form__submit-button send-button-js\\\">\\n              Отправить <span>&gt;</span>\\n            </button>\\n          </form>\\n        </div>\\n      </div>\\n      <div class=\\\"container__call-container call-form call-container-js\\\">\\n        <button\\n          class=\\\"user-button call-form__close-button-large-screen call-close-button-js\\\"\\n        ></button>\\n        <div class=\\\"call-form__wrapper\\\">\\n          <header class=\\\"call-form__header\\\">\\n            <button\\n              class=\\\"user-button call-form__close-button call-low-close-button-js\\\"\\n            ></button>\\n            <h2 class=\\\"call-form__header-text\\\">Заказать звонок</h2>\\n          </header>\\n          <form action=\\\"#\\\" method=\\\"get\\\" class=\\\"call-form__form form\\\">\\n            <input\\n              type=\\\"tel\\\"\\n              name=\\\"user-phone\\\"\\n              placeholder=\\\"Телефон\\\"\\n              required\\n              class=\\\"form__phone-input-call\\\"\\n            />\\n            <p class=\\\"personal-info-processing form__info-processing\\\">\\n              Нажимая “отправить”, вы даете согласие на\\n              <span>обработку персональных данных</span> и соглашаетесь с нашей\\n              <span>политикой конфиденциальности</span>\\n            </p>\\n            <button\\n              type=\\\"submit\\\"\\n              class=\\\"form__submit-button call-send-button-js\\\"\\n            >\\n              Отправить <span>&gt;</span>\\n            </button>\\n          </form>\\n        </div>\\n      </div>\\n    </div>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/favicon.ico\";\n\n//# sourceURL=webpack:///./assets/favicon.ico?");

/***/ }),

/***/ "./img/header/logo.svg":
/*!*****************************!*\
  !*** ./img/header/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/logo.svg\";\n\n//# sourceURL=webpack:///./img/header/logo.svg?");

/***/ }),

/***/ "./img/main/logo-picture.png":
/*!***********************************!*\
  !*** ./img/main/logo-picture.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/logo-picture.png\";\n\n//# sourceURL=webpack:///./img/main/logo-picture.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_swiper_swiper-bundle_min-6b1240"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;