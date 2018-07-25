$( document ).ready(function() {

  // Open side navbar for handsets
  $('.navbar-burger').on('click tap', function(e) {
    $(this).toggleClass('is-active');
    $(this).parent().parent().find('#navbar-menu').toggleClass('is-active');
  });

  $('.navbar-dropdown-toggle').on('click tap', function(e) {
    $(this).parent().toggleClass('is-open');
  });

  $('.dropdown-trigger').on('click tap', function(e) {
    $(this).parent().toggleClass('is-active');
  });

  // Slick carousel
  $('.carousel-headlines').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.carousel-related').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

});
