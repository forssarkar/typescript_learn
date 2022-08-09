// explicit type
var character = 'mario';
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
//let ninjas: string[];
//ninjas =["ss", "suman"]
// ninjas = [10,20] , number not allowed
// Declaration with empty value, we can use push method
var ninjas = [];
ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);
// union types
var mixed = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
var uid;
uid = "susanta";
uid = 30;
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
var ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
