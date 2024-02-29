// Quite often we need to perform a similar action in many places of the script.
// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
function showMessage() {
  console.log("Hello everyone!");
}

showMessage();
showMessage();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Local variables
// A variable declared inside a function is only visible inside that function.

function localVariable() {
  let message = "Hello I'm JavaScript!";
  console.log(message);
}

localVariable();
// console.log(message);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Outer variables
// A function can access an outer variable as well

let userName = "John";

function outerVariables() {
  userName = "Bod";
  let message = "Hello, " + userName;
  return message;
}

console.log(userName);
console.log(outerVariables());
console.log(userName);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Parameters
// We can pass arbitrary data to functions using parameters.
// the function changes from, but the change is not seen outside, because a function always gets a copy of the value

function show_Message(from, text) {
  return `${from ?? "unkonw"}: ${text ?? "no text given"}`;
}

let from = "Tayef";
console.log(show_Message(from));
console.log(from);

// Alternative default parameters
// Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”

function ShowCount(count) {
  return count ?? "Unknown";
}

console.log(ShowCount(0));
console.log(ShowCount(null));
console.log(ShowCount());

// Returning a value
// A function can return a value back into the calling code as the result.

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));

let age = 10;

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// A function with an empty return or without it returns undefined

function doNothing() {
  return;
}
console.log(doNothing() === undefined);

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
showPrimes(10);

// ++++++++++++++++++++++++++++++++++task+++++++++++++++++++++

function check_age(age) {
  if (age > 18) {
    return true;
  }
  //  else {
  //   return console.log("Did parents allow you?");
  // }
  return "Did parents allow you?";
}
console.log(check_age(20));

function check_Age(age) {
  return age > 18 ? true : "did parents allow you?";
}

console.log(check_Age(10));

function checK_age(age) {
  return age > 18 || "did parent allow you?";
}

console.log(checK_age(20));

let x = 3;
let n = 4;

if (n < 1) {
  console.log(`Power ${n} is not supported, use a positive integer`);
} else {
  console.log(pow(x, n));
}

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

// ++end==
