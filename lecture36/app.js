var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'hello world';
}


//any objects created from greeter should also have access to methods and props in eventEmitter
util.inherits(Greetr,EventEmitter);


Greetr.prototype.greet = function(){
        
    console.log(this.greeting);
    
    this.emit('greet');
    
}

//creating a new greeter object
var greeter1 = new Greetr();

//now we can use the methods and props from eventEmitter

greeter1.on('greet',function(){
    console.log('Someone greeted!');
});


greeter1.greet();

