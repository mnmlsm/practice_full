const showAllButtonBrands = document.querySelector('.show-all-brands-js');
const swiperWrapperBrands = document.querySelector('.swiper-wrapper-brands-js');
const showAllLabelBrands = document.querySelector('.show-all-label-js');

showAllButtonBrands.addEventListener('click', () => {
    swiperWrapperBrands.classList.toggle('show-all-hide-brands');
    showAllButtonBrands.classList.toggle('rotate-show-all-button');
    if (!swiperWrapperBrands.classList.contains('show-all-hide-brands')) {
        showAllLabelBrands.innerHTML = 'Скрыть';
    } else {
        showAllLabelBrands.innerHTML = 'Показать все';
    }
})

// Show all button types
const showAllButtonTypes = document.querySelector('.show-all-types-js');
const swiperWrapperTypes = document.querySelector('.swiper-wrapper-types-js');
const showAllLabelTypes = document.querySelector('.show-all-label-types-js');


showAllButtonTypes.addEventListener('click', () => {
    swiperWrapperTypes.classList.toggle('show-all-hide-types');
    showAllButtonTypes.classList.toggle('rotate-show-all-button');
    if (!swiperWrapperTypes.classList.contains('show-all-hide-types')) {
        showAllLabelTypes.innerHTML = 'Скрыть';
    } else {
        showAllLabelTypes.innerHTML = 'Показать все';
    }
})