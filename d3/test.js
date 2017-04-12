var city = "Austin";
var queryURL = "https://www.numbeo.com/api/indices?api_key=6b2rzozbl9v8lu&query=" + city;

$.ajax({
    url: queryURL,
    method: "GET"
})

.done(function(response) {
    console.log(response)
    var cityName = response.name;
    var crime = response.crime_index;
    var groceries = response.groceries_index;
    var health = response.health_care_index;
    var pollution = response.pollution_index;
    var qualityLife = response.quality_of_life_index;
    var rent = response.rent_index;
    var safety = response.safety_index;


    console.log(crime + "\n" 
    		+ cityName + "\n"
    		+ groceries + "\n"
    		+ health + "\n"
    		+ pollution + "\n"
    		+ qualityLife + "\n"
    		+ rent + "\n"
    		+ safety + "\n"
    )

});

