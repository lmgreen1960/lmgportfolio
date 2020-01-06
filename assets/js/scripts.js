'use strict';

$(document).ready(function(){

  // ------------------- nav animation init -------------------
  navScroll.init();


  // ------------------- matchHeight -------------------
  $('.match-height').matchHeight();

});



// ------------------- ScrollReveal -------------------
window.sr = ScrollReveal({
  duration: 650,
  distance: '25px',
  scale: 0.95
});
sr.reveal('.scrollreveal');



// ------------------- nav animation -------------------
var $header = $('#nav'),
    $headerHeight = $header.height();

var navScroll = {

  init:function(){
    $(window).on('scroll',function(){
      navScroll.navDrop();
    })
  },

  navDrop:function(){
    var $scrollTop = $(window).scrollTop();

    if($scrollTop > $headerHeight){
      $header.addClass('scrolled');
    }
    else if($scrollTop == 0) {
      $header.removeClass('scrolled');
    }
  }
}
