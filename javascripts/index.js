/**
 * Created by z on 2016-09-05.
 */
$(function() {
  $.smartbanner({ daysHidden: 0, daysReminder: 0, title:'Discard' });

  $('#details-assets').addClass('hideme').viewportChecker({
    classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
    offset: 100
  });

  $('.storeItem').addClass('hideme').viewportChecker({
    classToAdd: 'visible animated swing', // Class to add to the elements when they are visible
    offset: 100
  });

  $(document).scroll(function() {
    if($(document).scrollTop() > 50) {
      $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.7)');
    } else {
      $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.0)');
    }
  });
});
