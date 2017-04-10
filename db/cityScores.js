var cityScores = [
  {
    city: "Austin",
    state: "TX",
    scores: ["8", "5", "8", "1", "4", "1", "6", "2", "3", "3"]
  },
  {
    city: "Denver",
    state: "CO",
    scores: ["5", "10", "2", "5", "3", "4", "2", "4", "4", "4"]
  },
  {
    city: "Seattle",
    state: "WA",
    scores: ["3", "3", "3", "3", "2", "2", "3", "5", "3", "7"]
  },
  {
    city: "New York",
    state: "NY",
    scores: ["2", "3", "5", "2", "8", "5", "3", "9", "1", "10"]
  },
  {
    city: "Los Angeles",
    state: "CA",
    scores: ["7", "2", "4", "3", "3", "10", "4", "8", "2", "8"]
  },
  {
    city: "Atlanta",
    state: "GA",
    scores: ["8", "6", "8", "4", "5", "8", "8", "8", "6", "5"]
  },
  {
    city: "Chicago",
    state: "IL",
    scores: ["1", "8", "3", "6", "7", "7", "1", "10", "5", "9"]
  },
  {
    city: "Boise",
    state: "IA",
    scores: ["10", "9", "9", "9", "9", "3", "7", "1", "9", "1"]
  },
  {
    city: "Philadelphia",
    state: "PA",
    scores: ["4", "7", "7", "7", "8", "9", "8", "6", "7", "8"]
  },
  {
    city: "Pittsburgh",
    state: "PA",
    scores: ["3", "4", "1", "8", "10", "8", "9", "7", "8", "6"]
  },
  {
    city: "Oklahoma City",
    state: "OK",
    scores: ["9", "8", "6", "8", "6", "3", "10", "3", "8", "2"]
  },
  {
    city: "Honolulu",
    state: "HI",
    scores: ["6", "1", "10", "10", "1", "6", "5", "3", "10", "3"]
  }

];

// Here we export the array. This makes it accessible to other files using require.
// module.exports = cityScores;

 // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options

