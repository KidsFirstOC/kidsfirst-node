var main = function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('#top-nav').addClass('hide');
        $('#top-bot-nav').addClass('fixed');
        $('#top-bot-nav').addClass('opaque');
    } else {
        $('#top-nav').removeClass('hide');
        $('#top-bot-nav').removeClass('fixed');
        $('#top-bot-nav').removeClass('opaque');
    }
  });
  $('.faqDesc').slideUp();

  $('.accordian').on('mouseenter', '.container.faq',
      function( event ) {
        $(this).addClass("selectable");
      }).on('mouseleave', '.faq', function( event ) {
        $(this).removeClass("selectable");
      }
    );

  $('.accordian').on('click','.container.faq',
    function() {
      //  $('> .faqDesc', this).toggleClass('hide');
      //  $('> .faqDesc', this).slideUp('slow');
        $(this).toggleClass('selected');
        $('> .faqDesc', this).slideToggle('slow');
    }
  );
};

var map;
function initMap() {
  var chapman = {lat: 33.7936221, lng: -117.8537963};
  map = new google.maps.Map(document.getElementById('map'), {
    center: chapman,
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: chapman,
    map: map
  });
  var address = "Chapman University</br>Smith Hall</br>One University Drive, Orange, CA 92866 "
  var infowindow = new google.maps.InfoWindow({
    content: address
  });
  infowindow.open(map,marker);
}


$(document).ready(main);
initMap();
