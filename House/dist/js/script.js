window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        burger = document.querySelector('.burger'),
        noScroll = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        menu.classList.toggle('header__menu__active');
        noScroll.classList.toggle('no-scroll');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger__active');
            menu.classList.toggle('header__menu__active');
        })
    })
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__tab-content').removeClass('catalog__tab-content_active').eq($(this).index()).addClass('catalog__tab-content_active');
});

// const tabBtn = document.querySelectorAll('.tab_btn');
// $('.catalog__tabs').on('click', 'button:not(.tab_btn_active)', function () {
//     $(this)
//         .addClass('tab_btn_active').siblings().removeClass('tab_btn_active')
//         .closest('div.container').find('div.catalog__tab-content').removeClass('catalog__tab-content_active').eq($(this).index()).addClass('catalog__tab-content_active');
// });
