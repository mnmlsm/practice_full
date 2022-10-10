// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function showSwiper() {
    let init = false;
    if (window.outerWidth < 768) {
        init = true;
        const brandsSwiper = new Swiper(".brands-swiper-js", {
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination-brands",
                clickable: true,
            },
        });
        const typesSwiper = new Swiper(".types-swiper-js", {
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination-types",
                clickable: true,
            },
        });

        const priceSwiper = new Swiper(".price-swiper-js", {
            slidesPerView: "auto",
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination-prices",
                clickable: true,
            },
        });
    } else if (init && window.outerWidth >= 768) {
        init = false;
        brandsSwiper.destroy(true, true);
        typesSwiper.destroy(true, true);
        priceSwiper.destroy(true, true);
        location.reload();
    }


}

showSwiper();

window.addEventListener('resize', showSwiper);


