window.onload = function(){

    function addMap(latitude, longitude) {

        var latLng = new google.maps.LatLng(latitude, longitude);

        var map = new google.maps.Map(document.querySelector('.map-container'),{
            zoom: 16,
            center: latLng
        });

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'Text Here!!!'
        });
    }

    navigator.geolocation.getCurrentPosition(function(geoPosition){

        addMap(geoPosition.coords.latitude, geoPosition.coords.longitude);

    });

};