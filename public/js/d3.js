$( document ).ready(function() {
    console.log( "ready!" );
   

    console.log( "ready!" );
    $("#general").on('click', function(){



    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();

    if(city == "" && city2 == ""){
        alert("Please enter two cities to compare")
        return;
    };
    console.log(city);
    console.log(city2);
	getCityNumbers(city,city2);



    function getCityNumbers(city, city2) {
        function objCreate(keyName, value) {
            if(value == undefined){
                
            $("svg").remove();
                         $('#city-div').html('');
                                      $('#city-div2').html('');
                alert("Due to the limits of the Numbeo API, one of these cities that you've chosen has no data associated with it. Please reselect.")
            }
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
                            console.log(response)
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
                         $('#city-div').html('');
                                      $('#city-div2').html('');


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


$("#rent").on('click', function(){

    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();
         if(city == "" && city2 == ""){
        alert("Please enter two cities to compare")
        return;
    };


    $("svg").remove();
    $("city-div").empty();
    $("city-div2").empty();  

    console.log("oH YEEEH!");



    var city = $("#city-input").val().trim();
        console.log(city);



        var queryURL = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {


            var cityName = response.name;

            var resultsCity = response.prices[19].average_price;
            resultsCity = (3.78541 * resultsCity).toFixed(2)

            var aptRent1D = response.prices[21].average_price;
            aptRent1D = aptRent1D.toFixed(2);

            var aptRent1O = response.prices[22].average_price;
            aptRent1O = aptRent1O.toFixed(2);


            $('#city-div').html('');
            $('#city-div').append("<h3>" + cityName +"</h3>");
            $('#city-div').append("<p id='containerElement'>$" + resultsCity + "<br />Average Gas Price per Gallon</p>" );
            $('#city-div').append("<p id='containerElement'>$" + aptRent1D + "<br />Average Rent (1 Bedroom Apartment Downtown)</p>" );
            $('#city-div').append("<p id='containerElement'>$" + aptRent1O + "<br />Average Rent (1 Bedroom Apartment Outside of Downtown)</p>" );



        });


        var city2 = $("#city-input2").val().trim();
        console.log(city2);

        var queryURL2 = "https://www.numbeo.com/api/city_prices?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response2) {

            var cityName2 = response2.name;

            var resultsCity2 = response2.prices[19].average_price;
            resultsCity2 = (3.78541 * resultsCity2).toFixed(2);

            var aptRent1D2 = response2.prices[21].average_price;
            aptRent1D2 = aptRent1D2.toFixed(2);

            var aptRent1O2 = response2.prices[22].average_price;
            aptRent1O2 = aptRent1O2.toFixed(2);



             $('#city-div2').html('');
            $('#city-div2').append("<h3>" + cityName2 +"</h3>");
            $('#city-div2').append("<p id='containerElement'>$" + resultsCity2 + "<br />Average Gas Price per Gallon</p>" );
            $('#city-div2').append("<p id='containerElement'>$" + aptRent1D2 + "<br />Average Rent (1 Bedroom Apartment Downtown)</p>" );
            $('#city-div2').append("<p id='containerElement'>$" + aptRent1O2 + "<br />Average Rent (1 Bedroom Apartment Outside of Downtown)</p>" );
        });

    });

 $("#air").on("click", function(event) {

    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();
    if(city == "" && city2 == ""){
        alert("Please enter two cities to compare")
        return;
    };

        console.log("Pollution Button Clicked");


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_pollution?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1air1 = response.air_quality;
            
            var results1air1 = ((results1air1 + 2) * 20).toFixed(0);

            var results2air1 = response.green_and_parks_quality;

            var results2air1 = ((results2air1 + 2) * 20).toFixed(0);

            var results3air1 = response.index_pollution.toFixed(0);

            var results4air1 = response.noise_and_light_pollution;

            var results4air1 = ((results4air1 + 2) * 20).toFixed(0);


            $('#city-div').html('');

            $('#city-div').append("<table>");
            $('#city-div').append("<tr>");
             $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div').append("<td> Air Quality: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results1air1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
             $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div').append("<td>Green and Parks Quality: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results2air1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
             $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div').append("<td>Pollution Index:</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results3air1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
             $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div').append("<td>Noise & Light Pollution: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results4air1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("</table>");
        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_pollution?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1air2 = response.air_quality;

            var results1air2 = ((results1air2 + 2) * 20).toFixed(0);

            var results2air2 = response.green_and_parks_quality;

            var results2air2 = ((results2air2 + 2) * 20).toFixed(0);

            var results3air2 = response.index_pollution.toFixed(0);

            var results4air2 = response.noise_and_light_pollution;

            var results4air2 = ((results4air2 + 2) * 20).toFixed(0);


            $('#city-div2').html('');

            $('#city-div2').append("<table>");
            $('#city-div2').append("<tr>");
 $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div2').append("<td> Air Quality: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results1air2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");
             $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div2').append("<td>Green and Parks Quality: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results2air2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");
             $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div2').append("<td>Pollution Index:</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results3air2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");
             $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");
            $('#city-div2').append("<td>Noise & Light Pollution: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results4air2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("</table>");
        });



    });


$("#crime").on("click", function(event) {

    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();
               if(city == "" && city2 == ""){
        alert("Please enter two cities to compare")
        return;
    };


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_crime?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {

            var results1crime1 = response.index_crime;

            var results1crime1 = results1crime1.toFixed(0);

            var results2crime1 = response.problem_property_crimes;


            var results2crime1 = ((results2crime1 + 2) * 20).toFixed(0);

            var results3crime1 = response.worried_car_stolen;

            var results3crime1 = ((results3crime1 + 2) * 20).toFixed(0);

            $('#city-div').html('');
            $('#city-div').append("<table>");
            $('#city-div').append("<tr>");
                        $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div></td>");

            $('#city-div').append("<td>Crime Index: </td>");

            $('#city-div').append("<td><progress id='myProgress' value=" + results1crime1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
                        $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Property Crime: </td>");

            $('#city-div').append("<td><progress id='myProgress' value=" + results2crime1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("<tr>");
                                    $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");

            $('#city-div').append("<td>Car Stolen Index: </td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results3crime1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");
            $('#city-div').append("</table>");

        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_crime?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {

            var results1crime2 = response.index_crime;

            var results1crime2 = results1crime2.toFixed(0);

            var results2crime2 = response.problem_property_crimes;


            var results2crime2 = ((results2crime2 + 2) * 20).toFixed(0);

            var results3crime2 = response.worried_car_stolen;

            var results3crime2 = ((results3crime2 + 2) * 20).toFixed(0);

            $('#city-div2').html('');
            $('#city-div2').append("<table>");
            $('#city-div2').append("<tr>");

                        $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Crime Index is an estimation of overall level of crime in a given city or a country. We consider crime levels lower than 20 as very low, crime levels between 20 and 40 as being low, crime levels between 40 and 60 as being moderate, crime levels between 60 and 80 as being high and finally crime levels higher than 80 as being very high.</div></td>");
            $('#city-div2').append("<td>Crime Index: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results1crime2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");

                        $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Property Crime: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results2crime2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("<tr>");

                                    $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Car stolen rate</div></td>");

            $('#city-div2').append("<td>Car Stolen Index: </td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results3crime2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");
            $('#city-div2').append("</table>");

        });

    });


$("#weather").on("click", function(event) {

    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();
               if(city == "" && city2 == ""){
        alert("Please enter two cities to compare")
        return;
    };


        var city = $("#city-input").val().trim();



        var queryURL = "https://www.numbeo.com/api/city_climate?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {
            $('#city-div').html('');

            var results1weather1 = response.climate_index.toFixed(0);

            var results2weather1 = response.best_months_to_visit_text;
            $('#city-div').append(results2weather1);
            $('#city-div').append("<table>");
            $('#city-div').append("<tr>");
            $('#city-div').append("<th>Month</th");
            $('#city-div').append("<th>Avg Low Temp <html>&#x2109 </html></th");
            $('#city-div').append("<th>  Avg High Temp <html>&#x2109 </html></th");
            $('#city-div').append("</tr>");

            for (var i = 1; i < 12; i++) {

                var monthlow1weather1 = response.months[i].temp_low_avg;
                monthlow1weather1 = JSON.stringify(monthlow1weather1);
                monthlow1weather1 = (monthlow1weather1 * 9) / 5 + 32;

                var monthhigh1weather1 = response.months[i].temp_high_avg;
                monthhigh1weather1 = JSON.stringify(monthhigh1weather1);
                monthhigh1weather1 = (monthhigh1weather1 * 9) / 5 + 32;



                $('#city-div').append("<tr>");


                switch (i) {
                    case (1):
                        $('#city-div').append("<td class='month'>January</td>");
                        break;
                    case (2):
                        $('#city-div').append("<td class='month'>Febuary</td>");
                        break;
                    case (3):
                        $('#city-div').append("<td class='month'>March</td>");
                        break;
                    case (4):
                        $('#city-div').append("<td class='month'>April</td>");
                        break;
                    case (5):
                        $('#city-div').append("<td class='month'>May</td>");
                        break;
                    case (6):
                        $('#city-div').append("<td class='month'>June</td>");
                        break;
                    case (7):
                        $('#city-div').append("<td class='month'>July</td>");
                        break;
                    case (8):
                        $('#city-div').append("<td class='month'>August</td>");
                        break;
                    case (9):
                        $('#city-div').append("<td class='month'>September</td>");
                        break;
                    case (10):
                        $('#city-div').append("<td class='month'>October</td>");
                        break;
                    case (11):
                        $('#city-div').append("<td class='month'>November</td>");
                        break;
                    case (12):
                        $('#city-div').append("<td class='month'>December</td>");
                        break;
                }


                $('#city-div').append("<td>" + monthlow1weather1 + "</td>");
                $('#city-div').append("<td>" + monthhigh1weather1 + "</td>");
                $('#city-div').append("</tr>");

            };

            $('#city-div').append("<table>");




        });

        var city2 = $("#city-input2").val().trim();



        var queryURL2 = "https://www.numbeo.com/api/city_climate?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {
            $('#city-div2').html('');

            var results1weather2 = response.climate_index.toFixed(0);

            var results2weather2 = response.best_months_to_visit_text;
            $('#city-div2').append(results2weather2);
            $('#city-div2').append("<table>");
            $('#city-div2').append("<tr>");
            $('#city-div2').append("<th>Month</th");
            $('#city-div2').append("<th>Avg Low Temp <html>&#x2109 </html></th");
            $('#city-div2').append("<th>Avg High Temp <html>&#x2109 </html></th");
            $('#city-div2').append("</tr>");

            for (var i = 1; i < 12; i++) {

                var monthlow2weather2 = response.months[i].temp_low_avg;
                monthlow2weather2 = JSON.stringify(monthlow2weather2);
                monthlow2weather2 = (monthlow2weather2 * 9) / 5 + 32;

                var monthhigh2weather2 = response.months[i].temp_high_avg;
                monthhigh2weather2 = JSON.stringify(monthhigh2weather2);
                monthhigh2weather2 = (monthhigh2weather2 * 9) / 5 + 32;



                $('#city-div2').append("<tr>");


                switch (i) {
                    case (1):
                        $('#city-div2').append("<td class='month'>January</td>");
                        break;
                    case (2):
                        $('#city-div2').append("<td class='month'>Febuary</td>");
                        break;
                    case (3):
                        $('#city-div2').append("<td class='month'>March</td>");
                        break;
                    case (4):
                        $('#city-div2').append("<td class='month'>April</td>");
                        break;
                    case (5):
                        $('#city-div2').append("<td class='month'>May</td>");
                        break;
                    case (6):
                        $('#city-div2').append("<td class='month'>June</td>");
                        break;
                    case (7):
                        $('#city-div2').append("<td class='month'>July</td>");
                        break;
                    case (8):
                        $('#city-div2').append("<td class='month'>August</td>");
                        break;
                    case (9):
                        $('#city-div2').append("<td class='month'>September</td>");
                        break;
                    case (10):
                        $('#city-div2').append("<td class='month'>October</td>");
                        break;
                    case (11):
                        $('#city-div2').append("<td class='month'>November</td>");
                        break;
                    case (12):
                        $('#city-div2').append("<td class='month'>December</td>");
                        break;
                }


                $('#city-div2').append("<td>" + monthlow2weather2 + "</td>");
                $('#city-div2').append("<td>" + monthhigh2weather2 + "</td>");
                $('#city-div2').append("</tr>");

            };

            $('#city-div2').append("<table>");




        });




    });



 $("#traffic").on("click", function(event) {

    var city = $("#city-input").val().trim();
    var city2 = $("#city-input2").val().trim();
               if(city == "" && city2 == ""){
        alert("Please enter two cities to compare")
        return;
    };


        var city = $("#city-input").val().trim();

        console.log(city);

        var queryURL = "https://www.numbeo.com/api/city_traffic?api_key=6b2rzozbl9v8lu&query=" + city;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {


            var results1traffic1 = response.primary_means_percentage_map.Car;
            results1traffic1 = results1traffic1;
            results1traffic1 = (results1traffic1).toFixed(0);

            var results2traffic1 = response.primary_means_percentage_map.Bike;
            results2traffic1 = results2traffic1;
            results2traffic1 = (results2traffic1).toFixed(0);

            var results3traffic1 = response.primary_means_percentage_map.Walking;
            results3traffic1 = results3traffic1;
            results3traffic1 = (results3traffic1).toFixed(0);

            var results4traffic1 = response.primary_means_percentage_map.Bus;
            results4traffic1 = results4traffic1;
            if (results4traffic1 == null) {
                results4traffic1 = "0";
            } else {
                results4traffic1 = (results4traffic1).toFixed(0);
            };


            var results5traffic1 = response.primary_means_percentage_map.Motorbike;
            results5traffic1 = results5traffic1;
            if (results5traffic1 == null) {
                results5traffic1 = "0";
            } else {
                results5traffic1 = (results5traffic1).toFixed(0);
            };


            var results6traffic1 = response.primary_means_percentage_map.Working_from_Home;
            results6traffic1 = results6traffic1;
            if (results6traffic1 == null) {
                results6traffic1 = "0";
            } else {
                results6traffic1 = (results6traffic1).toFixed(0);
            };

            var results7traffic1 = response.primary_means_percentage_map.Train;
            results7traffic1 = results7traffic1;
            if (results7traffic1 == null) {
                results7traffic1 = "0";
            } else {
                results7traffic1 = (results7traffic1).toFixed(0);
            };

            var results8traffic1 = parseInt(results1traffic1) + parseInt(results2traffic1) + parseInt(results3traffic1) + parseInt(results4traffic1) + parseInt(results5traffic1) + parseInt(results6traffic1) + parseInt(results7traffic1);
            results8traffic1 = 100 - results8traffic1;
            results8traffic1 = results8traffic1.toFixed(0);


            $('#city-div').html('');
            $('#city-div').append("Main Means of Transportation");
            $('#city-div').append("<br>");
            $('#city-div').append("<br>");
            $('#city-div').append("<table>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Car</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results1traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Bike</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results2traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Walking</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results3traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Bus</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results4traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Motorbike</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results5traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Working from Home</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results6traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Train</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results7traffic1 + " max='100'></progress></td>");
            $('#city-div').append("</tr>");

            $('#city-div').append("<tr>");
            $('#city-div').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div').append("<td>Other</td>");
            $('#city-div').append("<td><progress id='myProgress' value=" + results8traffic1 + " max='100'></progress></td>");

            $('#city-div').append("</tr>");

            $('#city-div').append("</table>");

        });

        var city2 = $("#city-input2").val().trim();

        console.log(city2);

        var queryURL2 = "https://www.numbeo.com/api/city_traffic?api_key=6b2rzozbl9v8lu&query=" + city2;

        $.ajax({
            url: queryURL2,
            method: "GET"
        })

        .done(function(response) {


            var results1traffic2 = response.primary_means_percentage_map.Car;
            results1traffic2 = results1traffic2;
            results1traffic2 = (results1traffic2).toFixed(0);

            var results2traffic2 = response.primary_means_percentage_map.Bike;
            results2traffic2 = results2traffic2;
            results2traffic2 = (results2traffic2).toFixed(0);

            var results3traffic2 = response.primary_means_percentage_map.Walking;
            results3traffic2 = results3traffic2;
            results3traffic2 = (results3traffic2).toFixed(0);

            var results4traffic2 = response.primary_means_percentage_map.Bus;
            results4traffic2 = results4traffic2;
            if (results4traffic2 == null) {
                results4traffic2 = "0";
            } else {
                results4traffic2 = (results4traffic2).toFixed(0);
            };


            var results5traffic2 = response.primary_means_percentage_map.Motorbike;
            results5traffic2 = results5traffic2;
            if (results5traffic2 == null) {
                results5traffic2 = "0";
            } else {
                results5traffic2 = (results5traffic2).toFixed(0);
            };


            var results6traffic2 = response.primary_means_percentage_map.Working_from_Home;
            results6traffic2 = results6traffic2;
            if (results6traffic2 == null) {
                results6traffic2 = "0";
            } else {
                results6traffic2 = (results6traffic2).toFixed(0);
            };

            var results7traffic2 = response.primary_means_percentage_map.Train;
            results7traffic2 = results7traffic2;
            if (results7traffic2 == null) {
                results7traffic2 = "0";
            } else {
                results7traffic2 = (results7traffic2).toFixed(0);
            };

            var results8traffic2 = parseInt(results1traffic2) + parseInt(results2traffic2) + parseInt(results3traffic2) + parseInt(results4traffic2) + parseInt(results5traffic2) + parseInt(results6traffic2) + parseInt(results7traffic2);
            results8traffic2 = 100 - results8traffic2;
            results8traffic2 = results8traffic2.toFixed(0);


            $('#city-div2').html('');
            $('#city-div2').append("Main Means of Transportation");
            $('#city-div2').append("<br>");
            $('#city-div2').append("<br>");
            $('#city-div2').append("<table>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Car</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results1traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Bike</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results2traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Walking</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results3traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Bus</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results4traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Motorbike</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results5traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Working from Home</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results6traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Train</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results7traffic2 + " max='100'></progress></td>");
            $('#city-div2').append("</tr>");

            $('#city-div2').append("<tr>");
            $('#city-div2').append("<td> <a><img src='https://www.aupaathletic.com/comun/imagenes/icon-info.png'></a>" + "<div class='test'>Problems with property crimes such as vandalism and theft</div></td>");
            $('#city-div2').append("<td>Other</td>");
            $('#city-div2').append("<td><progress id='myProgress' value=" + results8traffic2 + " max='100'></progress></td>");

            $('#city-div2').append("</tr>");

            $('#city-div2').append("</table>");

        });
    });

    





















});
