//building a module

// ./ means the same folder location
var greet = require('./greet');
//greet('Timurtek');


var greetMod = require('./greet/');

greetMod.english();
greetMod.spanish();
