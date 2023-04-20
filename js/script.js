let map;
let iitLatLong = { lat: 41.835080908035344, lng: -87.62698444545988  };

function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

 var map = new google.maps.Map(document.getElementById("map"), {
    center: iitLatLong,
    zoom: 8,
  });
}



