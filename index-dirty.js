const NodeGeocoder = require('node-geocoder');
const inquirer = require('inquirer');
const myListOfQuestions = require('./cityStatePrompt');
const weather = require('weather-js');

const options = {
  provider: "mapquest",
  apiKey: "46ZWr2wfJVXmdoDUUqxlBlYuztS1WXyu"
};

// instatinated geocoder
let geocoder = NodeGeocoder(options);

inquirer.prompt(myListOfQuestions.questions)
  .then(answers => {
    let concatAddress = answers.city + ', ' + answers.state;
    console.log(concatAddress);
    
    let address = {
      search: concatAddress, 
      degreeType: 'F'
    };
    console.log(address);

    // === opt 1 =====================================
    // === this code works and returns res data ======
    // weather.find(address, (err, res) => {
    //   if(err) console.log(err);
    //   console.log(res);
    // });
    // ===============================================

    // === opt 2 =====================================
    return weather.find(address);

    // answers come back.
    // we make call to geocoder and return response to next then
    // const address = `${answers.city}, ${answers.state}`;
    // return geocoder.geocode(address);

  })
  // === opt 2 =====================================
  .then((err, response) => {
    console.log('does it get here?');
    
    if(err) console.log(err);
    console.log(response);
    
  });
  



  // .then(responseData => {
  //   console.log(responseData);
    
  // });

  // .then(geoResponseData => {
  //   // get geo response and format it then push to next then
  //   return geoResponseData[0].latitude + ', ' + geoResponseData[0].longitude;

  // }).then(latAndLon => {
  //   // get formatted text, prints to log
  //   console.log(latAndLon);
    
  // });
