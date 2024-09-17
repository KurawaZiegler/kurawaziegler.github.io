$(document).ready(function () {
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    navPosition: "bottom",
    speed: 500,
    responsive: {
      1060: {
        nav: false,
      },
      370: {
        nav: true,
        navPosition: "bottom",
      }
    }
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
      $('#order .modal__img').attr('src', $('.catalog-item__img').eq(i).attr('src'))
      $('.pageup').hide()
      $('html, body').css('overflow', 'hidden')
      $('.overlay, #order').fadeIn();
    });
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
    $('html, body').css('overflow', 'visible')
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите своё имя",
          minlength: jQuery.validator.format("Минимум {0} символа")
        },
        phone: "Введите свой телефон",
        email: {
          required: "Введите свою почту",
          email: "Почтовый адресс должен быть формата: yourname@example.com"
        }
      }
    });
  };
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-9999", { placeholder: "+7 (999) 999-9999" });

  // $('form').submit(function (e) {
  //   e.preventDefault();
  //   $.ajax({
  //     type: "POST",
  //     url: "mailer/smart.php",
  //     data: $(this).serialize()
  //   }).done(function () {
  //     $(this).find("input").val("");
  //     $('#consultation, #order').fadeOut();
  //     $('.overlay, #thanks').fadeIn('slow');

  //     $('form').trigger('reset');
  //   });
  //   return false;
  // });

  //send to server

  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    };

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn();


      $('form').trigger('reset');
    });
    return false;
  });

  //smooth scroll up

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  //animate

  new WOW().init();




});
