//variable and function is protected, there is no way to access it nor change the value of it on returned object because it is not with in it.
var greeting = "greeetinggsss my precious";
function greet(){
  console.log(greeting);
}
module.exports = {
    greet: greet
};
