var listeners = function () {
  $(".home-wrap").fadeToggle("fast");

  $(".button").on("click", function (event) {
    if ($(event.target).hasClass("yellow")) {
    
    } else {
      var oldButtonClass = $(".button.yellow").parent().attr("class");
    
      $(".button").removeClass("yellow");
      $(event.target).addClass("yellow");      
    
      var buttonClass = $(event.target).parent().attr("class");

      $(".content > div.moving-wraps." + oldButtonClass + "-wrap").fadeToggle("fast");
    
      $("." + buttonClass + "-wrap").fadeToggle("fast");
    };
  }); 
};