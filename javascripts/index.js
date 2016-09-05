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

  var scroll_start = 0;
  var startchange = $('#details-container');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.7)');
      } else {
        $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0.0)');
      }
    });
  }
});
