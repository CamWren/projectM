// =======================================================================================================
// GLOBAL VARIABLES
var citySelection = [];
var citySelection2 = [];

var city_Scores =[];
var cities = [];
// =======================================================================================================

window.onload = function() { 

			var map = new L.Map('map');
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }).addTo(map);
            var latitude = 29;
            var longitude = -98;
            var city = new L.LatLng(latitude, longitude);
            map.setView(city,09);
            var drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);
            var drawControl = new L.Control.Draw({
                draw: {
                circle: false,
                marker: false,
                polyline: false
                },
                edit: {
                    featureGroup: drawnItems
                }
            });
            map.addControl(drawControl);
            var markers = [];
            var polygon = null;
            map.on('draw:created', function (e) {
                // remove markers and polygon from the last run
                $.each (markers, function (i) { map.removeLayer(markers[i]) });
                if (polygon != null) map.removeLayer (polygon);
                var latLngs = $.map(e.layer.getLatLngs(), function(o) {
                    return { name: "points", value: o.lat + "," + o.lng };
                });
                $.ajax({
                    url: 'https://api.simplyrets.com/properties',
                    data: latLngs,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("Authorization", "Basic " + btoa("simplyrets:simplyrets"))
                    },
                    success: function(data) {
                        $.each (data, function (idx) {
                            var markerLocation = new L.LatLng(data[idx].geo.lat, data[idx].geo.lng);
                            var marker = new L.Marker(markerLocation);
                            map.addLayer(marker);
                            markers.push(marker);
                        });
                    }
                });
                polygon = e.layer;
                map.addLayer(e.layer);
            });


            getCities();

//start of code to log selection.
var values = ["100","100","100","100","100","100","100","100","100","100"];

//updates question 1 with dropdown selection
var select = document.getElementById('question1');
select.addEventListener('change', function() {

  for (var i = 0; i < select.selectedOptions.length; i++) {
    var option = select.selectedOptions[i];
    values.splice(0, 1, option.value);
  };
  myBestMatch();
});

//updates question 2 with dropdown selection
var select2 = document.getElementById('question2');
select2.addEventListener('change', function() {

  for (var i = 0; i < select2.selectedOptions.length; i++) {
    var option = select2.selectedOptions[i];
    values.splice(1, 1, option.value);
  };
  myBestMatch();
});

//updates question 3 with dropdown selection
var select3 = document.getElementById('question3');
select3.addEventListener('change', function() {

  for (var i = 0; i < select3.selectedOptions.length; i++) {
    var option = select3.selectedOptions[i];
    values.splice(2, 1, option.value);
  };
  myBestMatch();
});

//updates question 4 with dropdown selection
var select4 = document.getElementById('question4');
select4.addEventListener('change', function() {

  for (var i = 0; i < select4.selectedOptions.length; i++) {
    var option = select4.selectedOptions[i];
    values.splice(3, 1, option.value);
  };
  myBestMatch();
});

//updates question 5 with dropdown selection
var select5 = document.getElementById('question5');
select5.addEventListener('change', function() {

  for (var i = 0; i < select5.selectedOptions.length; i++) {
    var option = select5.selectedOptions[i];
    values.splice(4, 1, option.value);
  };
  myBestMatch();
});

//updates question 6 with dropdown selection
var select6 = document.getElementById('question6');
select6.addEventListener('change', function() {

  for (var i = 0; i < select6.selectedOptions.length; i++) {
    var option = select6.selectedOptions[i];
    values.splice(5, 1, option.value);
  };
  myBestMatch();
});

//updates question 7 with dropdown selection
var select7 = document.getElementById('question7');
select7.addEventListener('change', function() {

  for (var i = 0; i < select7.selectedOptions.length; i++) {
    var option = select7.selectedOptions[i];
    values.splice(6, 1, option.value);
  };
  myBestMatch();
});

//updates question 8 with dropdown selection
var select8 = document.getElementById('question8');
select8.addEventListener('change', function() {

  for (var i = 0; i < select8.selectedOptions.length; i++) {
    var option = select8.selectedOptions[i];
    values.splice(7, 1, option.value);
  };
  myBestMatch();
});

//updates question 9 with dropdown selection
var select9 = document.getElementById('question9');
select9.addEventListener('change', function() {

  for (var i = 0; i < select9.selectedOptions.length; i++) {
    var option = select9.selectedOptions[i];
    values.splice(8, 1, option.value);
  };
  myBestMatch();
});

//updates question 10 with dropdown selection
var select10 = document.getElementById('question10');
select10.addEventListener('change', function() {

  for (var i = 0; i < select10.selectedOptions.length; i++) {
    var option = select10.selectedOptions[i];
    values.splice(9, 1, option.value);
  };
  myBestMatch();
});

//function that gets the data from our public api

function getCities(){
  $.get("/api", function(data){
    
    for(var i=0; i <data.length; i++){
    
    cities = {
      city: data[i].City_Name,
      state: data[i].State_Name,
      scores: [data[i].Public_Transportation,
               data[i].Weather,
               data[i].Sports,
               data[i].Live_Music,
               data[i].Outdoor_Parks,
               data[i].Schools_Education,
               data[i].Fitness_Health,
               data[i].Safety,
               data[i].Nightlife_Bars,
               data[i].Population_Density],
      latitude: data[i].Latitude,
      longitude: data[i].Longitude

            }
    city_Scores.push(cities);        
            // console.log(cities);
  }

  });
}

//function which finds the best city based on the survey results the user has entered.
function myBestMatch() {
  
// console.log()
  var bestMatch = {
    city: "",
    state: "",
    cityDifference: 1000,
    latitude: "",
    longitude:""
  };

  var totalDifference = 0;

  // Here we loop through all the city possibilities in the database.
  for (var i = 0; i < city_Scores.length; i++) {

    // console.log(cityScores[i]);
    totalDifference = 0;

    // We calculate the difference between the scores and sum them into the totalDifference. If they have not selected a value yet the score defaults to 100 to take that item out of consideration.
    for (var j = 0; j < values.length; j++) {
      if (values[j] > 10) {
        totalDifference = totalDifference + 100 }
        else {
        totalDifference = totalDifference + Math.abs(parseInt(values[j]) - parseInt(city_Scores[i].scores[j]));
      }
    }
   

    // If the sum of differences is less then the differences of the current "best match"
    if (totalDifference <= bestMatch.cityDifference) {

      // Reset the bestMatch to be the new city.
      bestMatch.city = city_Scores[i].city;
      bestMatch.state = city_Scores[i].state;
      bestMatch.cityDifference = totalDifference;
      bestMatch.latitude = city_Scores[i].latitude;
      bestMatch.longitude = city_Scores[i].longitude;
      console.log(bestMatch.city);
      $("#suggestedCity").html("<h4>Best Match: " + bestMatch.city + ", " + bestMatch.state + "</h4>");
    }
  }

  console.log(bestMatch);

};

// =======================================================================================================
// USER AUTHENTICATION BEGINNING
// =======================================================================================================
// var lock = new Auth0Lock('q1fsov60Bn2PtGahSM5BDyNPxDkkshv0', 'shuajo.auth0.com');

// var btn_login = document.getElementById('btn-login');

// btn_login.addEventListener('click', function() {
//   lock.show();
// });

// lock.on("authenticated", function(authResult) {
//   lock.getProfile(authResult.idToken, function(error, profile) {
//     if (error) {
//       // Handle error
//       return;
//     }
//     localStorage.setItem('id_token', authResult.idToken);
//     // Display user information
//     show_profile_info(profile);
//   });
// });
// =======================================================================================================
// USER AUTHENTICATION END
// =======================================================================================================


// NUMBEO API AJAX CALL 
var userIp = [];

  $.getJSON("http://jsonip.com/?callback=?", function (data) {
    userIp.push(data.ip);
  });

$("#submitButton").on("click", function(event) {
   event.preventDefault();
   console.log("SUCCESS!!!!!!!!");
     $('#city-div').html('');
            $('#city-div').append(function(event){

                    var city = $("#city-input").val().trim().toLowerCase();
                    // Different variable pushes to global variable citySelection without formatting to be used for salary calculation
                    var sitee = $("#city-input").val().trim();
                    citySelection.push(sitee);
                    console.log(citySelection);
                    var city2 = $("#city-input2").val().trim().toLowerCase();
                    // Different variable pushes to global variable citySelection without formatting to be used for salary calculation
                    var sitee2 = $("#city-input2").val().trim();
                    citySelection2.push(sitee2);
                    console.log(citySelection2);

    $("#general").on('click', function(){

    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();
    console.log(city);
    console.log(city2);
    getCityNumbers(city,city2);



    function getCityNumbers(city, city2) {
        function objCreate(keyName, value) {
        var newValue = value.toFixed(1);
        newValue = parseInt(newValue);
        var objectName = {
            key: keyName,
            value: newValue
        };
        data.push(objectName);
    };


        var queryURL = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city;
        var data = [];

        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .done(function(response) {
            console.log("hello!");
            console.log(response)
            var cityName = response.name;
            var crime = response.crime_index;
            var groceries = response.groceries_index;
            var health = response.health_care_index;
            var pollution = response.pollution_index;
            var qualityLife = response.quality_of_life_index;
            var rent = response.rent_index;
            var safety = response.safety_index;

            console.log(crime + "\n" + cityName + "\n" + groceries + "\n" + health + "\n" +
            pollution + "\n" + qualityLife + "\n" + rent + "\n" + safety + "\n");

         

                        var queryURL2 = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city2;
             

                        $.ajax({
                        url: queryURL2,
                        method: "GET"
                        })
                        .done(function(response) {
                            console.log("hello!2");
                            console.log(response);
                            var cityName2 = response.name;
                            var crime2 = response.crime_index;
                            var groceries2 = response.groceries_index;
                            var health2 = response.health_care_index;
                            var pollution2 = response.pollution_index;
                            var qualityLife2 = response.quality_of_life_index;
                            var rent2 = response.rent_index;
                            var safety2 = response.safety_index;

                        console.log(crime2 + "\n" + cityName2 + "\n" + groceries2 + "\n" + health2 + "\n" +
            pollution2 + "\n" + qualityLife2 + "\n" + rent2 + "\n" + safety2 + "\n");

            params = [
                [city + " Crime Index", crime],
                [city2 + " Crime Index", crime2],

                [city + " Groceries Index", groceries],
                [city2 + " Groceries Index", groceries2],

                [city + " Health Index", health],
                [city2 + " Health Index", health2],

                [city + " Pollution Index", pollution],
                [city2 + " Pollution Index", pollution2],

                [city + " Quality of Life Index", qualityLife],
                [city2 + " Quality of Life Index", qualityLife2],

                [city + " Rent Index", rent],
                [city2 + " Rent Index", rent2],

                [city + " Safety Index", safety],
                [city2 + " Safety Index", safety2]
            ];


            for (var i = 0; i < params.length; i++) {
            objCreate(params[i][0], params[i][1]);
            };




            $("svg").remove();


                                var w = 800;
                                var h = 500;
                                var margin = {
                                    top: 58,
                                    bottom: 180,
                                    left: 80,
                                    right: 40
                                };
                                var width = w - margin.left - margin.right;
                                var height = h - margin.top - margin.bottom;

                                var x = d3.scale.ordinal()
                                    .domain(data.map(function(entry) {
                                        return entry.key;
                                    }))
                                    .rangeBands([0, width]);
                                var y = d3.scale.linear()
                                    .domain([0, d3.max(data, function(d) {
                                        return d.value;
                                    })])
                                    .range([height, 0]);
                                var ordinalColorScale = d3.scale.category20();
                                var xAxis = d3.svg.axis()
                                    .scale(x)
                                    .orient("bottom");
                                var yAxis = d3.svg.axis()
                                    .scale(y)
                                    .orient("left");
                                var yGridlines = d3.svg.axis()
                                    .scale(y)
                                    .tickSize(-width, 0, 0)
                                    .tickFormat("")
                                    .orient("left");
                                var svg = d3.select("#city-div").append("svg")
                                    .attr("id", "chart")
                                    .attr("width", w)
                                    .attr("height", h);
                                var chart = svg.append("g")
                                    .classed("display", true)
                                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                                function plot(params) {
                                    this.append("g")
                                        .call(params.gridlines)
                                        .classed("gridline", true)
                                        .attr("transform", "translate(0,0)")
                                    this.selectAll(".bar")
                                        .data(params.data)
                                        .enter()
                                        .append("rect")
                                        .classed("bar", true)
                                        .attr("x", function(d, i) {
                                            return x(d.key);
                                        })
                                        .attr("y", function(d, i) {
                                            return y(d.value);
                                        })
                                        .attr("height", function(d, i) {
                                            return height - y(d.value);
                                        })
                                        .attr("width", function(d) {
                                            return x.rangeBand();
                                        })
                                        .style("fill", function(d, i) {
                                            return ordinalColorScale(i);
                                        });
                                    this.selectAll(".bar-label")
                                        .data(params.data)
                                        .enter()
                                        .append("text")
                                        .classed("bar-label", true)
                                        .attr("x", function(d, i) {
                                            return x(d.key) + (x.rangeBand() / 2)
                                        })
                                        .attr("dx", 0)
                                        .attr("y", function(d, i) {
                                            return y(d.value);
                                        })
                                        .attr("dy", -6)
                                        .text(function(d) {
                                            return d.value;
                                        })
                                    this.append("g")
                                        .classed("x axis", true)
                                        .attr("transform", "translate(" + 0 + "," + height + ")")
                                        .call(params.axis.x)
                                        .selectAll("text")
                                        .style("text-anchor", "end")
                                        .attr("dx", -8)
                                        .attr("dy", 8)
                                        .attr("transform", "translate(0,0) rotate(-45)");

                                    this.append("g")
                                        .classed("y axis", true)
                                        .attr("transform", "translate(0,0)")
                                        .call(params.axis.y);

                                    this.select(".y.axis")
                                        .append("text")
                                        .attr("x", 0)
                                        .attr("y", 0)
                                        .style("text-anchor", "middle")
                                        .attr("transform", "translate(-50," + height / 2 + ") rotate(-90)")
                                        .text("Index Rating");

                                    this.select(".x.axis")
                                        .append("text")
                                        .attr("x", 150)
                                        .attr("y", 0)
                                        .style("text-anchor", "middle")
                                        .attr("transform", "translate(" + width / 2 + ",80)")
                                        .text("");
                                }
                                plot.call(chart, {
                                    data: data,
                                    axis: {
                                        x: xAxis,
                                        y: yAxis
                                    },
                                    gridlines: yGridlines
                                });

            })
            })
        };


});
});    



// =======================================================================================================
// SALARY COMPARISON BEGINNGING
// =======================================================================================================
var rpps = [{cityName: "Abilene, TX", indexScore: 91.7},
            {cityName: "Akron, OH", indexScore: 88.8},
            {cityName: "Albany, GA", indexScore: 84},
            {cityName: "Albany, OR", indexScore: 94},
            {cityName: "Albany, NY", indexScore: 99.2},
            {cityName: "Schenectady, NY", indexScore: 99.2},
            {cityName: "Troy, NY", indexScore: 99.2},
            {cityName: "Albuquerque, NM", indexScore: 97.2},
            {cityName: "Alexandria, LA", indexScore: 89},
            {cityName: "Allentown, PA", indexScore: 100.3},
            {cityName: "Bethlehem, PA", indexScore: 100.3},
            {cityName: "Easton, PA", indexScore: 100.3},
            {cityName: "Altoona, PA", indexScore: 90},
            {cityName: "Amarillo, TX", indexScore: 93.1},
            {cityName: "Ames, IA", indexScore: 90.2},
            {cityName: "Anchorage, AK", indexScore: 109.6},
            {cityName: "Ann Arbor, MI", indexScore: 102},
            {cityName: "Anniston, AL", indexScore: 84.6},
            {cityName: "Oxford, AL", indexScore: 84.6},
            {cityName: "Jacksonville, AL", indexScore: 84.6},
            {cityName: "Appleton, WI", indexScore: 92.7},
            {cityName: "Asheville, NC", indexScore: 93.2},
            {cityName: "Athens, GA", indexScore: 92},
            {cityName: "Atlanta, GA", indexScore: 95.6},
            {cityName: "Sandy Springs, GA", indexScore: 95.6},
            {cityName: "Roswell, GA", indexScore: 95.6},
            {cityName: "Atlantic City, NJ", indexScore: 107},
            {cityName: "Hammonton, NJ", indexScore: 107},
            {cityName: "Auburn, AL", indexScore: 85.8},
            {cityName: "Opelika, AL", indexScore: 85.8},
            {cityName: "Augusta, GA", indexScore: 89.3},
            {cityName: "Augusta, SC", indexScore: 89.3},
            {cityName: "Austin, TX", indexScore: 99},
            {cityName: "Round Rock, TX", indexScore: 99},
            {cityName: "Bakersfield, CA", indexScore: 97.8},
            {cityName: "Baltimore, MD", indexScore: 108},
            {cityName: "Columbia, MD", indexScore: 108},
            {cityName: "Towson, MD", indexScore: 108},
            {cityName: "Bangor, ME", indexScore: 95.9},
            {cityName: "Barnstable Town, MA", indexScore: 101.9},
            {cityName: "Baton Rouge, LA", indexScore: 93.3},
            {cityName: "Battle Creek, MI", indexScore: 91.6},
            {cityName: "Bay City, MI", indexScore: 90.2},
            {cityName: "Beaumont, TX", indexScore: 90.3},
            {cityName: "Port Arthur, TX", indexScore: 90.3},
            {cityName: "Beckley, WV", indexScore: 79.7},
            {cityName: "Bellingham, WA", indexScore: 100.1},
            {cityName: "Bend, OR", indexScore: 95.8},
            {cityName: "Redmond, OR", indexScore: 95.8},
            {cityName: "Billings, MT", indexScore: 97.7},
            {cityName: "Binghamton, NY", indexScore: 95},
            {cityName: "Birmingham, AL", indexScore: 89.9},
            {cityName: "Hoover, AL", indexScore: 89.9},
            {cityName: "Bismarck, ND", indexScore: 94},
            {cityName: "Blacksburg, VA", indexScore: 88.2},
            {cityName: "Christiansburg, VA", indexScore: 88.2},
            {cityName: "Radford, VA", indexScore: 88.2},
            {cityName: "Bloomington, IL", indexScore: 94.1},
            {cityName: "Bloomington, IN", indexScore: 94.9},
            {cityName: "Bloomsburg, PA", indexScore: 93},
            {cityName: "Berwick, PA", indexScore: 93},
            {cityName: "Boise City, ID", indexScore: 95.1},
            {cityName: "Boston, MA", indexScore: 110.3},
            {cityName: "Cambridge, MA", indexScore: 110.3},
            {cityName: "Newton, MA", indexScore: 110.3},
            {cityName: "Newton, NH", indexScore: 110.3},
            {cityName: "Boulder, CO", indexScore: 109.1},
            {cityName: "Bowling Green, KY", indexScore: 85.8},
            {cityName: "Bremerton, WA", indexScore: 105},
            {cityName: "Silverdale, WA", indexScore: 105},
            {cityName: "Bridgeport, CT", indexScore: 120.4},
            {cityName: "Stamford, CT", indexScore: 120.4},
            {cityName: "Norwalk, CT", indexScore: 120.4},
            {cityName: "Brownsville, TX", indexScore: 85},
            {cityName: "Harlingen, TX", indexScore: 85},
            {cityName: "Brunswick, GA", indexScore: 86},
            {cityName: "Buffalo, NY", indexScore: 93.8},
            {cityName: "Cheektowaga, NY", indexScore: 93.8},
            {cityName: "Niagara Falls, NY", indexScore: 93.8},
            {cityName: "Burlington, NC", indexScore: 90.5},
            {cityName: "Burlington, VT", indexScore: 102.7},
            {cityName: "South Burlington, VT", indexScore: 102.7},
            {cityName: "California, MD", indexScore: 98.2},
            {cityName: "Lexington Park, MD", indexScore: 98.2},
            {cityName: "Canton, OH", indexScore: 89.3},
            {cityName: "Massillon, OH", indexScore: 89.3},
            {cityName: "Cape Coral, FL", indexScore: 95.1},
            {cityName: "Fort Myers, FL", indexScore: 95.1},
            {cityName: "Cape Girardeau, MO", indexScore: 83.5},
            {cityName: "Cape Girardeau, IL", indexScore: 83.5},
            {cityName: "Carbondale, IL", indexScore: 84},
            {cityName: "Marion, IL", indexScore: 84},
            {cityName: "Carson City, NV", indexScore: 95.9},
            {cityName: "Casper, WY", indexScore: 97.9},
            {cityName: "Cedar Rapids, IA", indexScore: 90.6},
            {cityName: "Chambersburg, PA", indexScore: 94.1},
            {cityName: "Waynesboro, PA", indexScore: 94.1},
            {cityName: "Champaign, IL", indexScore: 93.4},
            {cityName: "Urbana, IL", indexScore: 93.4},
            {cityName: "Charleston, WV", indexScore: 89},
            {cityName: "Charleston, SC", indexScore: 96.3},
            {cityName: "North Charleston, SC", indexScore: 96.3},
            {cityName: "Charlotte, NC", indexScore: 93.6},
            {cityName: "Concord, NC", indexScore: 93.6},
            {cityName: "Gastonia, NC", indexScore: 93.6},
            {cityName: "Gastonia, SC", indexScore: 93.6},
            {cityName: "Charlottesville, VA", indexScore: 97.8},
            {cityName: "Chattanooga, TN", indexScore: 90.6},
            {cityName: "Chattanooga, GA", indexScore: 90.6},
            {cityName: "Cheyenne, WY", indexScore: 97.6},
            {cityName: "Chicago, IL", indexScore: 106},
            {cityName: "Naperville, IL", indexScore: 106},
            {cityName: "Elgin, IL", indexScore: 106},
            {cityName: "Chico, CA", indexScore: 100},
            {cityName: "Cincinnati, OH", indexScore: 89.8},
            {cityName: "Cincinnati, KY", indexScore: 89.8},
            {cityName: "Cincinnati, IN", indexScore: 89.8},
            {cityName: "Clarksville, TN", indexScore:91.3},
            {cityName: "Clarksville, KY", indexScore: 91.3},
            {cityName: "Cleveland, TN", indexScore: 84.1},
            {cityName: "Cleveland, OH", indexScore: 89.1},
            {cityName: "Elyria, OH", indexScore: 89.1},
            {cityName: "Coeur d'Alene, ID", indexScore: 92.9},
            {cityName: "College Station, TX", indexScore: 93.9},
            {cityName: "Bryan, TX", indexScore: 93.9},
            {cityName: "Colorado Springs, CO", indexScore: 99.7},
            {cityName: "Columbia, MO", indexScore: 93},
            {cityName: "Columbia, SC", indexScore: 91.9},
            {cityName: "Columbus, GA", indexScore: 89.5},
            {cityName: "Columbus, AL", indexScore: 89.5},
            {cityName: "Columbus, IN", indexScore: 87.7},
            {cityName: "Columbus, OH", indexScore: 93.4},
            {cityName: "Corpus Christi, TX", indexScore: 93.5},
            {cityName: "Corvallis, OR", indexScore: 98.6},
            {cityName: "Crestview, FL", indexScore: 95.3},
            {cityName: "Fort Walton Beach, FL", indexScore: 95.3},
            {cityName: "Destin, FL", indexScore: 95.3},
            {cityName: "Cumberland, MD", indexScore: 88.4},
            {cityName: "Cumberland, WV", indexScore: 88.4},
            {cityName: "Dallas, TX", indexScore: 100.4},
            {cityName: "Fort Worth, TX", indexScore: 100.4},
            {cityName: "Arlington, TX", indexScore: 100.4},
            {cityName: "Dalton, GA", indexScore: 83.9},
            {cityName: "Danville, IL", indexScore: 81.1},
            {cityName: "Daphne, AL", indexScore: 92.3},
            {cityName: "Fairhope, AL", indexScore: 92.3},
            {cityName: "Foley, AL", indexScore: 92.3},
            {cityName: "Davenport, IA", indexScore: 91.4},
            {cityName: "Moline, IL", indexScore: 91.4},
            {cityName: "Rock Island, IL", indexScore: 91.4},
            {cityName: "Dayton, OH", indexScore: 90.9},
            {cityName: "Decatur, AL", indexScore: 87.1},
            {cityName: "Decatur, IL", indexScore: 89},
            {cityName: "Deltona, FL", indexScore: 95.7},
            {cityName: "Daytona Beach, FL", indexScore: 95.7},
            {cityName: "Ormond Beach, FL", indexScore: 95.7},
            {cityName: "Denver, CO", indexScore: 104.7},
            {cityName: "Aurora, CO", indexScore: 104.7},
            {cityName: "Lakewood, CO", indexScore: 104.7},
            {cityName: "Des Moines, IA", indexScore: 94.9},
            {cityName: "West Des Moines, IA", indexScore: 94.9},
            {cityName: "Detroit, MI", indexScore: 97.3},
            {cityName: "Warren, MI", indexScore: 97.3},
            {cityName: "Dearborn, MI", indexScore: 97.3},
            {cityName: "Dothan, AL", indexScore: 85.4},
            {cityName: "Dover, DE", indexScore: 94.2},
            {cityName: "Dubuque, IA", indexScore: 92.9},
            {cityName: "Duluth, MN", indexScore: 91.7},
            {cityName: "Durham, NC", indexScore: 95.4},
            {cityName: "Chapel Hill, NC", indexScore: 95.4},
            {cityName: "East Stroudsburg, PA", indexScore: 98.8},
            {cityName: "Eau Claire, WI", indexScore: 92.1},
            {cityName: "El Centro, CA", indexScore: 90.4},
            {cityName: "Elizabethtown, KY", indexScore: 86},
            {cityName: "Fort Knox, KY", indexScore: 86},
            {cityName: "Elkhart, IN", indexScore: 91},
            {cityName: "Goshen, IN", indexScore: 91},
            {cityName: "Elmira, NY", indexScore: 94.5},
            {cityName: "El Paso, TX", indexScore: 90.2},
            {cityName: "Erie, PA", indexScore: 92.5},
            {cityName: "Eugene, OR", indexScore: 98.2},
            {cityName: "Evansville, IN", indexScore: 90.8},
            {cityName: "Evansville, KY", indexScore: 90.8},
            {cityName: "Fairbanks, AK", indexScore: 105.8},
            {cityName: "Fargo, ND", indexScore: 93.5},
            {cityName: "Moorhead, MN", indexScore: 93.5},
            {cityName: "Farmington, NM", indexScore: 91.1},
            {cityName: "Fayetteville, NC", indexScore: 91.5},
            {cityName: "Fayetteville, AR", indexScore: 90.1},
            {cityName: "Springdale, MO", indexScore: 90.1},
            {cityName: "Rogers, AR", indexScore: 90.1},
            {cityName: "Flagstaff, AZ", indexScore: 97.9},
            {cityName: "Flint, MI", indexScore: 92.8},
            {cityName: "Florence, SC", indexScore: 86},
            {cityName: "Florence, AL", indexScore: 84.4},
            {cityName: "Muscle Shoals, AL", indexScore: 84.4},
            {cityName: "Fond du Lac, WI", indexScore: 87.3},
            {cityName: "Fort Collins, CO", indexScore: 101.4},
            {cityName: "Fort Smith, AR", indexScore: 86.2},
            {cityName: "Fort Smith, OK", indexScore: 86.2},
            {cityName: "Fort Wayne, IN", indexScore: 90.7},
            {cityName: "Fresno, CA", indexScore: 97.3},
            {cityName: "Gadsden, AL", indexScore: 84.9},
            {cityName: "Gainesville, FL", indexScore: 95.2},
            {cityName: "Gainesville, GA", indexScore: 89},
            {cityName: "Gettysburg, PA", indexScore: 95.6},
            {cityName: "Glens Falls, NY", indexScore: 96.8},
            {cityName: "Goldsboro, NC", indexScore: 88.1},
            {cityName: "Grand Forks, ND", indexScore: 93.8},
            {cityName: "Grand Forks, MN", indexScore: 93.8},
            {cityName: "Grand Island, NE", indexScore: 85.3},
            {cityName: "Grand Junction, CO", indexScore: 94.4},
            {cityName: "Grand Rapids, MI", indexScore: 93.7},
            {cityName: "Wyoming, MI", indexScore: 93.7},
            {cityName: "Grants Pass, OR", indexScore: 93.7},
            {cityName: "Great Falls, MT", indexScore: 93.8},
            {cityName: "Greeley, CO", indexScore: 98.9},
            {cityName: "Green Bay, WI", indexScore: 92},
            {cityName: "Greensboro, NC", indexScore: 90.3},
            {cityName: "High Point, NC", indexScore: 90.3},
            {cityName: "Greenville, NC", indexScore: 88.9},
            {cityName: "Greenville, SC", indexScore: 90.2},
            {cityName: "Anderson, SC", indexScore: 90.2},
            {cityName: "Mauldin, SC", indexScore: 90.2},
            {cityName: "Gulfport, MS", indexScore: 90.2},
            {cityName: "Biloxi, MS", indexScore: 90.2},
            {cityName: "Pascagoula, MS", indexScore: 90.2},
            {cityName: "Hagerstown, MD", indexScore: 101.9},
            {cityName: "Martinsburg, WV", indexScore: 101.9},
            {cityName: "Hammond, LA", indexScore: 85.3},
            {cityName: "Hanford, CA", indexScore: 92.8},
            {cityName: "Corcoran, CA", indexScore: 92.8},
            {cityName: "Harrisburg, PA", indexScore: 96},
            {cityName: "Carlisle, PA", indexScore: 96},
            {cityName: "Harrisonburg, VA", indexScore: 91.4},
            {cityName: "Hartford, CT", indexScore: 100.7},
            {cityName: "West Hartford, CT", indexScore: 100.7},
            {cityName: "East Hartford, CT", indexScore: 100.7},
            {cityName: "Hattiesburg, MS", indexScore: 84.2},
            {cityName: "Hickory, NC", indexScore: 88.5},
            {cityName: "Lenoir, NC", indexScore: 88.5},
            {cityName: "Morganton, NC", indexScore: 88.5},
            {cityName: "Hilton Head Island, SC", indexScore: 93.9},
            {cityName: "Bluffton, SC", indexScore: 93.9},
            {cityName: "Beaufort, SC", indexScore: 93.9},
            {cityName: "Hinesville, GA", indexScore: 91.5},
            {cityName: "Homosassa Springs, FL", indexScore: 88.5},
            {cityName: "Hot Springs, AR", indexScore: 85.2},
            {cityName: "Houma, LA", indexScore: 93},
            {cityName: "Thibodaux, LA", indexScore: 93},
            {cityName: "Houston, TX", indexScore: 100.3},
            {cityName: "The Woodlands, TX", indexScore: 100.3},
            {cityName: "Sugar Land, TX", indexScore: 100.3},
            {cityName: "Huntington, WV", indexScore: 86.8},
            {cityName: "Ashland, KY", indexScore: 86.8},
            {cityName: "Ironton, OH", indexScore: 86.8},
            {cityName: "Huntsville, AL", indexScore: 90.7},
            {cityName: "Idaho Falls, ID", indexScore: 88.8},
            {cityName: "Indianapolis, IN", indexScore: 93.4},
            {cityName: "Carmel, IN", indexScore: 93.4},
            {cityName: "Anderson, IN", indexScore: 93.4},
            {cityName: "Iowa City, IA", indexScore: 96.3},
            {cityName: "Ithaca, NY", indexScore: 104.6},
            {cityName: "Jackson, MI", indexScore: 90.6},
            {cityName: "Jackson, MS", indexScore: 90.6},
            {cityName: "Jackson, TN", indexScore: 83.1},
            {cityName: "Jacksonville, FL", indexScore: 96},
            {cityName: "Jacksonville, NC", indexScore: 94.2},
            {cityName: "Janesville, WI", indexScore: 92.5},
            {cityName: "Beloit, WI", indexScore: 92.5},
            {cityName: "Jefferson City, MO", indexScore: 82.2},
            {cityName: "Johnson City, TN", indexScore: 88.6},
            {cityName: "Johnstown, PA", indexScore: 85.5},
            {cityName: "Jonesboro, AR", indexScore: 82},
            {cityName: "Joplin, MO", indexScore: 88.1},
            {cityName: "Kahului, HI", indexScore: 106.2},
            {cityName: "Wailuku, HI", indexScore: 106.2},
            {cityName: "Lahaina, HI", indexScore: 106.2},
            {cityName: "Kalamazoo, MI", indexScore: 92.5},
            {cityName: "Portage, MI", indexScore: 92.5},
            {cityName: "Kankakee, IL", indexScore: 99},
            {cityName: "Kansas City, MO", indexScore: 93.4},
            {cityName: "Kansas City, KS", indexScore: 93.4},
            {cityName: "Kennewick, WA", indexScore: 98.1},
            {cityName: "Richland, WA", indexScore: 98.1},
            {cityName: "Killeen, TX", indexScore: 92.6},
            {cityName: "Temple, TX", indexScore: 92.6},
            {cityName: "Kingsport-Bristol, TN", indexScore: 86.5},
            {cityName: "Bristol, VA", indexScore: 86.5},
            {cityName: "Kingston, NY", indexScore: 103.1},
            {cityName: "Knoxville, TN", indexScore: 90.5},
            {cityName: "Kokomo, IN", indexScore: 87.2},
            {cityName: "La Crosse, WI", indexScore: 93.3},
            {cityName: "Onalaska, WI", indexScore: 93.3},
            {cityName: "Lafayette, LA", indexScore: 89.1},
            {cityName: "Lafayette, IN", indexScore: 93.9},
            {cityName: "West Lafayette, IN", indexScore: 93.9},
            {cityName: "Lake Charles, LA", indexScore: 89.3},
            {cityName: "Lake Havasu City, AZ", indexScore: 93.6},
            {cityName: "Kingman, AZ", indexScore: 93.6},
            {cityName: "Lakeland, FL", indexScore: 93.3},
            {cityName: "Winter Haven, FL", indexScore: 93.3},
            {cityName: "Lancaster, PA", indexScore: 98.4},
            {cityName: "Lansing, MI", indexScore: 93.9},
            {cityName: "East Lansing, MI", indexScore: 93.9},
            {cityName: "Laredo, TX", indexScore: 88.7},
            {cityName: "Las Cruces, NM", indexScore: 92.9},
            {cityName: "Las Vegas, NV", indexScore: 98.7},
            {cityName: "Henderson, NV", indexScore: 98.7},
            {cityName: "Paradise, NV", indexScore: 98.7},
            {cityName: "Lawrence, KS", indexScore: 94.3},
            {cityName: "Lawton, OK", indexScore: 91.1},
            {cityName: "Lebanon, PA", indexScore: 94.9},
            {cityName: "Lewiston, ID", indexScore: 89.9},
            {cityName: "Lewiston, ME", indexScore: 94.7},
            {cityName: "Auburn, ME", indexScore: 94.7},
            {cityName: "Lexington, KY", indexScore: 92.4},
            {cityName: "Fayette, KY", indexScore: 92.4},
            {cityName: "Lima, OH", indexScore: 89.6},
            {cityName: "Lincoln, NE", indexScore: 92.9},
            {cityName: "Little Rock, AR", indexScore: 90.7},
            {cityName: "North Little Rock, AR", indexScore: 90.7},
            {cityName: "Conway, AR", indexScore: 90.7},
            {cityName: "Logan, UT", indexScore: 90},
            {cityName: "Longview, TX", indexScore: 91.8},
            {cityName: "Longview, WA", indexScore: 93.5},
            {cityName: "Los Angeles, CA", indexScore: 117},
            {cityName: "Long Beach, CA", indexScore: 117},
            {cityName: "Anaheim, CA", indexScore: 117},
            {cityName: "Louisville, KY", indexScore: 91.4},
            {cityName: "Lubbock, TX", indexScore: 93.5},
            {cityName: "Lynchburg, VA", indexScore: 90.7},
            {cityName: "Macon, GA", indexScore: 87.5},
            {cityName: "Madera, CA", indexScore: 96.8},
            {cityName: "Madison, WI", indexScore: 97.8},
            {cityName: "Manchester, NH", indexScore: 108.2},
            {cityName: "Nashua, NH", indexScore: 108.2},
            {cityName: "Manhattan, KS", indexScore: 92.9},
            {cityName: "Mankato, MN", indexScore: 89.3},
            {cityName: "North Mankato, MN", indexScore: 89.3},
            {cityName: "Mansfield, OH", indexScore: 87.1},
            {cityName: "McAllen, TX", indexScore: 85.7},
            {cityName: "Edinburg, TX", indexScore: 85.7},
            {cityName: "Mission, TX", indexScore: 85.7},
            {cityName: "Medford, OR", indexScore: 98.2},
            {cityName: "Memphis, TN", indexScore: 91.9},
            {cityName: "Merced, CA", indexScore: 95.5},
            {cityName: "Miami, FL", indexScore: 105.9},
            {cityName: "Fort Lauderdale, FL", indexScore: 105.9},
            {cityName: "West Palm Beach, FL", indexScore: 105.9},
            {cityName: "Michigan City, IN", indexScore: 85.9},
            {cityName: "La Porte, IN", indexScore: 85.9},
            {cityName: "Midland, MI", indexScore: 92.4},
            {cityName: "Midland, TX", indexScore: 99.3},
            {cityName: "Milwaukee, WI", indexScore: 95.9},
            {cityName: "Waukesha, WI", indexScore: 95.9},
            {cityName: "West Allis, WI", indexScore: 95.9},
            {cityName: "Minneapolis, MN", indexScore: 102.6},
            {cityName: "St. Paul, MN", indexScore: 102.6},
            {cityName: "Bloomington, MN", indexScore: 102.6},
            {cityName: "Missoula, MT", indexScore: 95.8},
            {cityName: "Mobile, AL", indexScore: 88.6},
            {cityName: "Modesto, CA", indexScore: 98.7},
            {cityName: "Monroe, LA", indexScore: 86.3},
            {cityName: "Monroe, MI", indexScore: 95.4},
            {cityName: "Montgomery, AL", indexScore: 89.7},
            {cityName: "Morgantown, WV", indexScore: 88.5},
            {cityName: "Morristown, TN", indexScore: 81.9},
            {cityName: "Mount Vernon, WA", indexScore: 97.3},
            {cityName: "Anacortes, WA", indexScore: 97.3},
            {cityName: "Muncie, IN", indexScore: 89.6},
            {cityName: "Muskegon, MI", indexScore: 88.7},
            {cityName: "Myrtle Beach, SC", indexScore: 91.1},
            {cityName: "Conway, SC", indexScore: 91.1},
            {cityName: "North Myrtle Beach, SC", indexScore: 91.1},
            {cityName: "Napa, CA", indexScore: 118.9},
            {cityName: "Naples, FL", indexScore: 99.6},
            {cityName: "Immokalee, FL", indexScore: 99.6},
            {cityName: "Marco Island, FL", indexScore: 99.6},
            {cityName: "Nashville, TN", indexScore: 93.9},
            {cityName: "Davidson, TN", indexScore: 93.9},
            {cityName: "Murfreesboro, TN", indexScore: 93.9},
            {cityName: "Franklin, TN", indexScore: 93.9},
            {cityName: "New Bern, NC", indexScore: 87.1},
            {cityName: "New Haven, CT", indexScore: 112.9},
            {cityName: "Milford, CT", indexScore: 112.9},
            {cityName: "New Orleans, LA", indexScore: 96},
            {cityName: "Metairie, LA", indexScore: 96},
            {cityName: "New York, NY", indexScore: 122.3},
            {cityName: "Newark, NJ", indexScore: 122.3},
            {cityName: "Jersey City, NJ", indexScore: 122.3},
            {cityName: "Niles, MI", indexScore: 89.2},
            {cityName: "Benton Harbor, MI", indexScore: 89.2},
            {cityName: "North Port, FL", indexScore: 98.7},
            {cityName: "Sarasota, FL", indexScore: 98.7},
            {cityName: "Bradenton, FL", indexScore: 98.7},
            {cityName: "Norwich, CT", indexScore: 100.5},
            {cityName: "New London, CT", indexScore: 100.5},
            {cityName: "Ocala, FL", indexScore: 90.8},
            {cityName: "Ocean City, NJ", indexScore: 107.2},
            {cityName: "Odessa, TX", indexScore: 96.6},
            {cityName: "Ogden, UT", indexScore: 95.9},
            {cityName: "Clearfield, UT", indexScore: 95.9},
            {cityName: "Oklahoma City, OK", indexScore: 92.4},
            {cityName: "Olympia, WA", indexScore: 105.4},
            {cityName: "Tumwater, WA", indexScore: 105.4},
            {cityName: "Omaha, NE", indexScore: 94.1},
            {cityName: "Council Bluffs, IA", indexScore: 94.1},
            {cityName: "Orlando, FL", indexScore: 97.8},
            {cityName: "Kissimmee, FL", indexScore: 97.8},
            {cityName: "Sanford, FL", indexScore: 97.8},
            {cityName: "Oshkosh, WI", indexScore: 91.8},
            {cityName: "Neenah, WI", indexScore: 91.8},
            {cityName: "Owensboro, KY", indexScore: 87.6},
            {cityName: "Oxnard, CA", indexScore: 114.7},
            {cityName: "Thousand Oaks, CA", indexScore: 114.7},
            {cityName: "Ventura, CA", indexScore: 114.7},
            {cityName: "Palm Bay, FL", indexScore: 95.2},
            {cityName: "Melbourne, FL", indexScore: 95.2},
            {cityName: "Titusville, FL", indexScore: 95.2},
            {cityName: "Panama City, FL", indexScore: 94.9},
            {cityName: "Parkersburg, WV", indexScore: 85.5},
            {cityName: "Vienna, WV", indexScore: 85.5},
            {cityName: "Pensacola, FL", indexScore: 93.5},
            {cityName: "Ferry Pass, FL", indexScore: 93.5},
            {cityName: "Brent, FL", indexScore: 93.5},
            {cityName: "Peoria, IL", indexScore: 91.8},
            {cityName: "Philadelphia, PA", indexScore: 107.2},
            {cityName: "Camden, NJ", indexScore: 107.2},
            {cityName: "Wilmington, DE", indexScore: 107.2},
            {cityName: "Phoenix, AZ", indexScore: 97.7},
            {cityName: "Mesa, AZ", indexScore: 97.7},
            {cityName: "Scottsdale, AZ", indexScore: 97.7},
            {cityName: "Pine Bluff, AR", indexScore: 84.6},
            {cityName: "Pittsburgh, PA", indexScore: 94.8},
            {cityName: "Pittsfield, MA", indexScore: 95.4},
            {cityName: "Pocatello, ID", indexScore: 89.7},
            {cityName: "Portland, ME", indexScore: 100.7},
            {cityName: "South Portland, ME", indexScore: 100.7},
            {cityName: "Portland, OR", indexScore: 101.3},
            {cityName: "Vancouver, WA", indexScore: 101.3},
            {cityName: "Hillsboro, OR", indexScore: 101.3},
            {cityName: "Port St. Lucie, FL", indexScore: 95.8},
            {cityName: "Prescott, AZ", indexScore: 95.4},
            {cityName: "Providence, RI", indexScore: 99},
            {cityName: "Warwick, MA", indexScore: 99},
            {cityName: "Provo, UT", indexScore: 97.3},
            {cityName: "Orem, UT", indexScore: 97.3},
            {cityName: "Pueblo, CO", indexScore: 92.3},
            {cityName: "Punta Gorda, FL", indexScore: 94.8},
            {cityName: "Racine, WI", indexScore: 94},
            {cityName: "Raleigh, NC", indexScore: 95.9},
            {cityName: "Rapid City, SD", indexScore: 92.3},
            {cityName: "Reading, PA", indexScore: 96},
            {cityName: "Redding, CA", indexScore: 98.2},
            {cityName: "Reno, NV", indexScore: 99.1},
            {cityName: "Richmond, VA", indexScore: 96.2},
            {cityName: "Riverside, CA", indexScore: 105.9},
            {cityName: "San Bernardino, CA", indexScore: 105.9},
            {cityName: "Ontario, CA", indexScore: 105.9},
            {cityName: "Roanoke, VA", indexScore: 91.4},
            {cityName: "Rochester, MN", indexScore: 93.7},
            {cityName: "Rochester, NY", indexScore: 97.4},
            {cityName: "Rockford, IL", indexScore: 91.3},
            {cityName: "Rocky Mount, NC", indexScore: 86.3},
            {cityName: "Rome, GA", indexScore: 80.7},
            {cityName: "Sacramento, CA", indexScore: 102.5},
            {cityName: "Roseville, CA", indexScore: 102.5},
            {cityName: "Arden, CA", indexScore: 102.5},
            {cityName: "Arcade, CA", indexScore: 102.5},
            {cityName: "Saginaw, MI", indexScore: 89.6},
            {cityName: "St. Cloud, MN", indexScore: 93.5},
            {cityName: "St. George, UT", indexScore: 93.8},
            {cityName: "St. Joseph, MO", indexScore: 88.9},
            {cityName: "St. Louis, MO", indexScore: 90.5},
            {cityName: "Salem, OR", indexScore: 95.4},
            {cityName: "Salinas, CA", indexScore: 107.9},
            {cityName: "Salisbury, MD", indexScore: 89.7},
            {cityName: "Salt Lake City, UT", indexScore: 99.7},
            {cityName: "San Angelo, TX", indexScore: 93.5},
            {cityName: "San Antonio, TX", indexScore: 94.4},
            {cityName: "New Braunfels, TX", indexScore: 94.4},
            {cityName: "San Diego, CA", indexScore: 115.9},
            {cityName: "Carlsbad, CA", indexScore: 115.9},
            {cityName: "San Francisco, CA", indexScore: 121.3},
            {cityName: "Oakland, CA", indexScore: 121.3},
            {cityName: "Hayward, CA", indexScore: 121.3},
            {cityName: "San Jose, CA", indexScore: 122.9},
            {cityName: "Sunnyvale, CA", indexScore: 122.9},
            {cityName: "Santa Clara, CA", indexScore: 122.9},
            {cityName: "San Luis Obispo, CA", indexScore: 107},
            {cityName: "Paso Robles, CA", indexScore: 107},
            {cityName: "Arroyo Grande, CA", indexScore: 107},
            {cityName: "Santa Cruz, CA", indexScore: 121.8},
            {cityName: "Watsonville, CA", indexScore: 121.8},
            {cityName: "Santa Fe, NM", indexScore: 99.7},
            {cityName: "Santa Maria, CA", indexScore: 108.8},
            {cityName: "Santa Barbara, CA", indexScore: 108.8},
            {cityName: "Santa Rosa, CA", indexScore: 118.3},
            {cityName: "Savannah, GA", indexScore: 94.3},
            {cityName: "Scranton, PA", indexScore: 91.8},
            {cityName: "Wilkes-Barre, PA", indexScore: 91.8},
            {cityName: "Hazleton, PA", indexScore: 91.8},
            {cityName: "Seattle, WA", indexScore: 107.8},
            {cityName: "Tacoma, WA", indexScore: 107.8},
            {cityName: "Bellevue, WA", indexScore: 107.8},
            {cityName: "Sebastian, FL", indexScore: 90.9},
            {cityName: "Vero Beach, FL", indexScore: 90.9},
            {cityName: "Sebring, FL", indexScore: 84.9},
            {cityName: "Sheboygan, WI", indexScore: 91.7},
            {cityName: "Sherman, TX", indexScore: 91.3},
            {cityName: "Denison, TX", indexScore: 91.3},
            {cityName: "Shreveport, LA", indexScore: 90.9},
            {cityName: "Bossier City, LA", indexScore: 90.9},
            {cityName: "Sierra Vista, AZ", indexScore: 90.7},
            {cityName: "Douglas, AZ", indexScore: 90.7},
            {cityName: "Sioux City, IA", indexScore: 89},
            {cityName: "Sioux Falls, SD", indexScore: 92.8},
            {cityName: "South Bend, IN", indexScore: 90.2},
            {cityName: "Mishawaka, IN", indexScore: 90.2},
            {cityName: "Spartanburg, SC", indexScore: 87.8},
            {cityName: "Spokane, WA", indexScore: 95.6},
            {cityName: "Spokane Valley, WA", indexScore: 95.6},
            {cityName: "Springfield, IL", indexScore: 92.3},
            {cityName: "Springfield, MA", indexScore: 96.8},
            {cityName: "Springfield, MO", indexScore: 88.5},
            {cityName: "Springfield, OH", indexScore: 88.5},
            {cityName: "State College, PA", indexScore: 102.4},
            {cityName: "Staunton, VA", indexScore: 88.8},
            {cityName: "Waynesboro, VA", indexScore: 88.8},
            {cityName: "Stockton, CA", indexScore: 100.4},
            {cityName: "Lodi, CA", indexScore: 100.4},
            {cityName: "Sumter, SC", indexScore: 87.6},
            {cityName: "Syracuse, NY", indexScore: 95.5},
            {cityName: "Tallahassee, FL", indexScore: 94.3},
            {cityName: "Tampa, FL", indexScore: 100.1},
            {cityName: "St. Petersburg, FL", indexScore: 100.1},
            {cityName: "Clearwater, FL", indexScore: 100.1},
            {cityName: "Terre Haute, IN", indexScore: 87.9}, 
            {cityName: "Texarkana, TX", indexScore: 87.6},
            {cityName: "Texarkana, AR", indexScore: 87.6},
            {cityName: "The Villages, FL", indexScore: 90.2},
            {cityName: "Toledo, OH", indexScore: 89.6},
            {cityName: "Topeka, KS", indexScore: 89.8},
            {cityName: "Trenton, NJ", indexScore: 112.5},
            {cityName: "Tucson, AZ", indexScore: 97.1},
            {cityName: "Tulsa, OK", indexScore: 91.3},
            {cityName: "Tuscaloosa, AL", indexScore: 88.3},
            {cityName: "Tyler, TX", indexScore: 94},
            {cityName: "Honolulu, HI", indexScore: 123.5},
            {cityName: "Utica, NY", indexScore: 93},
            {cityName: "Rome, NY", indexScore: 93},
            {cityName: "Valdosta, GA", indexScore: 82.2},
            {cityName: "Vallejo, CA", indexScore: 115.4},
            {cityName: "Fairfield, CA", indexScore: 115.4},
            {cityName: "Victoria, TX", indexScore: 93.7},
            {cityName: "Vineland, NJ", indexScore: 102.2},
            {cityName: "Bridgeton, NJ", indexScore: 102.2},
            {cityName: "Virginia Beach, VA", indexScore: 98.4},
            {cityName: "Norfolk, VA", indexScore: 98.4},
            {cityName: "Newport News, VA", indexScore: 98.4},
            {cityName: "Visalia CA", indexScore: 95.4},
            {cityName: "Porterville, CA", indexScore: 95.4},
            {cityName: "Waco, TX", indexScore: 91.5},
            {cityName: "Walla Walla, WA", indexScore: 92.6},
            {cityName: "Warner Robins, GA", indexScore: 89.9},
            {cityName: "Washington, DC", indexScore: 119.4},
            {cityName: "Arlington, VA", indexScore: 119.4},
            {cityName: "Alexandria, VA", indexScore: 119.4},
            {cityName: "Waterloo, IA", indexScore: 91.2},
            {cityName: "Cedar Falls, IA", indexScore: 91.2},
            {cityName: "Watertown, NY", indexScore: 98.1},
            {cityName: "Fort Drum, NY", indexScore: 98.1},
            {cityName: "Wausau, WI", indexScore: 91.8},
            {cityName: "Weirton, WV", indexScore: 87.1},
            {cityName: "Steubenville, OH", indexScore: 87.1},
            {cityName: "Wenatchee, WA", indexScore: 95},
            {cityName: "Wheeling, WV", indexScore: 86.7},
            {cityName: "Wichita, KS", indexScore: 91},
            {cityName: "Wichita Falls, TX", indexScore: 90.9},
            {cityName: "Williamsport, PA", indexScore: 93.6},
            {cityName: "Wilmington, NC", indexScore: 94.9},
            {cityName: "Winchester, VA", indexScore: 91.3},
            {cityName: "Winston-Salem, NC", indexScore: 90},
            {cityName: "Worcester, MA", indexScore: 103.9},
            {cityName: "Yakima, WA", indexScore: 95},
            {cityName: "York, PA", indexScore: 96.1},
            {cityName: "Hanover, PA", indexScore: 96.1},
            {cityName: "Youngstown, OH", indexScore: 88.8},
            {cityName: "Warren, OH", indexScore: 88.8},
            {cityName: "Boardman, OH", indexScore: 88.8},
            {cityName: "Yuba City, CA", indexScore: 98.5},
            {cityName: "Yuma, AZ", indexScore: 93.3}];

    var rppsScore = [];
    var rppsScore2 = [];

    var sliderValue;

    var citySalary = [];
    var citySalary2 = [];

    $("#salaries").on("click", function(event) {
        $('#city-div').html('');
        $('#city-div2').html('');
        $('#city-div').append("<h3 id='salcomparison'>Compare Salaries Between Cities</h3><br />");
        $('#city-div').append("<div class='range-slider' style='opacity: 1;'><input class='range-slider__range' type='range' value='0' min='0' max='500' style='opacity: 1; width: 805px;'>$<span class='range-slider__value' style='opacity: 1;'></span><span>K</span></div>");
        $('#city-div').append("<div id='cityName' style='opacity: 1; padding: 10px 10px 10px 10px; margin-bottom: 0px; margin-right: 95px; margin-left: 0px; display: inline-block;'><h4>" + citySelection + ": </h4><h4 id='citySalary' style='opacity: 1;'></h4></div>");
        $('#city-div').append("<div id='city2Name' style='opacity: 1; padding: 10px 10px 10px 10px; margin-bottom: 0px; margin-left: 125px; display: inline-block;'><h4>" + citySelection2 + ": </h4><h4 id='citySalary2' style='opacity: 1;'></h4></div>");


        var rangeSlider = function() {
        var slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');

        slider.each(function() {

          value.each(function() {
            var value = $(this).prev().attr('value');
            $(this).html(value);
          });

          range.on('input', function() {
            $(this).next(value).html(this.value);
            sliderValue = parseInt(this.value);
            console.log(sliderValue);
            var index = rppsScore / 100;
            var index2 = rppsScore2 / 100;
            console.log(index);
            console.log(index2);
            var salaryPreXK = sliderValue / index;
            var salaryPreXK2 = sliderValue / index2;
            console.log(salaryPreXK);
            console.log(salaryPreXK2);
            var citySelectionSalary = salaryPreXK * 1000;
            var citySelectionSalary2 = salaryPreXK2 * 1000;
            console.log(citySelectionSalary);
            console.log(citySelectionSalary2);
            $('#citySalary').empty();
            $('#citySalary2').empty();
            $('#citySalary').append(citySelectionSalary.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#citySalary2').append(citySelectionSalary2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $('#citySalary').prepend('$');
            $('#citySalary2').prepend('$');
          });
        });
      };
      rangeSlider();

        console.log(citySelection[0]);
        console.log(citySelection2[0]);

        for (var i = 0; i < rpps.length; i++) {
            if (citySelection[0] === rpps[i].cityName) {
                rppsScore.push(rpps[i].indexScore);
            } if (citySelection2[0] === rpps[i].cityName) {
                rppsScore2.push(rpps[i].indexScore);
            }
        };

        console.log(rppsScore[0]);
        console.log(rppsScore2[0]);
        
    });
// =======================================================================================================
// SALARY COMPARISON END
// =======================================================================================================


// =======================================================================================================
// INDEED API AJAX CALL BEGINNING
// =======================================================================================================
  $("#submit").on("click", function(event) {

      event.preventDefault();

      var jobTitle = $("#jobTitle").val().trim();
      var jobTitle2 = $("#jobTitle2").val().trim();
      var jobCity = $("#city-input").val().trim();
      var jobCity2 = $("#city-input2").val().trim();
      // var jobState = $("#jobState").val().trim();
      // var jobState2 = $("#jobState2").val().trim();
      var jobType = $("#jobType").val().trim();
      var jobType2 = $("#jobType2").val().trim();
      var jobSite = $("#jobSite").val().trim();
      var jobSite2 = $("#jobSite2").val().trim();
      var jobSalary = $("#jobSalary").val().trim();
      var jobSalary2 = $("#jobSalary2").val().trim();
      var jobDistance = $("#jobDistance").val().trim();
      var jobDistance2 = $("#jobDistance2").val().trim();

      console.log(jobCity);
      console.log(jobCity2);
      var queryURL = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q="+jobTitle+"&l="+jobCity+"&sort=&radius="+jobDistance+"&st="+jobSite+"&jt="+jobType+"&salary="+jobSalary+"&start=&limit=&fromage=20&filter=&latlong=1&co=us&chnl=&userip="+ userIp[0] +"&useragent=MMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2&format=json";
      var queryURL2 = "http://api.indeed.com/ads/apisearch?publisher=6697079064168197&q="+jobTitle2+"&l="+jobCity2+"&sort=&radius="+jobDistance2+"&st="+jobSite2+"&jt="+jobType2+"&salary="+jobSalary2+"&start=&limit=&fromage=20&filter=&latlong=1&co=us&chnl=&userip="+ userIp[0] +"&useragent=MMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&v=2&format=json";
  
      $.ajax({
              url: queryURL,
              method: "GET"
          })
       
          .done(function(response) {
              
              var res = JSON.stringify(response, null, 2);
              $('#search-results').append("<ul id='searchResultsList'></ul>");
              console.log("FIRST AJAX CALL RESULTS - BEGINNING");
              for (var i = 0; i < res.length; i++) {
                $("#searchResultsList").append("<li>" + "<b><h4>" + response.results[i].jobtitle + "</h4></b>"
                 + "<h5>" + response.results[i].company + "</h5>" + 
                  "<h5>" + response.results[i].formattedLocation + "</h5>" + "<h5>" + "<a target='_blank' href=" + response.results[i].url +">More Info</a>" + "</h5>"
                 + "</li>" + "<br>");
                console.log(response.results[i].jobtitle);
                console.log(response.results[i].company);
                console.log(response.results[i].formattedLocation);
                console.log(response.results[i].snippet);
                console.log(response.results[i].url);
              };
              console.log("FIRST AJAX CALL RESULTS - END");
              
          });

      $.ajax({
              url: queryURL2,
              method: "GET"
          })
       
          .done(function(response) {
              
              var res = JSON.stringify(response, null, 2);
              $('#search-results2').append("<ul id='searchResultsList2'></ul>");
              console.log("SECOND AJAX CALL RESULTS - BEGINNING");
              for (var i = 0; i < res.length; i++) {
                $("#searchResultsList2").append("<li>" + "<b><h4>" + response.results[i].jobtitle + "</h4></b>"
                 + "<h5>" + response.results[i].company + "</h5>" + 
                  "<h5>" + response.results[i].formattedLocation + "</h5>" + "<h5>" + "<a target='_blank' href=" + response.results[i].url +">More Info</a>" + "</h5>"
                 + "</li>" + "<br>");
                console.log(response.results[i].jobtitle);
                console.log(response.results[i].company);
                console.log(response.results[i].formattedLocation);
                console.log(response.results[i].snippet);
                console.log(response.results[i].url);
              };
              console.log("SECOND AJAX CALL RESULTS - END");
                      
          });
  });
// =======================================================================================================
//INDEED API AJAX CALL END
// =======================================================================================================

$('#clearbutton').click(function() {
  window.location.reload();
});

});
};