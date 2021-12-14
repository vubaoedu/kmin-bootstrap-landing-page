var x = document.getElementById("pos");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred."
                    break;
            }
        }

        function myMap() {
            var myCenter = new google.maps.LatLng(10.812193, 106.717515);
            var mapCanvas = document.getElementById("map");
            var mapOptions = {
                center: myCenter,
                zoom: 17
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);

            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE
            });
            marker.setMap(map);

            var infoWindow = new google.maps.InfoWindow({
                content: "Học viện Kmin"
            });
            infoWindow.open(map, marker);
        }

// Carousel options

$('.carousel').carousel({
    interval: 3000,
})