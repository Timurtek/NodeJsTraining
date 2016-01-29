var greetings = require('./greetings.json');

var greet = function(){
  console.log("English: " + greetings.en);
};


module.exports = greet;
