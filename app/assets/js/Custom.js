$(document).ready(function(){

    $('.parallax').parallax();
    $('.tap-target').tapTarget('open');

    // Geo Location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(initMap);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    //maps
    var map;
    var service;
    var infowindow;

    function initMap(position) {
        $("#overlay").fadeIn;
        getLocation();

        var curLocation = {lat: position.coords.latitude, lng: position.coords.longitude};

        map = new google.maps.Map(document.getElementById('map'), {
            center: curLocation,
            zoom: 18
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: pyrmont,
            radius: 500,
            type: ['food']
        }, callback);
    }

    function callback(results, status) {
        $("#overlay").fadeOut;
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    initMap();

});