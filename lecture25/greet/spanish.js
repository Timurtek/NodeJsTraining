var greetings = require('./greetings.json');

var greet = function(){
  console.log("Espanol: " + greetings.es);
};

module.exports = greet;
