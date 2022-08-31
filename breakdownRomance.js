// -> [ 'ever', 'since', 'i', 'left', 'the', 'city', 'you', 'you', 'you', 'you', 'and', 'me', 'we', 'just', 'dont', 'get', 'along' ]
// declare a function parse that takes in a string sentence as input

// declare function parseText that that takes in our input string as an argument
function parseText(sentence) {
  return sentence
    .toLowerCase() // lowercase all characters in our text string
    .replace(/[^a-z\s]/gi, "") // use regex to remove all punction and whitespace
    .split(" "); // convert the string into an array using split method with a space delimeter " "
}

// Now we need to write a function that uses that array of words to
// generate a Markov Chain. Remember, for our project the Markov Chain will be a dictionary of all
// the unique words in our corpus, and an array of all the words that follow it.

// [ 'ever', 'since', 'i', 'left', 'the', 'city', 'you', 'you', 'you', 'you', 'and', 'me', 'we', 'just', 'dont', 'get', 'along' ]
//     0        1      2     3       4      5       6     7       8      9      10     11     12     13      14     15      16
//                                                                                                        _
//                                                                                                                  i     i + 1

// declare a function generateWordPairs that takes in stringOfWords as input
function generateWordPairs(stringOfWords) {
  // create an object keys our current word and the values are going to be the the word after it in an array
  const wordPairs = {};
  // ensure that we parse our string of words to a lowercase, no space and convert to an array
  const arrayOfWords = parseText(stringOfWords);

  // loop over array of words to get each word - to construct our object
  for (let i = 0; i < arrayOfWords.length - 1; i++) {
    const currentWord = arrayOfWords[i];
    const nextWord = arrayOfWords[i + 1];
    // assign our key - currentword value - an array of the next word
    // if the key exist already
    if (currentWord in wordPairs) {
      // add to our array the new next word
      wordPairs[currentWord].push(nextWord);
    } else {
      // otherwise create a new key value pair entry word : [word after it ]
      wordPairs[currentWord] = [nextWord];
    }
  }
  // return the newobject
  return wordPairs;
}
/*
{ ever: [ 'since' ],
  since: [ 'i' ],
  i: [ 'left' ],
  left: [ 'the' ],
  the: [ 'city' ],
  city: [ 'you' ],
  you: [ 'you', 'you', 'you', 'and' ],
  and: [ 'me' ],
  me: [ 'we' ],
  we: [ 'just' ],
  just: [ 'dont' ],
  dont: [ 'get' ],
  get: [ 'along' ] }
*/
// let wordPairs = generateWordPairs(parseText(text));
// console.log(wordPairs);

// wordArray[1]
// [ 'you', 'you', 'you', 'and' ] length =  4
//    0       1       2     3
//                  -

// let wordArray = ["you", "you", "cool", "yes", "no"];

// Create a function to randomlyChoose a word from our value of array of words - takes in a wordArray as input
function randomlyChooseIndex(wordArray) {
  // we can choose a random word by getting a random index  =>  Use Math.floor(Math.random() * wordArray.length)
  // create a variable randomIndex to get the random position of our wordArray
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  // return the new word at the new position
  return wordArray[randomIndex];
}

// The writeLine function is very misleading, what this problem wants to acutally do is take in the
// word corpus sentence string and the numberOfLines
// writeLine function takes in the string text and the number of lines we want our program to have
function writeLine(stringText, numOflines) {
  // use the parse text function to convert our string to lowercase, remove spaces and array
  let words = parseText(stringText);
  // generate word pairs of the parse text
  const getWordPairs = generateWordPairs(stringText);
  // randomly choose a word from our word array value from our word pairs
  let word = randomlyChooseIndex(words);
  // start our phrase with the random word we've picked
  let phrase = [word];

  // Search our getWordPairs obj for a new word until we've reached the min_length of lines we need
  while (getWordPairs[word]) {
    // Look for the next word in from our object
    let nextWord = getWordPairs[word];
    // get the new word
    word = randomlyChooseIndex(nextWord);
    phrase.push(word);

    if (phrase.length > numOflines) {
      break;
    }
  }

  return phrase.join(" ");
}
// return ONE line of the poem

// create a function named generatePoem --> stringSentence, numberOfLines
function generatePoem(corpus, lines) {
  // Our poem is going to print the numberOfLines we have
  for (let i = 0; i < lines; i++) {
    // Randomly get a new line for the max lines we have
    let l = Math.floor(Math.random() * 10) + 1;
    console.log(writeLine(corpus, l));
  }
}

let text =
  "Ever since I left the city, you, you, you You and me we just don't get along";

console.log(generatePoem(text, 6));
