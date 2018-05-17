$(document).ready(function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $(window).scroll(function(e){
    var percentage_movement=$(window).scrollTop()/screen.height;
    if(percentage_movement>0.8){        //Down below
      percentage_movement=1;
      $("#up").css("opacity","1")
      $("#topbar").css("position","fixed").css("top","0").css("background-color","rgba(0,0,0,0.8)");
    }
    else{                           //Up during movement
      $("#up").css("opacity","0")
      $("#topbar").css("position","absolute").css("top","calc(100vh - 100px)");
      $("#topbar").css("height","80px").css("background-color","rgba(0,0,0,"+(percentage_movement*0.8)+")");
      $("#top_bar_left").css("font-size",(80-40*percentage_movement)+"px");
      $("#top_parallax").css("background-position","50% "+(70-percentage_movement*40)+"%");
    }
    //US PHOTO PARALLAX MOVEMENT
    $("#us_photo").css("background-position","50% "+(70-(($(window).scrollTop()-($("#us_photo").position().top))/(($("#contact_section").position().top)-($("#us_photo").position().top)))*40)+"%");

  })
})

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });






function go_to(id){
  document.querySelector("#"+id).scrollIntoView({
    behavior: 'smooth'
  });
}
