$('.twitter-slider .container').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
   speed: 1000,
   infinity: true,
   dots: true,
   appendDots: $('.twitter-slider__dots')
});

;
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

// Вызов меню бургер
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if ($(this).hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
   }
   $('body').toggleClass('lock');
   if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
   }
});

console.log('resp');
;



