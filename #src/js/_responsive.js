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

