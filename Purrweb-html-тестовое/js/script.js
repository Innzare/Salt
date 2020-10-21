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
      $('body').data('scroll', $(window).scrollTop());
   }
   $('body').toggleClass('lock');
   if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
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
// function Popup(opt) {
//     this.btn = document.querySelector(opt.btn);
//     this.overlay = document.querySelector(opt.overlay);
//     this.popupBlock = document.querySelector(opt.popupBlock);
//     this.content = opt.content;
//     this.contBlock = document.querySelector('.popup');

//     let pop = this;

//     this.open = function () {
//         pop.popupBlock.classList.add('active');
//         //pop.contBlock.innerHTML = pop.content;
//         $('.popup iframe').attr("src", 'https://player.vimeo.com/video/107426942');
//     };

//     this.close = function () {
//         pop.popupBlock.classList.remove('active');
//         $('.popup iframe').attr("src", '');
//     };

//     this.btn.onclick = pop.open;
//     this.overlay.onclick = pop.close;
// }

// let p = new Popup({
//     btn: '.product-spotlight__video',
//     overlay: '.layout',
//     popupBlock: '.popup-block',
// });
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


// $(function () {
//     //функция вызова всплывающего окна с видео-блоком
//     $('.product-spotlight__video').on('click', function () {
//         $('.popup-block').fadeIn();
//         //добавляем видео в блок с настройками автовоспроизведения
//         $('.popup-block').append('<a id="popup_video_close"></a>');
//         $('.popup').append('<iframe width="580" height="326" src="https://www.youtube.com/embed/wCc2v7izk8w?autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
//         q_width = $('.popup-block').outerWidth() / -2;
//         q_height = $('.popup-block').outerHeight() / -2;
//         $('.popup-block').css({
//             'margin-left': q_width,
//             'margin-top': q_height
//         });
//         $('body').append('<div id="fade"></div>');
//         $('#fade').css({ 'filter': 'alpha(opacity=40)' }).fadeIn();
//     });

//     $('body').on('click', '#fade, #popup_video_close', function () {
//         $('#fade , #popup').fadeOut(function () {
//             $('.popup').empty();
//             $('.popup-block').fadeOut();
//             $('#popup_video_close').remove();
//             $('#fade').remove();
//         });
//     });
// });



