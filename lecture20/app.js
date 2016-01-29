
//function constructor
function Person(firstname,lastname){
  this.firstname = firstname || 'default';
  this.lastname = lastname || 'default';
}
Person.prototype.greet = function(){
  console.log('Hello '+ this.firstname+ ' '+ this.lastname );
};
var john = new Person('John','Doe');

john.greet();

console.log(john.__proto__);
