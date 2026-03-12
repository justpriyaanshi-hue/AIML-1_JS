console.log("Hello World");
var num= 10;
console.log(num);
console.log(typeof(num));
num= false;
console.log(typeof(num));
num= "Hello";
console.log(num);
console.log(typeof(num));
num= null;
console.log(num);
console.log(typeof(num));
num= undefined;
console.log(num);
console.log(typeof(num));

// function
var sayHello= function() {
	alert("Hello World");
}

// array
var numberArray= [1, 2, 3];
var animals= new Array("cat", "dog", "mouse", "lion");
console.log(numberArray);
console.log(animals);

//object
var person= {
name: "Barack Obama",
age: '51',
title: '40th president of USA'
}
console.log(person);

const sym1= Symbol(4);
console.log(sym1);
const sym2= Symbol(4)
console.log(sym2);
if (sym1==sym2) {
    console.log("True");
}
else {
    console.log("False") //each symbol has a unique value
}