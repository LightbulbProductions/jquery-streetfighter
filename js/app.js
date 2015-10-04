$(document).ready(function() {
    $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
     $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.had').finish().show()
     .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      });
  })
  .mouseup(function() {
    $('.ryu-still').hide();
     $('.ryu-throwing').hide();
      $('.ryu-cool').hide();
    $('.ryu-ready').show();
  });
  $('body').keydown(function(e) {
		if (e.which == 88) {
		  $('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})

	$('body').keyup(function(e) {
		if (e.which == 88) {
		  $('.ryu-throwing').hide();
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
		}
	})


});
  
  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
  


