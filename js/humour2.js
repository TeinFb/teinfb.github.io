	$(function() {
	  var initial = $('#humour').attr('data-value');

	  $('.Test').on("touchmove", function(event) {
			event.preventDefault();
      var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
	    var offsetLeft = $(this).offset().top;
	    var posLeft = touch.pageY - offsetLeft;
	    var max = $(this).height();
	    var newValue = ( posLeft / max)*100;

	  // console.log(newValue);
	    setVal(newValue);
	  });

	  // $('.Bonus').on("mouseout", function(e) {
	  //   setVal(initial);
	  // });

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
