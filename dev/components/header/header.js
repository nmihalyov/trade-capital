// set sections mentioned in header
const sections = [$('.page-wrapper'), $('.why'), $('.about'), $('.faq')];

// set current section
const setLinks = () => {
  sections.map(el => {
    const topOffset = el.offset().top;
    if (topOffset <= window.scrollY + $('.header').innerHeight() + 30) {
      $('.header__link--current').removeClass('header__link--current');
      $(`.header__link[data-scroll=${el[0].classList[0]}]`).addClass('header__link--current');
    }
  });
};

// set header background
const setHeader = () => {
  if (window.scrollY < 50) {
    $('.header').removeClass('header--bg');
  } else {
    $('.header').addClass('header--bg');
  }
};

// set hero section parallax
const setHero = () => {
  if (window.scrollY < window.innerHeight) {
    $('.hero').css('transform', `translateY(${-window.scrollY / 5}px)`)
  }
};

// set once page is loaded
setHeader();
setLinks();

// function call frequency latency for better perfomance
const debounce = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

// set on page scroll
$(window).on('scroll', () => {
  debounce(setLinks, 300);

  setHero();

  setHeader();
});


let headerMobileShown = false;

// scroll to specific section
$('.js-scrollto').on('click', function (e) {
  e.preventDefault();

  $('body').css({
    'position': 'static',
    'margin-top': '0'
  });

  headerMobileShown = false;

  $('.header__burger').removeClass('header__burger--active');
  $('.header__mobile').removeClass('header__mobile--active');

  $([document.documentElement, document.body]).animate({
    scrollTop: $(`.${$(this).attr('data-scroll')}`).offset().top - $('.header').innerHeight()
  }, 500);
});

// handling mobile menu
$('.header__burger').on('click', function () {
  $(this).toggleClass('header__burger--active');
  $('.header__mobile').toggleClass('header__mobile--active');

  headerMobileShown = !headerMobileShown;

  if (headerMobileShown) {
    scroll = window.scrollY;
    $('body').css({
      'position': 'fixed',
      'margin-top': -scroll
    });
  } else {
    $('body').css({
      'position': 'static',
      'margin-top': '0'
    });

    window.scrollTo(0, scroll);
  }
});