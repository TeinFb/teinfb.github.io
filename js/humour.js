$(function(){
$( '.wait' ).on( "mousemove", function( event ) {
  var test= event.pageX ;
  var min= 0;
 var max= $(document).width ();
  console.log(max);
  $( "#log" ).text( test*100/max);
});
});
