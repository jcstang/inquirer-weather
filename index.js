const NodeGeocoder = require('node-geocoder');
const inquirer = require('inquirer');
const myListOfQuestions = require('./cityStatePrompt');
const weather = require('weather-js');

const options = {
  provider: "mapquest",
  apiKey: "46ZWr2wfJVXmdoDUUqxlBlYuztS1WXyu"
};

let geocoder = NodeGeocoder(options);

// openWeather.setAPPID('9bd0a94395431fd3dcf77efe52365a9d');
// openWeather.setLang('en');
// openWeather.setUnits('imperial');


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
    weather.find(address, (err, res) => {
      if(err) console.log(err);
      console.log(res);
    });
    // ========= end opt 1 ===========================

    // === opt 2 =====================================
    // return weather.find(address);
    // weatherGuy.getCurrent('kansas city', current => {
    //   console.log(current);
      
    // });
    // weatherHelper.getCurrent("kansas city", current => {
    //   console.log(current);
      
    // });
    // openWeather.setCity('denver');
    // openWeather.getTemperature((err, temp) => {
    //   console.log(temp);
      
    // });

    // return openWeather.getTemperature();

    // openWeather.getDescription((err, desc) => {
    //   console.log(desc);
      
    // });


  });


  // .then((err, desc) => {
  //   console.log(desc);
    
  // });
  // .then(current => {
  //   console.log(current);
    
  // });
  // === opt 2 =====================================
  // .then((err, response) => {
  //   console.log('does it get here?');
    
  //   if(err) console.log(err);
  //   console.log(response);
    
  // });
  // =========== end opt 2==========================
  
