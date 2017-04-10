window.onload = function() {

//makes the data a global variable
var city_Scores =[];
var cities = {};

//initial call to get data

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
  $.get("api/cities", function(data){
    
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
               data[i].Population_Density]

            }
    city_Scores.push(cities);        
            
  }

  });
}

//function which finds the best city based on the survey results the user has entered.
function myBestMatch() {
  
 console.log()
  var bestMatch = {
    city: "",
    state: "",
    cityDifference: 1000
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
      console.log(bestMatch.city)
      $("#suggestedCity").html("<h4>Best Match: " + bestMatch.city + ", " + bestMatch.state + "</h4>");
    }
  }

  console.log(bestMatch);
  console.log(values);
};
}