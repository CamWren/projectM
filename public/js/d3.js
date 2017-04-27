
    console.log( "ready!" );
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


