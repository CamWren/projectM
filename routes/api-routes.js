// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  console.log(app);

  // GET route for getting all of the cities
  app.get("/api/cities", function(req, res) {
   
    // findAll returns all entries for a table when used with no options
    db.city_rank.findAll().then(function(dbCities) {
      console.log(dbCities);
      // We have access to the cities as an argument inside of the callback function
      res.json(dbCities);
    });
  });

 
};