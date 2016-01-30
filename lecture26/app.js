//there is no wrong way to use the modules.
// it's a architectural choice.
//here are some examples:
var greet = require('./greet1');
var greet2 = require('./greet2').greet;
var greet3 = require('./greet3');
var greet5 = require('./greet5');

greet();

greet2();

greet3.greet();
greet3.greetings = "Greet 3: New object! changed variable";

//new object
var greet3b = require('./greet3');
greet3b.greet();


var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();


greet5.greetFunc();
greet5.bananeFunc();
