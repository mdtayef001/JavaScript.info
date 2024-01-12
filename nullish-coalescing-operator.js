// Nullish coalescing operator '??'
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

let a = null;
let result =
  a !== null && a !== undefined ? console.log(a) : console.log(`a is = ${a}`);

const parent = (n) => {
  const num = n;
  return function (num) {
    return num;
  };
};

console.log(parent(10));

console.log("hi");
