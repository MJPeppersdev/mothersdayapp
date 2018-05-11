// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 10000; // 10 seconds

// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Manual page trigger follows menu link click

var triggerID = $(this).attr('data-city');

$('.trigger').on('click', function() {
  window.location.reload(triggerID + '.html');
});

// Menu trigger

$('.menu-trigger').on('click', function() {
  $('.side-nav').addClass('menu-open');
  $('.overlay-close').removeClass('hide');
});

$('.overlay-close').on('click', function() {
  $('.side-nav').removeClass('menu-open');
  $('.overlay-close').addClass('hide');
});


// $('.grayscale-yes').on('click', function() {
//   $(this).addClass('hide');
//   $('.grayscale-no').removeClass('hide');
//   $('.image-container').addClass('black-white');
// });

// $('.grayscale-no').on('click', function() {
//   $(this).addClass('hide');
//   $('.grayscale-yes').removeClass('hide');
//   $('.image-container').removeClass('black-white');
// });
