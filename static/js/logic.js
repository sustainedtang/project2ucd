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
  });
    //  Viz 1
    d3.json('/percentChgCoor').then(data => {
      console.log(data);
    
      data.forEach(point => {
    data.sort((a,b) => b['16_dec'] - a['16_dec']);
    data.reverse();

    var county = data.map(d => d['county']);
    var dec16_pct_chg = data.map(d => d['16_dec']);

    var trace_data = [
      {
        x: dec16_pct_chg, 
        y: county,
        type: 'line',        
        orientation: 'h'
      }
    ];

    var layout = {
      autosize: false,
      height: 1000,
      itemsizing: 'constant',
      title: 'Percent Change by County 2016',
      yaxis: {
        automargin: true
      }
    };
    
    Plotly.newPlot('viz1', trace_data, layout);

  }); 
  });

  //Viz 2
    d3.json('/percentChgCoor').then(data => {
      console.log(data);
    
      data.forEach(point => {
    data.sort((a,b) => b['18_dec'] - a['18_dec']);
    data.reverse();

    var county = data.map(d => d['county']);
    var dec18_pct_chg = data.map(d => d['18_dec']);

    var trace_data = [
      {
        x: dec18_pct_chg, 
        y: county,
        type: 'line',        
        orientation: 'h'
      }
    ];

    var layout = {
      autosize: false,
      height: 1000,
      itemsizing: 'constant',
      title: 'Percent Change by County 2018',
      yaxis: {
        automargin: true
      }
    };
    
    Plotly.newPlot('viz2', trace_data, layout);

  }); 
  });

      //  Viz 3
    d3.json('/percentChgCoor').then(data => {
      console.log(data);
    
      data.forEach(point => {
    data.sort((a,b) => b['20_dec'] - a['20_dec']);
    data.reverse();

    var county = data.map(d => d['county']);
    var dec20_pct_chg = data.map(d => d['20_dec']);

    var trace_data = [
      {
        x: dec20_pct_chg, 
        y: county,
        type: 'line',        
        orientation: 'h'
      }
    ];

    var layout = {
      autosize: false,
      height: 1000,
      itemsizing: 'constant',
      title: 'Percent Change by County 2020',
      yaxis: {
        automargin: true
      }
    };


    
    Plotly.newPlot('viz3', trace_data, layout);

  }); 
  });

  //Viz 4

    d3.json('/percentChgCoor').then(data => {
      console.log(data);
    
      data.forEach(point => {
    data.sort((a,b) => b['21_may'] - a['21_may']);
    data.reverse();

    var county = data.map(d => d['county']);
    var may21_pct_chg = data.map(d => d['21_may']);

    var trace_data = [
      {
        x: may21_pct_chg, 
        y: county,
        type: 'line',        
        orientation: 'h'
      }
    ];

    var layout = {
      autosize: false,
      height: 1000,
      itemsizing: 'constant',
      title: 'Percent Change by County 2021',
      yaxis: {
        automargin: true
      }
    };
    
    Plotly.newPlot('viz4', trace_data, layout);

  }); 
  });


  //Viz 5

  d3.json('/medianPcoor').then(data => {
    console.log(data);
  
    data.forEach(point => {
  data.sort((a,b) => b['16_dec'] - a['16_dec']);
  data.reverse();

  var county = data.map(d => d['county']);
  var dec16_med_chg = data.map(d => d['16_dec']);

  var trace_data = [
    {
      x: dec16_med_chg, 
      y: county,
      type: 'line',        
      orientation: 'h'
    }
  ];

  var layout = {
    autosize: false,
    height: 1000,
    itemsizing: 'constant',
    title: 'Median by County 2016',
    yaxis: {
      automargin: true
    }
  };
  
  Plotly.newPlot('viz5', trace_data, layout);

}); 
});


//ViZ 6

d3.json('/medianPcoor').then(data => {
  console.log(data);

  data.forEach(point => {
data.sort((a,b) => b['18_dec'] - a['18_dec']);
data.reverse();

var county = data.map(d => d['county']);
var dec18_med_chg = data.map(d => d['18_dec']);

var trace_data = [
  {
    x: dec18_med_chg, 
    y: county,
    type: 'line',        
    orientation: 'h'
  }
];

var layout = {
  autosize: false,
  height: 1000,
  itemsizing: 'constant',
  title: 'Median by County 2018',
  yaxis: {
    automargin: true
  }
};

Plotly.newPlot('viz6', trace_data, layout);

});

//ViZ 7

d3.json('/medianPcoor').then(data => {
  console.log(data);

  data.forEach(point => {
data.sort((a,b) => b['20_dec'] - a['20_dec']);
data.reverse();

var county = data.map(d => d['county']);
var dec20_med_chg = data.map(d => d['20_dec']);

var trace_data = [
  {
    x: dec20_med_chg, 
    y: county,
    type: 'line',        
    orientation: 'h'
  }
];

var layout = {
  autosize: false,
  height: 1000,
  itemsizing: 'constant',
  title: 'Percent Change by County 2020',
  yaxis: {
    automargin: true
  }
};

Plotly.newPlot('viz7', trace_data, layout);

}); 
});

//ViZ 8

d3.json('/medianPcoor').then(data => {
  console.log(data);

  data.forEach(point => {
data.sort((a,b) => b['21_may'] - a['21_may']);
data.reverse();

var county = data.map(d => d['county']);
var dec20_med_chg = data.map(d => d['21_may']);

var trace_data = [
  {
    x: dec20_med_chg, 
    y: county,
    type: 'line',        
    orientation: 'h'
  }
];

var layout = {
  autosize: false,
  height: 1000,
  itemsizing: 'constant',
  title: 'Median by County 2021',
  yaxis: {
    automargin: true
  }
};

Plotly.newPlot('viz8', trace_data, layout);

}); 
});
});
