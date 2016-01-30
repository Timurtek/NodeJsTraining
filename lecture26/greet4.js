//creating a function constructor
function  Greetr(greetings){
  this.greetings = greetings || "Greet4: Hello World!";
  this.greet = function(){
    console.log(this.greetings);
  }
}

module.exports = Greetr;
