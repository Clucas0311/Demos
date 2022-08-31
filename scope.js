// How do we declare variables in JavaScript???

// let name = "Tom"; // reassign the value to another
// const age = 34; // remains const
// var color = "blue"; // reassign

// const animals = ["dog", "cat", "mouse"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// function lol() {
//   let person = "Tom";
//   const age = 45;
//   var color = "teal";
//   console.log(age);
// }
// function changeColor() {
//   let color = "purple";
//   const age = 19;
//   console.log(age);
// }
// console.log(lol());
// console.log(changeColor());

// console.log(i);

// global scope
// let global = "global scope";
// console.log(global);

// function scope:

// function helpMe() {
//   //local/functional scope - look for the variable locally then move up to global
//   console.log(global);
// }
// console.log(helpMe());

// block scoped  --> if statements, for loops and while loops

// if (false) {
//   // if block scope
//   let animal = "eel";
//   console.log(animal);
// }
// const animals = ["dog", "cat", "mouse"];
// const newReverse = [];
// function newFunction(array) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     newReverse.push(i, array[i]);
//     return newReverse;
//   }
// }

// console.log(newFunction(animals));

// msg;

// let number = 12;
// function printNumber() {
//   let number = 18;
//   console.log(number);
// }
// console.log(printNumber());

// let message = "just doing my thing";

// function printMessage(message) {
//   console.log(message);
// }

// printMessage("I am doing a different thing");

// Lexical Score
var hero = "Spiderman";
function outer() {
  //  function scope - local scope
  //   let hero = "Black Panther";
  inner();
  function inner() {
    // inner function - where is hero,
    var cryForHelp = `${hero} please save me!`;
  }
  //   console.log(cryForHelp);
}

// console.log(outer());
// Best Practices

if (true) {
  var animal = "cat";
}
console.log(animal);

let person = "Chuck";
console.log(person);
