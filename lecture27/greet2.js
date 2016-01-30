//exports get attached to greet
exports.greet = function(){
  console.log('Greet2: Hello');
};

//{ greet: [Function] }
console.log(exports);
//{ greet: [Function] }
console.log(module.exports);
