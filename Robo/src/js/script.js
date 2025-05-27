window.addEventListener('DOMContentLoaded', () => {

    //burger
    const menu = document.querySelector('.menu'),
        burger = document.querySelector('.burger-btn'),
        closeBtn = document.querySelector('.menu__close'),
        noScroll = document.querySelector('body'),
        menuLinks = document.querySelector('.menu__links-item');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-btn_active');
        menu.classList.toggle('menu_active');
        noScroll.classList.toggle('no-scroll');
    });
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('menu_active');
        noScroll.classList.remove('no-scroll');
    });
    menuLinks.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });


    // menuLinks.forEach(addEventListener('click', () => {
    //     menu.classList.remove('menu_active');
    // }));

    //swiper
    const swiper = new Swiper('.swiper', {
        speed: 250,
        loop: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',

        },
        // autoplay: {
        //     delay: 5000,
        // },
        breakpoints: {
            // when window width is >= 320px
            993: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            577: {
                slidesPerView: 2,
                dragSize: 260,
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev',
                },
            },
            320: {
                dragSize: 140,
                slidesPerView: 1.4,
                spaceBetween: 20,

                navigation: false,
            },

        }
    });
    //form
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 15

                },
                phone: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите своё имя",
                    minlength: jQuery.validator.format("Минимум {0} символа"),
                    maxlength: jQuery.validator.format("Максимум {0} символов")
                },
                phone: {
                    required: "Введите свой номер",
                    minlength: jQuery.validator.format("Минимум {0} символа"),
                },
                email: {
                    required: "Введите свою почту",
                    email: "Почтовый адресс должен быть формата: yourname@example.com"
                }
            }
        });
    };
    $('input[name=phone]').mask("+7 (999) 999-9999", { placeholder: "+7 (999) 999-9999" });
    validateForms('#order');


    $('form').submit(function (e) {
        e.preventDefault();
    });

    //modal
    const modal = document.querySelector('.trainers-modal'),
        moreBtn = document.querySelectorAll('.trainers__item-more'),
        modalCloseBtn = document.querySelector('.close'),
        overlay = document.querySelector('.overlay');


    $(moreBtn).click(function (e) {
        e.preventDefault();
        $(modal).css('display', 'block')
        $(overlay).css('display', 'block')
        noScroll.classList.toggle('no-scroll')

    });
    $(modalCloseBtn).click(function (e) {
        e.preventDefault();
        $(modal).css('display', 'none')
        $(overlay).css('display', 'none')
        noScroll.classList.remove('no-scroll')
    });


    // $(item).each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault()
    //     });
    // });



    // modalCloseBtn.addEventListener('click')
    //modal-tabs
    $('ul.modal__tabs').on('click', 'li:not(.modal__tabs-item_active)', function () {
        $(this)
            .addClass('modal__tabs-item_active').siblings().removeClass('modal__tabs-item_active')
            .closest('div.trainers-modal').find('div.modal__tabs-content').removeClass('modal__tabs-content_active').eq($(this).index()).addClass('modal__tabs-content_active');
    });






});
