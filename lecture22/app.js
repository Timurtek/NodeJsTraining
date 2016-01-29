
//function expression gets invoked immidiately
(function(firstname,lastname){

  var firstname = "John";

  console.log(firstname+' '+lastname);
  
}(firstname,'doe'));

var firstname = 'Jane';
console.log(firstname);
