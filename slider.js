$(document).ready(function(){
    $('.slider').slick({
      arrows: false, 
      dots: true, 
      speed: 1000,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      draggable: false,
      swipe: true,
      waitForAnimate: true,
      centerMode: false,
      variableWidth:false,
      rows: 1,
      slidesPerRow: 1,
      vertical: false,
      verticalSwiping: false,
    });
  });