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
   Population_Density: Number,
   Latitude: Number,
   Longitude: Number

});
var City = mongoose.model("Cities", CitySchema);
// Exports the CitySchema for use elsewhere. Sets the MongoDB collection to be used as: "Cities"
module.exports = City;


