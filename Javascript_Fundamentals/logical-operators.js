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

// && (AND)
// AND returns true if both operands are truthy and false otherwise

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

hour = 12;
minute = 30;
if (hour === 12 && minute === 30) {
  console.log("The time is 12:30");
}

if (1 && 0) {
  console.log("True");
} else {
  console.log("False");
}

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

console.log(1 && 2 && null && 3); // null

console.log(1 && 2 && 3); // 3, the last one

let x = 1;
x > 0 && console.log("Greater than zero!");

if (x > 0) console.log("Greater than zero!");

// !(NOT)
// Converts the operand to boolean type: true/false
// Returns the inverse value.
console.log(!true);
console.log(!0);

// A double NOT !! is sometimes used for converting a value to boolean type
// the first NOT converts the value to boolean and returns the inverse
// the second NOT inverses it again

console.log(!!"non-emty string");
console.log(!!null);

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

console.log(null || 2 || undefined);

// alert(alert(1) || 2 || alert(3));

console.log(1 && null && 2);

// alert(alert(1) && alert(2));

console.log(null || (2 && 3) || 4);

// tasks

let age = 15;
if (age >= 14 && age <= 90) {
  console.log(`the age is : ${age}`);
} else {
  console.log("the age is not between 14 to 90");
}

if (!(age >= 14 && age <= 90)) {
  console.log(`the age is not between 14 to 90 => ${age}`);
}

if (age < 14 || age > 90) {
  console.log(age);
}

if (-1 || 0) {
  console.log("firse");
}
if (-1 && 0) {
  console.log("second");
}
if (null || (-1 && 1)) {
  console.log("third");
}

const userName = prompt("Who's there?", "");
if (userName === "Admin") {
  const pass = prompt("Password", "");
  if (pass === "TheMaster") {
    alert("welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
