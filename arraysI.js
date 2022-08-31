// Arrays
// a data structure that stores a collection of ordered data

// creating an array
// let students = [];

// let shoppingList = ["cereal", "cheese", "ice"];
// // typeof

// .isArray

// Bracket Access ---> Arrays are indexed just like strings and how I can access each indivdual item at a time

// const colors = ["red", "orange", "yellow", "green"];
// //   index            0       1         2          3
// console.log(colors[0]); //
// console.log(colors[1]); //
// console.log(colors[colors.length - 1]); //

// for (let i = 0; i < colors.length; i++) {
//   console.log(i, colors[i]);
// }

// Bracket Assignment

// Modifying Arrays
const colors = ["rad", "orange", "yellow", "green"];
// console.log(colors.length);
// colors[0] = "red";
// colors[colors.length - 1] = "violet";
// console.log(colors[4]);
// console.log(colors);

// const numbers = [1, 2, 3, 4, 5];
// const myCollecttion = [12, "dog", true, null, NaN];

// let shoppingList = ["Cheddar Cheese", "2% Milk"];
// shoppingList[shoppingList.length - 1] = "Whole Milk";
// console.log(shoppingList);

// Data Structures Properties vs Methods
// What's the difference

// .length property
// console.log(colors.length);

// the push method - add to end
// const topSongs = ["One More Chance", "H to the Izzo", "All Falls Down"];
// console.log(topSongs.length); // 3
// console.log(topSongs[2]);
// console.log(topSongs[topSongs.length - 1]);
// topSongs.push("Excuse Me Miss");
// console.log(topSongs.length);
// console.log(topSongs[2]);
// console.log(topSongs[topSongs.length - 1]);

// console.log(topSongs);
//  .length
//  .pop()
// pop method ---> removes the last item from the array and returns the value to you
// const topSongs = ["One More Chance", "H to the Izzo", "All Falls Down"];

// console.log(topSongs);

// shift  - remove from the start
const topSongs = ["One More Chance", "H to the Izzo", "All Falls Down"];
// console.log(topSongs.shift());
// console.log(topSongs);

//unshift - add to the start
// topSongs.unshift("Shake Ya Tailfeather");
// console.log(topSongs);

// concat -merges two arrays together
const fruits = ["apple", "banana"];
const veggies = ["asparagus", "brussel sprouts"];

// console.log(allFoods);

// we can also concat three items together
// const meats = ["steak", "chicken breast"];
// const allFoods = fruits.concat(veggies, meats);

// console.log(allFoods);

// Looking for values:
// includes method ---> returns true or false if the element is in the array
// --- we also have a an additional argument from index which can be our starting point
// it has to be a direct match
const ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
];
// console.log(ingredients.includes("corn starch"));

// indexOf method ----> returns the index of the provided argument if it's not found it returns -1
// this also has the from index
// console.log(ingredients.indexOf("eel"));
// console.log(ingredients.indexOf("maple syrup"));

// reverse method -- reverses the original array
const letters = ["T", "C", "E", "P", "S", "E", "R"];
// console.log(letters.reverse());

// join --> creates a string from an array
// let newString = letters.reverse().join(".");
// console.log(newString);
// letters.join("&")
// letters.join(".")

// chainging methods -->
//letters.reverse().join(".")

// split converts characters into an array
// console.log(newString.split("."));

// slice method removes a section of an array an returns a new array of that piece sliced out
// start index and the second number is exclusive meaning

const animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
// index              0          1        2        3       4         5
//                   -6          -5        -4        -3      -2       -1
// let swimmers = animals.slice(1, 4);
// console.log("swimmers", swimmers);
// let mammals = animals.slice(3, 5);
// console.log("mammals", mammals);
// let reptiles = animals.slice(4);
// console.log("reptiles", reptiles);
// console.log(animals.slice());

// we can also go backwards

// we can also make a copy of arrays

// Reference Types vs Primative Types

// Value type variable
// Using Const on string
// let city = "Lisbon";
// city = "London"

// let nums = [5, 6, 7, 8];

/* You are given three different one of first names, last names, and places Imagine that each array 
Imagine that each array element at a certain index corresponds to one user

For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] 
and I am from [place] into the array holding respective bios 


// example: My name is Jon Snow and I and from The Wall

const firstNames = ["Mary", "Kris", "Janelle"]
const lastNames = ["Snow", "Bowles", "Wong"]
const places = ["The Wall", "Winterfell", "Kings Landing"]

const bios = [];
*/

// create a function getSum that takes in an array as input and returns the sum of all the values in the array
// const array = [1, 2, 3, 4, 5];

// create a function named doubles that takes in an array as input and returns a new array where all the even indices are doubled
// const array2 = [1, 2, 3, 4, 5, 6]

// Create a function increaseByTwo that takes in an array as an argument. Return an array that adds to each element
// const array = [1, 2, 3, 4, 5];

// for (let i = 1; i <= 10; i++) {
//   console.log("OUTER LOOP", i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log("  INNER LOOP", j);
//   }
// }

// let puzzle = [
//   [8, 9, 5, 7, 4, 2, 1, 3, 6],
//   [2, 7, 1, 9, 6, 3, 4, 8, 5],
//   [4, 6, 3, 5, 8, 1, 7, 9, 2],
//   [9, 3, 4, 6, 1, 7, 2, 5, 8],
//   [5, 1, 7, 2, 3, 8, 9, 6, 4],
//   [6, 8, 2, 4, 5, 9, 3, 7, 1],
//   [1, 5, 9, 8, 7, 4, 6, 2, 3],
//   [7, 4, 6, 3, 2, 5, 8, 1, 9],
//   [3, 2, 8, 1, 9, 6, 5, 4, 7],
// ];

// // 3 / 3 = 1
// // 0/3 = 0
// // [1][0]

// // 1 * 3 = 3
// // 0 * 3 = 0

// // (row / 3) x 3 + column / 3

// function getSection(grid, x, y) {
//   x *= 3;
//   y *= 3;

//   let section = [];

//   for (let i = y; i < y + 3; i++) {
//     for (let j = x; j < x + 3; j++) {
//       section.push(puzzle[i][j]);
//     }
//   }
//   return section;
// }

// // console.log(getSection(puzzle, 1, 0));

// for (let i = 1; i <= 10; i++) {
//   console.log("OUTER LOOP", i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log("  INNER LOOP", j);
//   }
// }

// const nested = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row = 0; row < nested.length; row++) {
//   console.log(nested[row]);
//   for (let col = 0; col < nested[row].length; col++) {
//     console.log(nested[row][col]);
//   }
// }

// for (let row = 0; row < nested.length; row++) {
//   console.log(nested[row]);
//   for (let col = 0; col < nested[row].length; col++) {
//     console.log(nested[row][col]);
//   }
// }

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    const character = string[i];
    reversedString = reversedString + character;
  }
  console.log(reversedString);
  return reversedString;
}

console.log(reverseString(str));
