var greetings = require('./greetings.json');

var greet = function(){
  console.log("Turkce: " + greetings.tr);
};


module.exports = greet;
