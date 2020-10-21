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