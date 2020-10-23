
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
