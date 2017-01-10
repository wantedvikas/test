$(function(){
  $('.carousel').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    fade: true,
    speed: 400,
    cssEase: 'linear'
  });
});

$(function() {
  $('.menu-toggle').on('click', function(){
    $('.menu-mobile').toggleClass('open');
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      var calc = target.offset().top - $('.mainHeader').outerHeight();

      if (target.length) {
        $('html, body').animate({
          scrollTop: calc
        }, 1000);
        return false;
      }
    }
  });
});
