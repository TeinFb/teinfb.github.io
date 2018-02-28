
/*===========================================================================
      ████████╗ ██████╗ ██████╗  ██████╗     ██╗     ██╗███████╗████████╗
      ╚══██╔══╝██╔═══██╗██╔══██╗██╔═══██╗    ██║     ██║██╔════╝╚══██╔══╝
         ██║   ██║   ██║██║  ██║██║   ██║    ██║     ██║███████╗   ██║
         ██║   ██║   ██║██║  ██║██║   ██║    ██║     ██║╚════██║   ██║
         ██║   ╚██████╔╝██████╔╝╚██████╔╝    ███████╗██║███████║   ██║
         ╚═╝    ╚═════╝ ╚═════╝  ╚═════╝     ╚══════╝╚═╝╚══════╝   ╚═╝
  ===========================================================================
 parallax background
  fullpage.js https://github.com/alvarotrigo/fullPage.js/#fullpagejs



  // var objet = {
  //   prop1: 'value',
  //   prop2: 1,
  //   prop3: [0, 1, 2],
  //   prop0: [{ prop1: 'test', prop2: 'allo' }, {prop1; 'test'}]
  //   prop4: false,
  //   prop5: { prop1: 'allo' },
  //   prop6: function() { console.log('allo') }
  // }
  //
  // objet.prop6();



   ========================================================================== */


   /*========================================================================
                          ██╗    ███╗   ██╗    ██╗    ████████╗
                          ██║    ████╗  ██║    ██║    ╚══██╔══╝
                          ██║    ██╔██╗ ██║    ██║       ██║
                          ██║    ██║╚██╗██║    ██║       ██║
                          ██║    ██║ ╚████║    ██║       ██║
                          ╚═╝    ╚═╝  ╚═══╝    ╚═╝       ╚═╝
                            Init functions (?)
    ========================================================================= */




$(function() {
  // $('#fullpage').fullpage({
  //    anchors:['firstPage', 'secondPage', 'thirdPage']
  //  });




/*===========================================================================
                 ███████╗ ██████╗██████╗  ██████╗ ██╗     ██╗
                 ██╔════╝██╔════╝██╔══██╗██╔═══██╗██║     ██║
                 ███████╗██║     ██████╔╝██║   ██║██║     ██║
                 ╚════██║██║     ██╔══██╗██║   ██║██║     ██║
                 ███████║╚██████╗██║  ██║╚██████╔╝███████╗███████╗
                 ╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝
                              ScrollReveal
 ========================================================================== */



  window.sr = ScrollReveal();
  sr.reveal('.intro_quote', {
    duration: 1000,
    origin: 'top',
    reset: true
  });
  sr.reveal('.intro', {
    duration: 1000,
    origin: 'top',
    reset: true
  });
  sr.reveal('.skill_pro', {
    duration: 1000,
    origin: 'top',
    reset: true
  });
  sr.reveal('.skill_pro-btn', {
    delay: 2000,
    duration: 2000,
    origin: 'top',
    reset: true
  });
  sr.reveal('.xp_pro', {
    duration: 1000,
    origin: 'top',
    reset: true
  });
  sr.reveal('.foo', {
    container: '.modal-body',
    reset: true
  });



/*===========================================================================
                            █████╗  ██████╗ ███████╗
                           ██╔══██╗██╔════╝ ██╔════╝
                           ███████║██║  ███╗█████╗
                           ██╔══██║██║   ██║██╔══╝
                           ██║  ██║╚██████╔╝███████╗
                           ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
                               Calcul de l'age
 ===========================================================================*/
 $(function() {
   var offsetTop = $('#about').offset().top - 90;
   var launched = false;
   var limit = $('#about').height() - 90;
   $(window).scroll();
   var shouldProgressOnScroll = true;
   if ($(document).height() <= limit + $(window).height()) {
     calculAge();
   }
   else  {
     lauched = false;
   }
   $(window).on('scroll', function(e) {
     var windowScrollTop = $(this).scrollTop();
     // si le window scroll est > a l'offset top de #skill
     if (windowScrollTop >= offsetTop && !launched) {
       launched = true;
       calculAge();
     }

     function calculAge() {
       var birthdate = new Date("1991/03/11");
       var cur = new Date();
       var diff = cur - birthdate; // This is the difference in milliseconds
       var age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25
       // console.log(test);
       $('.age').animateNumber({
         number: age,
         'font-size': '25px',
       }, 2500) + ' ans';
       launched = true;
        $('#age2').addClass('animated flash custom1');
        // $('#age2').css('fonstsize': '25px'));


     }
   })
 })

 //   var offsetTop = $('#about').offset().top - 90;
 //   var windowScrollTop = $(this).scrollTop();
 //   var limit = $('#about').height() - 90;
 //   var launched = false;
 //   var shouldProgressOnScroll = true;
 //   if ($(document).height() <= limit + $(window).height()) {
 //     handleProgress();
 //   } else {
 //     lauched = false;
 //   }
 //
 //   function calculAge(){
 //     var birthdate = new Date("1991/03/11");
 //     var cur = new Date();
 //     var diff = cur - birthdate; // This is the difference in milliseconds
 //     var age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25
 //     // console.log(test);
 //     $('.age').animateNumber({
 //       number: age
 //     }, 2500) + ' ans';
 //     launched = true;
 //   }
 //    $(window).on('scroll', function(e){
 //      if (windowScrollTop >= offsetTop && !launched){
 //        calculAge();
 //      }
 //      else {
 //        launched = false;
 //      }
 //
 // })
  /*========================================================================
                  ███╗   ███╗ ██████╗ ██████╗  █████╗ ██╗
                  ████╗ ████║██╔═══██╗██╔══██╗██╔══██╗██║
                  ██╔████╔██║██║   ██║██║  ██║███████║██║
                  ██║╚██╔╝██║██║   ██║██║  ██║██╔══██║██║
                  ██║ ╚═╝ ██║╚██████╔╝██████╔╝██║  ██║███████╗
                  ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
                          Custom Modal pour images
  =========================================================================*/


  $('.toggle-image').on('click', function() {
    var images = $(this).attr('data-image');
    var arrayImages = images.split(',');

    var imagesDiv = "";

    $.each(arrayImages, function(index, image) {
      imagesDiv += '<img src="' + image + '" class="img-responsive margin-b-15" />';
    });

    $('.modal').html(imagesDiv);
    customShowModal();
  });

  $('.modal, .modal-back').on('click', function() {
    customHideModal();
  });

  function customShowModal() {
    $('.modal-back').fadeIn('fast');
    $('.modal').fadeIn('fast', function() {
      window.scrollTo(0, 0);
    });
  }

  function customHideModal() {
    $('.modal').fadeOut('fast');
    $('.modal-back').fadeOut('fast');
  }


  /*=========================================================================
         ███████╗██╗   ██╗██╗     ██╗     ██████╗  █████╗  ██████╗ ███████╗
         ██╔════╝██║   ██║██║     ██║     ██╔══██╗██╔══██╗██╔════╝ ██╔════╝
         █████╗  ██║   ██║██║     ██║     ██████╔╝███████║██║  ███╗█████╗
         ██╔══╝  ██║   ██║██║     ██║     ██╔═══╝ ██╔══██║██║   ██║██╔══╝
         ██║     ╚██████╔╝███████╗███████╗██║     ██║  ██║╚██████╔╝███████╗
         ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
              fullPage Scroll
   ========================================================================*/

  // TODO
  //
  //   $('#fullpage').fullpage({
  //     anchors: ['firstPage', 'secondPage', 'thirdPage']
  //   });
  //
  // });
  // TODO


  /*=========================================================================
        ██████╗ ██████╗  ██████╗  ██████╗ ██████╗ ███████╗███████╗███████╗
        ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔════╝██╔════╝██╔════╝
        ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝█████╗  ███████╗███████╗
        ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══╝  ╚════██║╚════██║
        ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║███████╗███████║███████║
        ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
                Animation ProgressBar et attribution valeur
   ========================================================================*/
// Reccuperer l'offset top de $('#Skill')
var offsetTop = $('#skill_pro').offset().top - 90;
var lauched = false;
var limit = $('#skill_pro').height() - 90;
$(window).scroll();
var shouldProgressOnScroll = true;
if ($(document).height() <= limit + $(window).height()) {
  handleProgress();
} else {
  lauched = false;
}

function handleProgress() {
  $('progress').each(function() {
    var max = $(this).attr('data-value');
    $(this).val(0).animate({
      value: max
    }, {
      duration: 1500,
      progress: function() {
        var value = $(this)[0].value;
        var spanpercent = $(this).parent().find('.percent');
        spanpercent.html(Math.round(value) + ' %');
        $('#humour').addClass('animated shake custom');
      },
    });
  });
}
$(window).on('scroll', function(e) {
  var windowScrollTop = $(this).scrollTop();
  // si le window scroll est > a l'offset top de #skill
  if (windowScrollTop >= offsetTop && !lauched) {
    lauched = true;
    handleProgress();
  }
});

  /*=========================================================================
           ██╗  ██╗██╗   ██╗███╗   ███╗ ██████╗ ██╗   ██╗██████╗
           ██║  ██║██║   ██║████╗ ████║██╔═══██╗██║   ██║██╔══██╗
           ███████║██║   ██║██╔████╔██║██║   ██║██║   ██║██████╔╝
           ██╔══██║██║   ██║██║╚██╔╝██║██║   ██║██║   ██║██╔══██╗
           ██║  ██║╚██████╔╝██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║  ██║
           ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                   Progress#humour en f de mouseX
   ========================================================================*/


  var initial = $('#humour').attr('data-value');

  $('.Bonus').on("mousemove", function(event) {
    var offsetLeft = $(this).offset().left + 15;
    var posLeft = event.pageX - offsetLeft;
    var max = $('#humour').width();
    var newValue = (posLeft / max) * 100;



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



  /*=========================================================================
          ██╗ ██╗ ██╗  ██╗██╗   ██╗███╗   ███╗ ██████╗ ██╗   ██╗██████╗
         ████████╗██║  ██║██║   ██║████╗ ████║██╔═══██╗██║   ██║██╔══██╗
         ╚██╔═██╔╝███████║██║   ██║██╔████╔██║██║   ██║██║   ██║██████╔╝
         ████████╗██╔══██║██║   ██║██║╚██╔╝██║██║   ██║██║   ██║██╔══██╗
         ╚██╔═██╔╝██║  ██║╚██████╔╝██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║  ██║
          ╚═╝ ╚═╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                Progress#humour en f de touchY (MOBILE)
   ========================================================================*/



  var initial = $('#humour').attr('data-value');

  $('.HumourM').on("touchmove", function(event) {
    event.preventDefault();
    var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
    var offsetTop = $('.Bonus').offset().top;
    var posLeft = touch.pageY - offsetTop;
    var max = $(this).height();
    // var test = $('#skill_pro').width('%');
    var newValue = 100 - (posLeft / max) * 100;
    // console.log(test);
    // console.log(newValue);
    // console.log(posLeft);
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

  /*=========================================================================
         ██████╗ ██████╗ ██╗     ██╗      █████╗ ██████╗ ███████╗███████╗
        ██╔════╝██╔═══██╗██║     ██║     ██╔══██╗██╔══██╗██╔════╝██╔════╝
        ██║     ██║   ██║██║     ██║     ███████║██████╔╝███████╗█████╗
        ██║     ██║   ██║██║     ██║     ██╔══██║██╔═══╝ ╚════██║██╔══╝
        ╚██████╗╚██████╔╝███████╗███████╗██║  ██║██║     ███████║███████╗
         ╚═════╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚══════╝
                   Collapse NavBar when clicked or scrolled
   ========================================================================*/

  $(document).on('click scroll', function() {
    $('.collapse').collapse('hide');
  })

/*===========================================================================
               ███████╗ █████╗ ██████╗ ███████╗    ██╗███╗   ██╗
               ██╔════╝██╔══██╗██╔══██╗██╔════╝    ██║████╗  ██║
               █████╗  ███████║██║  ██║█████╗      ██║██╔██╗ ██║
               ██╔══╝  ██╔══██║██║  ██║██╔══╝      ██║██║╚██╗██║
               ██║     ██║  ██║██████╔╝███████╗    ██║██║ ╚████║
               ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝    ╚═╝╚═╝  ╚═══╝
                        Modif duree et threshold
 ==========================================================================*/

  /* ========================================================================
   * Modif css fadeInUp
     ======================================================================== */
         $('a.page-scroll').bind('click', function(event) {
             var $anchor = $(this);
             $('html, body').stop().animate({
                 scrollTop: $($anchor.attr('href')).offset().top
             }, 1500, 'easeInOutExpo');
             event.preventDefault();
         });



     });
