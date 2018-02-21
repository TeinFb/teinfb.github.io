// $(function() {
//   var initial = $('#humour').attr('data-value');
//
//   $('skill_pro').on("mousemove", function(event) {
//     var offsetLeft = $(this).offset().left + 15;
//     var posLeft = event.pageY - offsetLeft;
//     var max = $('skill_pro').width();
//     var newValue = ( posLeft / max ) * 100;
//     var mobValue = Math.floor((Math.random() * 100) + 1);
//     console.log(pageY);
//
//     // var posLeft = scrollTop() - offsetLeft;
//     // console.log (scrollTop);
//     setVal(newValue);
//   });
//
//   $('.Bonus').on("mouseout", function(e) {
//     setVal(initial);
//   });
//
//   function setVal(val) {
//     var rounded = Math.round(val);
//     if (rounded > 100) {
//       rounded = 100;
//     } else if (rounded < 0) {
//       rounded = 0
//     }
//     $('#humour').attr('value', rounded);
//     $('#percent-bonus').html(Math.round(rounded) + ' %');
//   }
// });

$('skill_pro').on('touchmove', function(event) {
	event.preventDefault ();
	var touch= e.originalEvent.touches [0] || e.originalEvent.changedTouches [0];
	var elm= $(this).offset();
	var x= touch.pageX - elm.left;
	var y= touch.pageY - elm.top;
	if(x <$(this).width() && x> 0) {
		if(y < $(this).height() && y> 0) {
			// LE CODE VIENT ICI
			console.log (touch.pageY + '' + touch.pageX);
		}
	}
});
