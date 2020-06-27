//메뉴 호버 jQuery
$('nav > ul').mouseenter(function(){
    $('.sub_menu, .sub_menu_back').stop().slideDown();
  });
  $('nav').mouseleave(function(){
    $('.sub_menu, .sub_menu_back').stop().slideUp();
});
const dontA = document.querySelectorAll('[href="#"]');
for(let i of dontA) {
  i.addEventListener('click', function(e){
    e.preventDefault;
  })
}
const navLi = document.querySelectorAll('nav > ul > li > a');
for(let i of navLi) {
  i.addEventListener('focus', function(){
    $('.sub_menu, .sub_menu_back').stop().slideDown();
  })
}