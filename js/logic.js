// Creating map object
var myMap = L.map("map", {
  center: [38.44, -121.344],
  zoom: 7
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var cagovlink = "https://services6.arcgis.com/snwvZ3EmaoXJiugR/arcgis/rest/services/BOE_citycounty/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

d3.json(cagovlink).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});

