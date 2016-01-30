//object properties and methods

var obj = {
    greet:'Hello',
    greeting:function(){
        console.log(this.greet);
    }
    
};

obj.greeting();


var arr = [];  // start an empty array holder
//add these functions to arr 
arr.push(function(){console.log('yeahhhh')});
arr.push(function(){console.log('yeahhh1123123h')});
arr.push(function(){console.log('ye131231asdashhh')});

arr.forEach(function(item){
    item();
});
