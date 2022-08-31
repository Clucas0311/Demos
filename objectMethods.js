// Objects are data structures used to store data represented by keys and values
// keys are referred to as properties
// keys gives a way to reference the values
// values can be any data type number string array or even objects

/* 
You are provided with an object called checkObj. Using a for... in loop determine 
if the object contains the property foundNum. if it exists reassign the value of found to 1

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNun 18
}

let found = 0;
*/

/*
You are provided with an empty array called objToArray. Using a for.. in  loop, fill the array witll all the
numbers from the checkObk if they are greater than or equal to 2 
const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNun 18
}

const objToArray = [];

*/

/*
You are provided with an array possibleIterable, Using a for loop, build out the object
divByThree, so that each key is an element of possibleIterable that is divisible by three.
The values of each key should the array index at which 


*/

// What is a method - we've used some of them before
// console.log(Math.floor(1.5)); // rounds
// const arr = ["a", "b", "c"];
// console.log(arr.indexOf("a")); // 0

// console.log();
// push();
// indexOf();

//functions recap
//--> What are functions?

//---> How do we create functions

// function nameOfFunction() {
//   // function body
// }

// - A function is declared using the function keyword.
// - The basic rules of naming a function are similar to naming a variable. It is better to
// write a descriptive name for your function.

// For example, if a function is used to add two numbers, you could name the function add or addNumbers.
// The body of function is written within {}.

// Two Step Process  with functions
// 1. Define it
// 2. Run it

// */

// How do we call this function

// The return statement can be used to return the value to a function call.

//The return statement denotes that the function has ended. Any code after return is not executed.

//If nothing is returned, the function returns an undefined value.

// program to print the text
// declaring a function

// function greet(name) {
//   return "Hello " + name + ":)";
// }

// // calling function
// console.log(greet());

// When a value is passed when declaring a function, it is called parameter.
// And when the function is called, the value passed is called argument.

// We can add functions as properties in objects  --> We call these methods
//Objects are key: value pairs

// const obj = {
//   1: "abc",
//   2: [1, 2, 3, 4],
//   3: { key: 1, key2: 2 },
//   4: function() {

//   }
// };

// const math = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   subtract: function (num1, num2) {
//     return num1 - num2;
//   },
// };

// console.log(math.add(1, 2));
// console.log(math.subtract(4, 2));

const person = {
  firstName: "Stephen",
  lastName: "Curry",
  nickname: "Sdot",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName} AKA ${this.nickname}`);
  },
};
console.log(person.fullName());

// create an object called person

// remember when we say arrays are objects let's take a better look on why that is

const arr1 = ["a", "b", "c", "d"];

console.log(arr1.push("d"));
const fakeArray = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
  push: function (value) {
    let newIdx = this.length;
    this[newIdx] = value;
    this.length += 1;
    return this.length;
  },
};

fakeArray.push("d");
fakeArray.push("e");
fakeArray.push("f");
console.log(fakeArray);
console.log(fakeArray.length);
