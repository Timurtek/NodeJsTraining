function Greet3(){
  this.greeting = "Greet 3";
  this.greet = function(){
    console.log(this.greeting);
  };
}

module.exports = new Greet3();
