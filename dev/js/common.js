window.onload = () => {

  let scroll = 0; // header, hero, popup

  @@include('assets/wow.js')
  @@include('assets/resize.js')
  @@include('assets/particles.js')

  @@include('../components/_ui/video/video.js')
  @@include('../components/_ui/input/input.js')

  @@include('../components/header/header.js')
  @@include('../components/hero/hero.js')
  @@include('../components/calc/calc.js')
  @@include('../components/calculator/calculator.js')
  @@include('../components/feedback/feedback.js')
  @@include('../components/slider/slider.js')
  @@include('../components/faq-item/faq-item.js')
  @@include('../components/popup/popup.js')

}
