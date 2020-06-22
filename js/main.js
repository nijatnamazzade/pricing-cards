$( document ).ready(function() {
   

$('.toggle-button').click(function(evt){  

  $("h3").each(function(){
      $(this).toggleClass("visibility");
    });

  $('section').toggleClass("month");

});




});