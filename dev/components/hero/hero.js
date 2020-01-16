// set hero section parallax
const setHero = () => {
  if (window.scrollY < window.innerHeight) {
    $('.hero').css('transform', `translateY(${-window.scrollY / 5}px)`)
  }
};

// set once page is loaded
setHeader();

// set on page scroll
if (window.innerWidth >= 1200) {
  $(window).on('scroll', () => {
    setHero();
  });
}

// scroll to calc section
$('.js-scroll-calc').on('click', e => {
  e.preventDefault();
  $([document.documentElement, document.body]).animate({
    scrollTop: $('.calc').offset().top - $('.header').innerHeight() - 30
  }, 500);
});

// toggle hero video popup
$('.hero__play').on('click', () => {
  scroll = window.scrollY;

  $('body').css({
    'position': 'fixed',
    'margin-top': -scroll
  });

  $('.hero-popup__window').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ovUMVVgMaDU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)>')
  $('.hero-popup').fadeIn(300);
});

// close hero video popup
$('.hero-popup__close').on('click', () => {
  $('body').css({
    'position': 'static',
    'margin-top': '0'
  });

  window.scrollTo(0, scroll);

  $('.hero-popup').fadeOut(300);
  $('.hero-popup iframe').remove();
});