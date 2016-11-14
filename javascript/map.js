function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(22.337487, 114.172002), 
    zoom: 15
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker = new google.maps.Marker({
  position: new google.maps.LatLng(22.337487, 114.172002),
  map: map,
  label: 'Elderly Shopping Mall'
  });
}