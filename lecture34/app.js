//Node JS Events  require events
var Emitter  = require('events');
var eventConfig = require('./eventConfig').events;

//set new object
var emtr = new Emitter();

function personName(){
    return 'person name function got called';
};


//when greet is called run this function
emtr.on(eventConfig.GREET,function(){
    console.log(personName());
});

//when greet is called run this function
emtr.on(eventConfig.GREET,function(){
    console.log('run the x function here.');
});


//greet is invoked / called
//this invokes the listeners  ^^^^
emtr.emit('greet');