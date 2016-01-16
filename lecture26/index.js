//Module Patterns

var greet1 = require('./greet1');
var greet2 = require('./greet2');
var greet3 = require('./greet3');
greet1();
//greet2.greet();
//greet3.greet();

greet3.greeting = "Change it ";
var greet3b = require('./greet3');
 //greet3b.greet();

var Greet4 = require('./greet4');
var greeter4 = new Greet4();
//greeter4.greet();

var greet5 = require('./greet5');
//greet5.greet();
