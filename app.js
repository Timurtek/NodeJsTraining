//function statement

function greet(){
    console.log('Welcome to NodeJS');
}

//functions are first-class
function logGreeting(fn){
    fn();
}

//function expression
var myName = function(){
    console.log('Timurtek');
}

//use a function expression on the fly
// logGreeting(function(){
//   console.log('Hello Timurtek');
// });


//Objects and Object Literals
var person = {
  firstname: 'Timurtek',
  lastname: 'Bizel',
  name: function(){
    console.log('Hello, '+this.firstname+' '+this.lastname);
  }
};

//Function Construction
//Person first and last name
function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}
//Hello Function attached to the Person function construction
Person.prototype.hello = function(){
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var timurtek = new Person('Timurtek','Bizel');
var jane = new Person('Jane','Doe');

timurtek.hello();
jane.hello();
