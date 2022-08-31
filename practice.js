// function exponentiate(base, power) {
//   // create a variable to update our result every loop
//   let result = 1;
//   for (let i = 0; i < power; i++) {
//     console.log("i", i);
//     result *= base;
//   }
//   return result;
// }

// console.log(exponentiate(2, 3));

function cesarCypher(string, num) {
  let newString = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    let newIndex = alphabet.indexOf(character) + num;
    console.log(alphabet[newIndex]);
  }
}

console.log(cesarCypher("abc", 2));
