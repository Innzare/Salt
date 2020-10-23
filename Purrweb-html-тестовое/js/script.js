// === Настройки слайдера
$('.twitter-slider .container').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
   speed: 1000,
   infinity: true,
   dots: true,
   appendDots: $('.twitter-slider__dots')
});
// === Настройки слайдера


// === Адаптивность навигации
$(window).resize(function (event) {
   adaptiveFunction();
});

function adaptiveHeader(w, h) {
   let headerMenu = $('.header-menu');

   if (w <= 768) {
      if (!$('.header-menu-nav').hasClass('done')) {
         $('.header-menu-nav').addClass('done').appendTo(headerMenu);
      }
   } else {
      $.each($('.header-menu-nav'), function (index, val) {
         if ($(this).hasClass('done')) {
            $(this).removeClass('done').prependTo($('nav'));

         };
      });
   }
}

function adaptiveFunction() {
   let w = $(window).outerWidth();
   let h = $(window).outerHeight();
   adaptiveHeader(w, h);
}

adaptiveFunction();
// === Адаптивность навигации

// === Вызов меню бургер
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if ($(this).hasClass('active')) {
      $(this).css({ 'position': 'fixed', 'right': '6%' });
   } else if (!$(this).hasClass('active')) {
      $(this).css({ 'position': 'absolute', 'right': '10px' });
   }
});
// === Вызов меню бургер


$('.find-more__icon-block').on('click', function (e) {
   let h = $('body');
   if ($(window).outerWidth() < 470) {
      $('html, body').animate({
         scrollTop: h.offset().top + 650
      }, 400);
   } else {
      $('html, body').animate({
         scrollTop: h.offset().top + 900
      }, 400);
   }


});

$('body').on('click', function () {
    $('.popup iframe').attr("src", '');
    $('.popup-block').fadeOut();
    $('body').removeClass('not-scroll');
});

$('.product-spotlight__video').on('click', function (e) {
    e.stopPropagation();
    $('body').addClass('not-scroll');
    $('.popup iframe').attr("src", 'https://player.vimeo.com/video/107426942');
    $('.popup-block').fadeIn();
});




