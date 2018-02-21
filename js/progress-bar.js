$(function() {
  // Reccuperer l'offset top de $('#Skill')
  var offsetTop = $('#skill_pro').offset().top - 90;
  var lauched = false;
  var limit = $('#skill_pro').height() - 90;
  $(window).scroll();


  var shouldProgressOnScroll = true;

  if ($(document).height() <= limit + $(window).height()) {
    lauched = true;
    handleProgress();
  }

  function handleProgress() {
    $('progress').each(function() {
      var max = $(this).attr('data-value');

      $(this).val(0).animate({
        value: max
      }, {
        duration: 5000,
        progress: function() {
          var value = $(this)[0].value;
          var spanpercent = $(this).parent().find('.percent');
          spanpercent.html(Math.round(value) + ' %');
        },
      });
    });
  }
  $(document).on('click scroll',function(){
$('.collapse').collapse('hide');
})




  // Mettre un evenement on scroll sur window pour choper le scroll actuelle

  $(window).on('scroll', function(e) {
    var windowScrollTop = $(this).scrollTop();

    // si le window scroll est > a l'offset top de #skill
    if (windowScrollTop >= offsetTop && !lauched) {
      lauched = true;
      handleProgress();
    }
  });


});
