// || (OR)
// If any of its arguments are true, it returns true, otherwise it returns false
// If an operand is not a boolean, it’s converted to a boolean for the evaluation.

console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

if (1 || 0) {
  console.log("truthy");
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

let hour = 9;
let isWeekend = false;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed.");
} else {
  console.log("The office is open.");
}
