// EXAMPLE 1 - Get the Part after the Last Occurrence in a String in JavaScript

const str = '/hello/world/index.html';

const afterLastSlash = str.slice(str.lastIndexOf('/') + 1);
console.log(afterLastSlash); // 👉️ index.html

// ------------------------------------------------------------------

// // EXAMPLE 2 - Handling the scenario where the character isn't found

// const str = '/hello/world/index.html';

// let result = '';

// const char = '@';

// if (str.lastIndexOf(char) !== -1) {
//   result = str.slice(str.lastIndexOf(char) + 1);
// }

// console.dir(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Creating a reusable function

// function afterLastOccurrence(string, char) {
//   return string.slice(string.lastIndexOf(char) + 1);
// }

// // 👇️ index.html
// console.log(afterLastOccurrence('/hello/world/index.html', '/'));

// // 👇️ com
// console.log(afterLastOccurrence('bobby,hadz,com', ','));

// // 👇️ com
// console.log(afterLastOccurrence('bobby_hadz_com', '_'));
