/*
var coursJs = {
  test: "allo",
	test2: function() { console.log('lel'); }
}
*/
//Calcul âge 
var birthdate = new Date("1991/03/11");
var cur = new Date();
var diff = cur-birthdate; // This is the difference in milliseconds
var test = Math.floor(diff/31557600000); // Divide by 1000*60*60*24*365.25
console.log(test);
$('#age').html(test+' ans');


$(function() {
  // Reccuperer l'offset top de $('#Skill')
  var offsetTop = $('#skill_pro').offset().top - 90;
  var lauched = false;
  var limit = $('#skill_pro').height() - 90;
  $(window).scroll();

  var coursJs = {
    test: "allo"
  }

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
