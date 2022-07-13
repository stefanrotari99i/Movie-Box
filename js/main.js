$(document).ready(function(){

    $('#loginBtn').on('click', function() {
      $('.modal__background, .modal__wrapp').fadeIn(200);
      $('body').css('overflow', 'hidden');
    });
  
  
    $('.modal__background, .modal__close').on('click', function() {
      $('.modal__background, .modal__wrapp').fadeOut(300);
      $('body').css('overflowY', 'scroll');
    });


    $('.trailers__video').on('click', function(){
      $(".trailers__iframe").attr('src', '');
      $('.trailers__video').fadeOut(1000);
      $('body').css('overflowY', 'scroll');
    })

});

function trailerShow(url) {
  $('.trailers__video').fadeIn(1000);
  $(".trailers__iframe").attr('src', url);
  $('body').css('overflow', 'hidden');
}

