// Creating map object
var myMap = L.map("map", {
  center: [38.44, -121.344],
  scrollWheelZoom: false,
  zoom: 6
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

// // Use this link to get the geojson data.
// var cagovlink = "https://services6.arcgis.com/snwvZ3EmaoXJiugR/arcgis/rest/services/BOE_citycounty/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

// d3.json(cagovlink).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data).addTo(myMap);
// });

// Populate markers from API endpoint
d3.json('/percentChgCoor').then(data => {
  console.log(data);

})
  // BEGIN: Populate Map
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    var marker = L.circleMarker(coords, {
      fillColor: 'blue',
      radius: 10
    });

    marker.bindPopup(`County: ${county}`);
    marker.addTo(myMap);
    // END: Populate Map


    /******************************** */

    // BEGIN: Populate Viz 1

    data.sort((a,b) => b['21_may'] - a['21_may']);
    data.reverse();

    var county = data.map(d => d['county']);
    var may_pct_chg = data.map(d => d['21_may']);

    var trace_data = [
      {
        x: may_pct_chg,
        y: county,
        type: 'bar',        
        orientation: 'h'
      }
    ];

    var layout = {
      autosize: false,
      height: 1000,
      itemsizing: 'constant',
      title: '% Change by County',
      yaxis: {
        automargin: true
      }
    };
    
    Plotly.newPlot('viz1', trace_data, layout);


  });
})