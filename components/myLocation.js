function initMap() {
      var myLocation = {lat: 27.6940380, lng: 85.3280110};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLocation,
        gestureHandling: 'none',
        zoomControl: false
      });
      var marker = new google.maps.Marker({
          position: myLocation,
          map: map,
          title: "Pravin's Location"
        });
    }
