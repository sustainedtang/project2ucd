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

