$(function() {
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
});
