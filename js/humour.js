$(function() {
  var initial = $('#humour').attr('data-value');

  $('.Bonus').on("mousemove", function(event) {
    var offsetLeft = $(this).offset().left + 15;
    var posLeft = event.pageX - offsetLeft;
    var max = $('#humour').width();
    var newValue = ( posLeft / max ) * 100;

    // var posLeft = scrollTop() - offsetLeft;
    // console.log (scrollTop);
    setVal(newValue);
  });

  $('.Bonus').on("mouseout", function(e) {
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
