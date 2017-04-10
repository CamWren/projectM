'use strict';

module.exports = function(sequelize, DataTypes) {
  var City_Rank = sequelize.define("city_rank", {
    
  

    

    City_Name: {

      type: DataTypes.STRING
    },
    State_Name: {
      type: DataTypes.STRING
    
    },
    Public_Transportation: {
      type: DataTypes.INTEGER
      
    },
    Weather: {
      type: DataTypes.INTEGER
    },
     Sports: {
      type: DataTypes.INTEGER
    },
     Live_Music: {
      type: DataTypes.INTEGER
    },
     Outdoor_Parks: {
      type: DataTypes.INTEGER
    },
     Schools_Education: {
      type: DataTypes.INTEGER
    },
     Fitness_Health: {
      type: DataTypes.INTEGER
    },
     Safety: {
      type: DataTypes.INTEGER
    },
     Nightlife_Bars: {
      type: DataTypes.INTEGER
    },
     Population_Density: {
      type: DataTypes.INTEGER
    }
  },
  {
   tableName: 'city_rank'
  }
  );


  return City_Rank;
};
