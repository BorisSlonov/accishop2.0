window.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".header__list"),
        menuItem = document.querySelectorAll(".header__link"),
        hamburger = document.querySelector(".header__burger");
    function closeMenu() {
        hamburger.classList.remove("burger_active");
        menu.classList.remove("menu_active");
    }
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active");
    });
    menuItem.forEach(function (item) {
        item.addEventListener("click", function () {
            closeMenu();
        });
    });

    //Hidden header
    var headerTag = document.querySelector(".header");
    var scrollPrev = 0;
    var pricesHeader = document.querySelectorAll('.pricesTable__row_header');
    window.addEventListener("scroll", function () {
        var scrolled = window.scrollY;
        if (scrolled > 100 && scrolled > scrollPrev) {
            headerTag.classList.add("out");
            headerTag.classList.remove("outBg");
            closeMenu(); // Закрыть меню при скролле
        } else {
            headerTag.classList.remove("out");
            headerTag.classList.add("outBg");
        }
        scrolled <= 100 ? headerTag.classList.remove("outBg") : '';
        scrollPrev = scrolled;
    });

    this.setTimeout((() => {
        document.querySelector(".body").classList.remove("scroll-block");
        document.querySelectorAll('.telAnime').forEach(i => {
            i.classList.add('active')
        })
    }), 3500)
    this.setTimeout((() => {
        this.document.querySelector('.telAnime__img_inst').classList.remove('animate__fadeInUp', 'animate__animated', 'animate__delay-4s')
        this.document.querySelector('.telAnime__img_inst').classList.add('telAnime__img_visible')
    }), 4000)
    ScrollOut({
        targets: ".scrolOut",
        threshold: 0.5,
        onShown: function (element) {
            var qs = element.getAttribute('data-class');
            element.classList.add(qs);
            element.classList.add('animate__animated');
            element.style.opacity = '1';
        },
    });
    document.querySelectorAll('.page1Menu__img').forEach(function (menuImg) {
        menuImg.addEventListener('mouseenter', function () {
            var targetClass = menuImg.dataset.target;
            document.querySelectorAll('.telAnime__img').forEach(function (img) {
                img.classList.remove('telAnime__img_visible');
            });
            document.querySelector('.' + targetClass).classList.add('telAnime__img_visible');
        });
    });
    const swiperReviews = new Swiper('.swiperReviews', {
        pagination: {
            el: '.swiperReviews .swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiperReviews .swiper-button-next',
            prevEl: '.swiperReviews .swiper-button-prev',
        },
    });

    const swiperProd = new Swiper(".swiperProd", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        effect: "cards",                    //make slider card
        cardsEffect: {
            perSlideOffset: 10,             // slide gap(px)
            perSlideRotate: 10,             // Rotation angle of second and subsequent slides
            slideShadows: false,            // Shadow presence of second and subsequent slides(true/false)
        },
        grabCursor: true,                   //grab cursor
        pagination: {                       //pagination(dots)
            el: '.swiperProd .swiper-pagination',
            clickable: true,
        },
        navigation: {                       //navigation(arrows)
            nextEl: ".swiperProd .swiper-button-next",
            prevEl: ".swiperProd .swiper-button-prev",
        },
        initialSlide: 0, // Устанавливаем начальный активный слайд на первый
    });

});





