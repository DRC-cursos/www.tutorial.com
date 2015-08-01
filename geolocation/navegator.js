(function(){
    function showGeoPosition(coords) {
        var innerHTML = '';

        for(var property in coords) {
            innerHTML += '<h1>' + property.toUpperCase() + ': ' + coords[property] + '</h1>';
        }

        document.body.innerHTML = innerHTML;
    }

    function success(geoPosition) {
        console.log(geoPosition);
        showGeoPosition(geoPosition.coords);
    }

    function failed(positionError) {
        alert(positionError.message);
        console.log(positionError);
    }

    navigator.geolocation.getCurrentPosition(success, failed);
})();