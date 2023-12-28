// Nullish coalescing operator '??'
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

let a = null;
let result =
  a !== null && a !== undefined ? console.log(a) : console.log(`a is = ${a}`);

console.log("fuck you");
