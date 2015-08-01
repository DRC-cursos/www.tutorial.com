window.onload = function(){
  var latLng = new google.maps.LatLng(-23.585429899999998, -46.6771612);

  var myMap = new google.maps.Map(document.querySelector('.map-container'), {
      zoom: 16,
      center: latLng
  });

    var marker = new google.maps.Marker({
        position: latLng,
        map: myMap,
        title: 'Text Here'
    });
};