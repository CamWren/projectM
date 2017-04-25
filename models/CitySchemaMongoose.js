// 'use strict';

// var $;

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     function doSomething(){
//         var deferred = $.Deferred();
//      }
//     var $ = require("jquery")(window);
//     doSomething();
// });

// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
// var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(function(file) {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;



// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a city Schema. This will be the basis of how city data is stored in the db
var CitySchema = new Schema({
   
   City_Name: String,
   State_Name: String,
   Public_Transportation: Number,
   Weather: Number,
   Sports: Number,
   Live_Music: Number,
   Outdoor_Parks: Number,
   Schools_Education: Number,
   Fitness_Health: Number,
   Safety: Number,
   Nightlife_Bars: Number,
   Population_Density: Number

});
var City = mongoose.model("Cities", CitySchema);
// Exports the CitySchema for use elsewhere. Sets the MongoDB collection to be used as: "Cities"
module.exports = City;


