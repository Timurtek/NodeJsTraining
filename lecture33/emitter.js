//function constructor
function Emitter(){
   this.events = {}; 
}

// event listener: the code that responds to an event.
Emitter.prototype.on = function(type,listener){
    //checking if the array is there if not assigning that to an array
    this.events[type] = this.events[type] || [];
    //pushing the listener funcs to the array 
    this.events[type].push(listener);
}


Emitter.prototype.emit = function(type){
    //if the array exists
    if(this.events[type]){
        //looping through the array and executing invoking the functions within.
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;