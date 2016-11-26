$(document).ready(function(){

$(document).on("mouseenter", ".pop", function(){

  $(this).removeClass("pop").addClass("white");

  if ($("div").hasClass("pop")){return;}
  else {$(".one").addClass("pop").removeClass("white");}

})

})
