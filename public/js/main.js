$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });

  $('.facets').find('a').click(function(e){
    if($(e.currentTarget).hasClass('inactive')){
      $(e.currentTarget).removeClass('inactive');
    }else{
      $(e.currentTarget).addClass('inactive');
    }
  });

  $('.btn-filter-menu').click(function(){
    //Ocultar
    if($( ".filter-menu" ).hasClass('active')){
      $( ".filter-menu" ).removeClass('active');
      $($('.btn-filter-menu').find('span')).removeClass('glyphicon glyphicon-chevron-up');
      $($('.btn-filter-menu').find('span')).addClass('glyphicon glyphicon-chevron-down');
      $( ".filter-menu" ).animate({
        height: "8%"
      }, 200, function() {
        // Animation complete.
      });
      $( ".btn-filter-menu" ).animate({
        height: "25%"
      }, 0, function() {
        // Animation complete.
      });
      $($('.filter-menu').find('.row')).hide();
    //Mostrar
    }else{
      $( ".filter-menu" ).addClass('active');
      $($('.btn-filter-menu').find('span')).removeClass('glyphicon glyphicon-chevron-down');
      $($('.btn-filter-menu').find('span')).addClass('glyphicon glyphicon-chevron-up');
      $( ".filter-menu" ).animate({
        height: "20%"
      }, 200, function() {
        // Animation complete.
      });
      $( ".btn-filter-menu" ).animate({
        height: "15%",
      }, 0, function() {
        // Animation complete.
      });
      $($('.filter-menu').find('.row')).show();
    }
  });

  $('#gestionar').click(function(){
      $('#gestionar-view').show();
      $('#administrar-view').hide();
  });

  $('#administrar').click(function(){
    $('#gestionar-view').hide();
    $('#administrar-view').show();
  });
  /*$('.btn-filter-menu').hover(function(){
    if(!$( ".filter-menu" ).hasClass('active')){
      $( ".btn-filter-menu" ).animate({
        height: "25%",
      }, 0, function() {
        // Animation complete.
      });
    }
  });*/
});
