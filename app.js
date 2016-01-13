//UDEMY NodeJS Course

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
  nickname: 'Zorro',
  name: function(){
    console.log('Hello, '+person.firstname+' '+person.lastname);
  },
  health:{
    fivePoints:function(){
      console.log(person.firstname + ' gains 5 health points.');
    },
    tenPoints: function(){
      console.log(person.nickname + ' gains 10 health points.');
    }
  }
};

//console.log(person.health.fivePoints());

//function constructor
function Person(firstname,lastname, nickname){
   this.firstname = firstname;
   this.lastname = lastname;
   this.nickname = nickname;
}

Person.prototype.hello = function(){
  console.log('Hello, ' + this.firstname +' '+ this.lastname);
}
Person.prototype.healthPoints = function(){
  console.log(this.nickname + ' gains 10 health points.');
}

var timurtek = new Person('Timurtek','Bizel','Zorro');
var jane = new Person('Jane', 'Bizel','Moshi');
var tayfun = new Person('Tayfun', 'Bizel','DiabloIII');

// timurtek.hello();
// jane.hello();
// tayfun.hello();
// /timurtek.healthPoints();



//Pass by value
function change(b){
  //function gets the value and outputs it
  b=2;
}

//a is equal to 1
var a = 1;
// a passes by as a value to change function. b gets replaced with a which is 1.
change(a);
//function change returns a's value
//console.log(a);


//Pass by reference
function changeObj(d){
  d.prop1 = function(){};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};

changeObj(c);

console.log(c);
