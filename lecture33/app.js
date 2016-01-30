var Emitter  = require('./emitter');

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Somewhere someone said hello!');
});

emtr.on('greet',function(){
    console.log('run the x function here.');
});

emtr.emit('greet');