//creating a function constructor
function  Greetr(greetings){
  this.greetings = greetings || "Greet3: Hello World!";
  this.greet = function(){
    console.log(this.greetings);
  }
}

module.exports = new Greetr();
