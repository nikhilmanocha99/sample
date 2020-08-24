$(document).ready(function() {

  $('.js--features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    }
    else {
      $('nav').removeClass('sticky');

    }
  }, {
    offset: '80px;'
  });
 $('.js--plan').click(function () {
   $('html, body').animate({scrolltop: $('.js--section-plan').offset()}, 1000);
 });
$('.js--start').click(function () {
  $('html, body').animate({scrolltop: $('.js--features').offset()}, 1000);
});

 $('.js--wp-1').waypoint(function(direction) {
   $('.js--wp-1').addClass('animated fadeIn');
 }, {
   offset:'60%'
 });
 $('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animated fadeInUp');
}, {
  offset:'60%'
});
$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animated fadeInUp');
}, {
  offset:'60%'
});
$('.js--wp-4').waypoint(function(direction) {
  $('.js--wp-4').addClass('animated pulse');
}, {
  offset:'60%'
});

$('.js--mob-nav').click(function() {
  var nav = $('.main');

  nav.slideToggle(200);
});

});