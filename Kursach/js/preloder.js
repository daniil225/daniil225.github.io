$(document).ready(function(){
   setTimeout(function(){
       var preloder = $('.preloder');
       var round1   = $('.round1');
       round1.fadeOut(1000,function(){
       	 preloder.fadeOut(500);
       });
   },2000);
});