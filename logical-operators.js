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

// a chain of OR || returns the first truthy value or the last one if no truthy value is found

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "Tayef";
console.log(firstName || lastName || nickName); // "Tayef"

true || console.log("print");
