
// Adding tilelayer
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  Median_Price_2016: new L.LayerGroup(),
  Median_Price_2017: new L.LayerGroup(),
  Median_Price_2018: new L.LayerGroup(),
  Median_Price_2019: new L.LayerGroup(),
  Median_Price_2020: new L.LayerGroup(),
  Median_Price_2021: new L.LayerGroup()
};

// Creating map object
var myMap = L.map("map", {
  center: [36.74, -120],
  scrollWheelZoom: false,
  zoom: 6,
  layers: [
    layers.Median_Price_2016,
    layers.Median_Price_2017,
    layers.Median_Price_2018,
    layers.Median_Price_2019,
    layers.Median_Price_2020,
    layers.Median_Price_2021
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(myMap);

// Create an overlays object to add to the layer control
var overlays = {
  "Avg. House Median Price in 2016": layers.Median_Price_2016,
  "Avg. House Median Price in 2017": layers.Median_Price_2017,
  "Avg. House Median Price in 2018": layers.Median_Price_2018,
  "Avg. House Median Price in 2019": layers.Median_Price_2019,
  "Avg. House Median Price in 2020": layers.Median_Price_2020,
  "Avg. House Median Price in 2021": layers.Median_Price_2021
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(myMap);

// Populate markers from API endpoint
d3.json('/medianPcoor').then(data => {
  console.log(data);

  // BEGIN: Populate Map
  //Year 2016
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    mp_16_mean = math.mean(point['16_jan'], point['16_feb'], point['16_mar'], point['16_apr'],
    point['16_may'], point['16_jun'], point['16_jul'], point['16_aug'],
    point['16_sep'], point['16_oct'], point['16_nov'], point['16_dec']);

    mp_16 = math.round(mp_16_mean);

    // Define a function for circle color showing median price
    function getColor(d) {
      return d > 1000000 ? '#800026' :
            d > 800000 ? '#BD0026' :
            d > 650000 ? '#E31A1C' :
            d > 500000 ? '#FC4E2A' :
            d > 300000 ? '#FD8D3C' :
            d > 200000 ? '#FEB24C' :
            d > 100000 ? '#FED976' :
                        '#FFEDA0';
    };

    var marker = L.circleMarker(coords, {
      fillColor: getColor(mp_16),
      radius: 10,
      stroke: "white",
      strokewidth: 1,
      fillOpacity: 1
    });

    marker.bindPopup("<h5>"+`Year: 2016  County: ${county} <h5> <hr> Avg. Median Price: $${mp_16}`);
    marker.addTo(layers.Median_Price_2016);

  });

  //Year 2017
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    mp_17_mean = math.mean(point['17_jan'], point['17_feb'], point['17_mar'], point['17_apr'],
    point['17_may'], point['17_jun'], point['17_jul'], point['17_aug'],
    point['17_sep'], point['17_oct'], point['17_nov'], point['17_dec']);

    mp_17 = math.round(mp_17_mean);

    // Define a function for circle color showing median price
    function getColor(d) {
      return d > 1000000 ? '#800026' :
            d > 800000 ? '#BD0026' :
            d > 650000 ? '#E31A1C' :
            d > 500000 ? '#FC4E2A' :
            d > 300000 ? '#FD8D3C' :
            d > 200000 ? '#FEB24C' :
            d > 100000 ? '#FED976' :
                        '#FFEDA0';
    };

    var marker = L.circleMarker(coords, {
      fillColor: getColor(mp_17),
      radius: 10,
      stroke: "white",
      strokewidth: 1,
      fillOpacity: 1
    });

    marker.bindPopup("<h5>"+`Year: 2017  County: ${county} <h5> <hr> Avg. Median Price: $${mp_17}`);
    marker.addTo(layers.Median_Price_2017);

  });

  //Year 2018
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    mp_18_mean = math.mean(point['18_jan'], point['18_feb'], point['18_mar'], point['18_apr'],
    point['18_may'], point['18_jun'], point['18_jul'], point['18_aug'],
    point['18_sep'], point['18_oct'], point['18_nov'], point['18_dec']);

    mp_18 = math.round(mp_18_mean);

    // Define a function for circle color showing median price
    function getColor(d) {
      return d > 1000000 ? '#800026' :
            d > 800000 ? '#BD0026' :
            d > 650000 ? '#E31A1C' :
            d > 500000 ? '#FC4E2A' :
            d > 300000 ? '#FD8D3C' :
            d > 200000 ? '#FEB24C' :
            d > 100000 ? '#FED976' :
                        '#FFEDA0';
    };

    var marker = L.circleMarker(coords, {
      fillColor: getColor(mp_18),
      radius: 10,
      stroke: "white",
      strokewidth: 1,
      fillOpacity: 1
    });

    marker.bindPopup("<h5>"+`Year: 2018  County: ${county} <h5> <hr> Avg. Median Price: $${mp_18}`);
    marker.addTo(layers.Median_Price_2018);

  });

  //Year 2019
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    mp_19_mean = math.mean(point['19_jan'], point['19_feb'], point['19_mar'], point['19_apr'],
    point['19_may'], point['19_jun'], point['19_jul'], point['19_aug'],
    point['19_sep'], point['19_oct'], point['19_nov'], point['19_dec']);

    mp_19 = math.round(mp_19_mean);

    // Define a function for circle color showing median price
    function getColor(d) {
      return d > 1000000 ? '#800026' :
            d > 800000 ? '#BD0026' :
            d > 650000 ? '#E31A1C' :
            d > 500000 ? '#FC4E2A' :
            d > 300000 ? '#FD8D3C' :
            d > 200000 ? '#FEB24C' :
            d > 100000 ? '#FED976' :
                        '#FFEDA0';
    };

    var marker = L.circleMarker(coords, {
      fillColor: getColor(mp_19),
      radius: 10,
      stroke: "white",
      strokewidth: 1,
      fillOpacity: 1
    });

    marker.bindPopup("<h5>"+`Year: 2019  County: ${county} <h5> <hr> Avg. Median Price: $${mp_19}`);
    marker.addTo(layers.Median_Price_2019);

  });

  //Year 2020
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    mp_20_mean = math.mean(point['20_jan'], point['20_feb'], point['20_mar'], point['20_apr'],
    point['20_may'], point['20_jun'], point['20_jul'], point['20_aug'],
    point['20_sep'], point['20_oct'], point['20_nov'], point['20_dec']);

    mp_20 = math.round(mp_20_mean);

    // Define a function for circle color showing median price
    function getColor(d) {
      return d > 1000000 ? '#800026' :
            d > 800000 ? '#BD0026' :
            d > 650000 ? '#E31A1C' :
            d > 500000 ? '#FC4E2A' :
            d > 300000 ? '#FD8D3C' :
            d > 200000 ? '#FEB24C' :
            d > 100000 ? '#FED976' :
                        '#FFEDA0';
    };

    var marker = L.circleMarker(coords, {
      fillColor: getColor(mp_20),
      radius: 10,
      stroke: "white",
      strokewidth: 1,
      fillOpacity: 1
    });

    marker.bindPopup("<h5>"+`Year: 2020  County: ${county} <h5> <hr> Avg. Median Price: $${mp_20}`);
    marker.addTo(layers.Median_Price_2020);

  });

  //Year 2021
  data.forEach(point => {

    var county = point['county'];
    var lat = point['lat'];
    var lng = point['lng'];
    var coords = [lat, lng];

    mp_21_mean = math.mean(point['21_jan'], point['21_feb'], point['21_mar'], point['21_apr'],
    point['21_may']);

    mp_21 = math.round(mp_21_mean);

    // Define a function for circle color showing median price
    function getColor(d) {
      return d > 1000000 ? '#800026' :
            d > 800000 ? '#BD0026' :
            d > 650000 ? '#E31A1C' :
            d > 500000 ? '#FC4E2A' :
            d > 300000 ? '#FD8D3C' :
            d > 200000 ? '#FEB24C' :
            d > 100000 ? '#FED976' :
                        '#FFEDA0';
    };

    var marker = L.circleMarker(coords, {
      fillColor: getColor(mp_21),
      radius: 10,
      stroke: "white",
      strokewidth: 1,
      fillOpacity: 1
    });

    marker.bindPopup("<h5>"+`Year: 2021  County: ${county} <h5> <hr> Avg. Median Price: $${mp_21}`);
    marker.addTo(layers.Median_Price_2021);

  });

  function getColor(d) {
    return d > 1000000 ? '#800026' :
          d > 800000 ? '#BD0026' :
          d > 650000 ? '#E31A1C' :
          d > 500000 ? '#FC4E2A' :
          d > 300000 ? '#FD8D3C' :
          d > 200000 ? '#FEB24C' :
          d > 100000 ? '#FED976' :
                      '#FFEDA0';
  };

  var legend = L.control({position: "bottomright"});
  legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 100000, 200000, 300000, 500000, 650000, 800000, 1000000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
  };
  legend.addTo(myMap);
});
