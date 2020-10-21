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