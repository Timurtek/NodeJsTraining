//util node js glance
/*
%s - String.
%d - Number (both integer and float).
%j - JSON.
%% - single percent sign ('%'). This does not consume an argument.
*/ 

const util = require('util');

var name = 'Tony'; // string %s

var jsonStuff = {
    'name':"Timurtek",
    'age': 27,
    'location':{
        'city': 'Seattle',
        'state': 'WA'
    }
    
};//%j

var number = 3; //[%d]

var greetings = util.format('Hello, I am %j.  I am %d years old. I live in %j,%j', 
                             jsonStuff.name,
                             jsonStuff.age,
                             jsonStuff.location.city,
                             jsonStuff.location.state );

util.log(greetings);