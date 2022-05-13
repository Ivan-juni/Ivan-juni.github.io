$(document).ready(function () {
    $('.news__body-cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        // dots: true,
        arrows: true,
        variableWidth: true,
        prevArrow: "<div class='prev-news'></div>",
        nextArrow: "<div class='next-news'></div>",
        responsive: [
            {
                breakpoint: 1500, // - от какой ширины изменять настройки(1500 и ниже)
                settings: {
                    // вносим изменения на ширине 1500 и ниже 
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 810, // брекпоинтов может быть сколько угодно
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 551, // брекпоинтов может быть сколько угодно
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                    arrows: false,
                }
            }
        ]
    })
    $('.customers__cards').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        // dots: true,
        arrows: true,
        variableWidth: true,
        prevArrow: "<div class='prev-customers'></div>",
        nextArrow: "<div class='next-customers'></div>",
        responsive: [
            {
                breakpoint: 1500, // - от какой ширины изменять настройки(1500 и ниже)
                settings: {
                    // вносим изменения на ширине 1500 и ниже 
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 810, // брекпоинтов может быть сколько угодно
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 551, // брекпоинтов может быть сколько угодно
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                }
            }
        ]
    })


    // menu burger

    const iconMenu = document.querySelector('.menu__icon');
    if (iconMenu) {
        const menuBody = document.querySelector('.header__nav-1');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock'); // для блокирования скролла при открытом меню
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    }


})

