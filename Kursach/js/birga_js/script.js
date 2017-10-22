$(document).ready(function(){
 var window_width = $(window).width();
 var class_adapt_menu = '.menua';
 if(window_width < 1033){
 	$('.adapt_menu').hide();// Скрываем меню
 	$('.menu').css({
 		'margin-left': '-4rem'
 	});// Отодвигаем до левого края
    $('.menu ul').prepend("<li></li>");// Добавляем контейнер для меню иконки
    $('.menu ul li:first').css({
    	'background': 'url(../../images/birga_img/adaptiv_menu.png) no-repeat center center'
    });// Добавляем иконку
    $('.adapt_menu').remove();// Удаляем элементы класса adapt_menu
    $('.menu ul li:last').css({
    	'width':'20%',
    	'text-align':'left',
    	'padding-left':'1.5rem'
    });// Стилизуем кнопку FAQ
    $('.vidorka').css({
    	'width':'8rem'
    });// Стилизуем картинки выборки
    // Добавляем блоки дял менюшки адаптивной
    $('.menu ul').append("<ul class='adapt_ul'><li class=adaptiv_menu><a href='#'>Биржа</a></li><li class=adaptiv_menu><a href='#'>Добавить заказ</a></li><li class=adaptiv_menu><a href='#'>Заказчик</a></li><li class=adaptiv_menu><a href='#'>Исполнитель</a></li></ul>");
    $('.adapt_ul').css({
       'position' : 'absolute',
       'top'      : '5.5rem',
       'width'    : '45rem',
       'left'     : '0',
       'background-color' : '#32414E',
       'margin'   : 0,
       'padding'  : 0
    });
    $('.adaptiv_menu').css({
    	'font-size' : '1.5rem',
    	'width'     : '100%',
    	'line-height' : '4rem',
    	'transition'  : 'all, 0.5s',
    });
    $('.adaptiv_menu a').css({
    	'color' : '#fff',
    	'margin-left' : '3rem'
    });
    $('.adapt_ul').hide();
    $('.menu ul:first li:first').click(function(){
          $('.adapt_ul').slideToggle();
    });// end click()
  } // end if()
  if(window_width <= 600) {
    $('.menu ul:first').remove();
    $('.menu').append("<ul class='adapt_ul'><li class='fav_icon'></li><li class='adaptiv_menu'><a href='#'>Биржа</a></li><li class='adaptiv_menu'><a href='#'>Добавить заказ</a></li><li class='adaptiv_menu'><a href='#'>Заказчик</a></li><li class='adaptiv_menu'><a href='#'>Исполнитель</a></li> <li class='adaptiv_menu chatj'><a class='op' href='#'>Rfh</a></li><li class='adaptiv_menu starj'><a class='op' href='#'>rfh</a></li><li class='adaptiv_menu piplej'><a class='op' href='#'>rfh</a></li><li class='adaptiv_menu'><a href='#'>FAQ</a></li></ul>");
    $('.menu').append("<ul><li class='fav_icon'></li></ul>");
    $('.fav_icon').css({
      'background': 'url(../../images/birga_img/adaptiv_menu.png) no-repeat center 1.5rem',
      'height' : '15vh',
      'width'  : '10rem',
      'border' : 'none',
      'outline' : 'none'
    });
    $('.menu ul:last').css({
      'height' : '6rem'
    });
    $('.adapt_ul').css({
      'display'  : 'block',
       'position' : 'absolute',
       'width'    : '45rem',
       'left'     : '0',
       'background-color' : '#32414E',
       'margin'   : 0,
       'padding'  : 0,
       'z-index' : '2'
    });
    $('.adaptiv_menu').css({
      'font-size' : '1.5rem',
      'width'     : '100%',
      'text-align' : 'left',
      'line-height' : '4rem',
      'transition'  : 'all, 0.5s',
    });
       $('.adaptiv_menu a').css({
      'color' : '#fff',
      'margin-left' : '3rem'
    });
        $('.adapt_ul').hide();
    $('.fav_icon').click(function(){
          $('.adapt_ul').slideToggle();
    });// end click()
  } // end if()
}); // end redy()

