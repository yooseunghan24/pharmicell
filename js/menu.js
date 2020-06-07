//메뉴 호버 jQuery
$('nav > ul').mouseenter(function(){
    $('.sub_menu, .sub_menu_back').stop().slideDown();
  });
  $('nav').mouseleave(function(){
    $('.sub_menu, .sub_menu_back').stop().slideUp();
  });