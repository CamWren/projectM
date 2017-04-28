// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// bringing in our models
var mongoose = require("mongoose");
var Cities = require("./models/CitySchemaMongoose.js");
var User = require("./models/UserSchemaMongoose.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
mongoose.Promise = Promise;

// Requiring our models for syncing
// var db = require("./models");
// Database configuration with mongoose
mongoose.connect("mongodb://localhost/migrate");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});



// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Routes =============================================================
// Import routes and give the server access to them.
// var routes = require("./controllers/rppsController.js");
// require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync().then(function() {



// populating our city schema.
var CitySchemaPopulate1 = new Cities ({

	City_Name: "Austin",
   State_Name: "Texas",
   Public_Transportation: 8,
   Weather: 5,
   Sports: 8,
   Live_Music: 1,
   Outdoor_Parks: 4,
   Schools_Education: 1,
   Fitness_Health: 6,
   Safety: 2,
   Nightlife_Bars: 3,
   Population_Density: 3,
   Latitude: 30.27,
   Longitude: -97.74

});

CitySchemaPopulate1.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate2 = new Cities ({

	City_Name: "Denver",
   State_Name: "Colorado",
   Public_Transportation: 5,
   Weather: 10,
   Sports: 2,
   Live_Music: 5,
   Outdoor_Parks: 3,
   Schools_Education: 4,
   Fitness_Health: 2,
   Safety: 4,
   Nightlife_Bars: 4,
   Population_Density: 4,
   Latitude: 39.74,
   Longitude: -105

});

CitySchemaPopulate2.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate3 = new Cities ({

	City_Name: "Seattle",
   State_Name: "Washington",
   Public_Transportation: 3,
   Weather: 3,
   Sports: 3,
   Live_Music: 3,
   Outdoor_Parks: 2,
   Schools_Education: 2,
   Fitness_Health: 3,
   Safety: 5,
   Nightlife_Bars: 3,
   Population_Density: 7,
   Latitude: 47.61,
   Longitude: -122.33

});

CitySchemaPopulate3.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate4 = new Cities ({

	City_Name: "New York",
   State_Name: "New York",
   Public_Transportation: 2,
   Weather: 3,
   Sports: 5,
   Live_Music: 2,
   Outdoor_Parks: 8,
   Schools_Education: 5,
   Fitness_Health: 3,
   Safety: 9,
   Nightlife_Bars: 1,
   Population_Density: 10,
   Latitude: 40.71,
   Longitude: -74

});

CitySchemaPopulate4.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});


var CitySchemaPopulate5 = new Cities ({

	City_Name: "Los Angeles",
   State_Name: "California",
   Public_Transportation: 7,
   Weather: 2,
   Sports: 4,
   Live_Music: 3,
   Outdoor_Parks: 3,
   Schools_Education: 10,
   Fitness_Health: 4,
   Safety: 8,
   Nightlife_Bars: 2,
   Population_Density: 8,
   Latitude: 34.05,
   Longitude: -118.24

});

CitySchemaPopulate5.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});


var CitySchemaPopulate6 = new Cities ({

	City_Name: "Atlanta",
   State_Name: "Georgia",
   Public_Transportation: 8,
   Weather: 6,
   Sports: 8,
   Live_Music: 4,
   Outdoor_Parks: 5,
   Schools_Education: 8,
   Fitness_Health: 8,
   Safety: 8,
   Nightlife_Bars: 6,
   Population_Density: 5,
   Latitude: 33.75,
   Longitude: -84.39


});

CitySchemaPopulate6.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate7 = new Cities ({

	City_Name: "Chicago",
   State_Name: "Illinois",
   Public_Transportation: 1,
   Weather: 8,
   Sports: 3,
   Live_Music: 6,
   Outdoor_Parks: 7,
   Schools_Education: 7,
   Fitness_Health: 1,
   Safety: 10,
   Nightlife_Bars: 5,
   Population_Density: 9,
   Latitude: 41.88,
   Longitude: -87.63

});

CitySchemaPopulate7.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate8 = new Cities ({

	City_Name: "Boise",
   State_Name: "Idaho",
   Public_Transportation: 10,
   Weather: 9,
   Sports: 9,
   Live_Music: 9,
   Outdoor_Parks: 9,
   Schools_Education: 3,
   Fitness_Health: 7,
   Safety: 1,
   Nightlife_Bars: 9,
   Population_Density: 1,
   Latitude: 43.62,
   Longitude: -116.21

});

CitySchemaPopulate8.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate9 = new Cities ({

	City_Name: "Philadelphia",
   State_Name: "Pennsylvania",
   Public_Transportation: 4,
   Weather: 3,
   Sports: 7,
   Live_Music: 7,
   Outdoor_Parks: 8,
   Schools_Education: 9,
   Fitness_Health: 8,
   Safety: 6,
   Nightlife_Bars: 7,
   Population_Density: 8,
   Latitude: 39.95,
   Longitude: -75.16

});

CitySchemaPopulate9.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate10 = new Cities ({

	City_Name: "Pittsburgh",
   State_Name: "Pennsylvania",
   Public_Transportation: 3,
   Weather: 4,
   Sports: 1,
   Live_Music: 8,
   Outdoor_Parks: 10,
   Schools_Education: 8,
   Fitness_Health: 9,
   Safety: 7,
   Nightlife_Bars: 8,
   Population_Density: 6,
   Latitude: 40.44,
   Longitude: -80

});

CitySchemaPopulate10.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

var CitySchemaPopulate11 = new Cities ({

	City_Name: "Oklahoma City",
   State_Name: "Oklahoma",
   Public_Transportation: 9,
   Weather: 8,
   Sports: 6,
   Live_Music: 8,
   Outdoor_Parks: 6,
  Schools_Education: 3,
   Fitness_Health: 10,
   Safety: 3,
   Nightlife_Bars: 8,
   Population_Density: 2,
   Latitude: 35.47,
   Longitude: -97.52

});

CitySchemaPopulate11.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});


var CitySchemaPopulate12 = new Cities ({

	City_Name: "Honolulu",
   State_Name: "Hawaii",
   Public_Transportation: 6,
   Weather: 1,
   Sports: 10,
   Live_Music: 10,
   Outdoor_Parks: 1,
   Schools_Education: 6,
   Fitness_Health: 5,
   Safety: 3,
   Nightlife_Bars: 10,
   Population_Density: 3,
   Latitude: 21.31,
   Longitude: -157.86

});

CitySchemaPopulate12.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
   console.log(doc);
  }
});

// This GET route let's us see the cities we have added
app.get("/api", function(req, res) {
  // Using our Cities model, "find" every city in our book db
  Cities.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });
});



app.post



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });