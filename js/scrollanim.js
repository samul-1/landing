$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight()
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom + $(this).innerHeight()/2) { //object comes into view for 2 thirds (scrolling down)
        if ($(this).css("opacity")==0) {
            if($(this).hasClass("fadeLeft")) {
                $(this).addClass("animate__animated animate__fadeInLeft")
            } else {
                $(this).addClass("animate__animated animate__fadeInRight")
            }
        }
    }
    })
  }).scroll() //invoke scroll-handler on page-load
})

$("#projbut").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top
    }, 'slow');
})
