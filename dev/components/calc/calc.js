// number animation function
const animateValue = (selector, start, end, duration, percent = false) => {
  let current = start;
  const range = end - start;
  const increment = end > start ? (range / duration) : (range / duration);
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function() {
      current += increment;
      $(selector).text(percent ? '0,' + Math.floor(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '%' : Math.floor(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
      if (Math.floor(current) == end) {
          clearInterval(timer);
      }
  }, stepTime);
};

// set whether specific  items are already animated
let depositIsAnimated = false;
let statsAreAnimated = false;

$(window).on('scroll', () => {
  // animate chart appearing while scrolling
  const chartTop = $('.calc__chart').offset().top;
  const scrollWithWindow = window.scrollY + window.innerHeight;
  if (scrollWithWindow >= chartTop && (window.scrollY - window.innerHeight / 1.5) / 3 <= (chartTop + window.innerHeight / 1.5) / 3) {
    const progress = ((scrollWithWindow) - (chartTop + window.innerHeight / 1.5)) / 3;
    $('.calc__chart').css('width', (progress <= 100 ? progress : 100) + 'vw')
  }

  // animate items when user scrolled to them
  if (!depositIsAnimated && scrollWithWindow - 50 >= $('.calculator__total span').offset().top) {
    animateValue('.calculator__total span', 100000, 0, 22);
    depositIsAnimated = true;
  }
  
  if (!statsAreAnimated && scrollWithWindow - 50 >= $('.calc__stats-col').offset().top) {
    animateValue('.calc__stats-col:nth-child(1) .calc__stats-head', 0, 33, 33, true);
    animateValue('.calc__stats-col:nth-child(2) .calc__stats-head', 0, 1789, 20);
    animateValue('.calc__stats-col:nth-child(3) .calc__stats-head', 0, 1165, 20);
    statsAreAnimated = true;
  }
});