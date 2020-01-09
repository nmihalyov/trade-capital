// show youtube video player
$('.js-play-video').on('click', function () {
  const ID = $(this).attr('data-id')
  if ($(this).parent().hasClass('video--local')) {
    $(this).parent().find('video').trigger('play');
  } else {
    $(this).parent().append(`<iframe width="570" height="285" src="https://www.youtube.com/embed/${ID}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)>`);
  }
  $(this).hide();
});

// load local video
$(document).ready(() => {
  const URL = $('.video--local').attr('data-url');
  $('.video--local').append(`<video width="570" height="285" controls="" class="embed-responsive-item" data-mp4="true" id="mautic-player-0">
    <source src=${URL} type="video/mp4">
  </video>`);
});