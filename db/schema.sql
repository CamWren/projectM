CREATE DATABASE city_db;
USE city_db;
CREATE TABLE city_rank(
  id INT NOT NULL AUTO_INCREMENT,
  City_Name VARCHAR(60) NOT NULL,
  State_Name VARCHAR(60) NOT NULL,
  Public_Transportation integer NOT NULL,
  Weather integer NOT NULL,
  Sports integer NOT NULL,
  Live_Music integer NOT NULL,
  Outdoor_Parks integer NOT NULL,
  Schools_Education integer NOT NULL,
  Fitness_Health integer NOT NULL,
  Safety integer NOT NULL,
  Nightlife_Bars integer NOT NULL,
  Population_Density integer NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO city_rank (City_Name, State_Name, Public_Transportation, Weather, Sports, Live_Music, Outdoor_Parks, Schools_Education, Fitness_Health, Safety, Nightlife_Bars, Population_Density)
VALUES ("Austin", "TX", "8", "5", "8", "1", "4", "1", "6", "2", "3", "3"),
  ("Denver", "CO", "5", "10", "2", "5", "3", "4", "2", "4", "4", "4"),
  ("Seattle", "WA", "3", "3", "3", "3", "2", "2", "3", "5", "3", "7"),
  ("New York","NY", "2", "3", "5", "2", "8", "5", "3", "9", "1", "10"),
  ("Los Angeles", "CA", "7", "2", "4", "3", "3", "10", "4", "8", "2", "8"),
  ("Atlanta", "GA", "8", "6", "8", "4", "5", "8", "8", "8", "6", "5"),
  ("Chicago", "IL", "1", "8", "3", "6", "7", "7", "1", "10", "5", "9"),
  ("Boise", "IA", "10", "9", "9", "9", "9", "3", "7", "1", "9", "1"),
  ("Philadelphia", "PA", "4", "7", "7", "7", "8", "9", "8", "6", "7", "8"),
  ("Pittsburg", "PA", "3", "4", "1", "8", "10", "8", "9", "7", "8", "6"),
  ("Oklahoma City", "OK", "9", "8", "6", "8", "6", "3", "10", "3", "8", "2"),
  ("Honolulu", "HI", "6", "1", "10", "10", "1", "6", "5", "3", "10", "3");
  
USE city_db;
ALTER TABLE city_rank

ADD COLUMN updatedAt DATE;
