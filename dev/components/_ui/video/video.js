$('.js-play-video').on('click', function () {
  $(this).parent().find('iframe')[0].src += "?autoplay=1";
  $(this).hide();
});