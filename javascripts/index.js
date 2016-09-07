/**
 * Created by z on 2016-09-05.
 */
$(function() {
  $.smartbanner({ daysHidden: 0, daysReminder: 0, title:'Discard' });

  $('.store-item').addClass('hideme').viewportChecker({
    classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
    offset: 100
  });

  $(document).scroll(function() {
    if($(document).scrollTop() > 50) {
      $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.7)');
    } else {
      $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.0)');
    }
  });

  // Add smooth scrolling to all links inside a navbar
  $('.discard-navbar a').on('click', function(event){
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash (#)
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, 'easeInOutExpo', function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

});
