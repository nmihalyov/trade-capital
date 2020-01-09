// scroll to calc section
$('.js-scroll-calc').on('click', e => {
  e.preventDefault();
  $([document.documentElement, document.body]).animate({
    scrollTop: $('.calc').offset().top - $('.header').innerHeight() - 30
  }, 500);
});