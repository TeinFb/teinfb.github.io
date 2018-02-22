	$(function() {
	  var initial = $('#humour').attr('data-value');

	  $('.Bonus').on("touchmove", function(event) {
			event.preventDefault();
      var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
	    var offsetTop = $(this).offset().top;
	    var posLeft = touch.pageY - offsetTop;
	    var max = $(this).height();
	    var newValue = 100-(( posLeft / max)*100);
posLeft
	  // console.log(newValue);
	    setVal(newValue);
	  });

	  $('.Bonus').on("touchend", function(e) {
	    setVal(initial);
	  });

	  function setVal(val) {
	    var rounded = Math.round(val);
	    if (rounded > 100) {
	      rounded = 100;
	    } else if (rounded < 0) {
	      rounded = 0
	    }
	    $('#humour').attr('value', rounded);
	    $('#percent-bonus').html(Math.round(rounded) + ' %');
	  }
	});
