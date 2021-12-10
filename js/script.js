const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}



$(document).ready(function(){

  $nav=$('.navbar');
  $toggle=$('.toggle');

  $toggle.click(function(){
      $nav.toggleClass('collapse');

  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots:false,
    nav:true,
    navText:  [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive:responsive
});

$('.move-up span').click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
});








$(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    
        if($(window).scrollTop() > 0){
          $('#scroll-top').show();
        }else{
          $('#scroll-top').hide();
        }
    
      });
    
      // smooth scrolling 
    
      $('a[href*="#"]').on('click',function(e){
    
        e.preventDefault();
    
        $('html, body').animate({
    
          scrollTop : $($(this).attr('href')).offset().top,
    
        },
          500,
          'linear'
        );
    
      });

});