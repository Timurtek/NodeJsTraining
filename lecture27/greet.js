//exports will create a new slot on the memory
//because it's getting assigned to  =
exports = function(){
  console.log('Hello');
}

//[Function]
console.log(exports);
//{}
console.log(module.exports);
