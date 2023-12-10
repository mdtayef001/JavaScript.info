// let year = prompt("In which year ECMAScript-2015 specification published?", "");
// let cond = year == 2015;
// if (year < 2015) {
//   console.log("Yes You are right");
//   console.log("You are so smart");
//   console.log("Too early..");
// } else if (year > 2015) {
//   console.log(
//     "Fuck the shut up! You pice of shit! You don't even no this. Why are you learning JavaScript?"
//   );

//   console.log("Too Late..");
// } else {
//   console.log("Exactly!");
// }

// let accessAllowed;
// let age = prompt("How old are you?", "");
// if (age < "18") {
//   accessAllowed = false;
// } else {
//   accessAllowed = true;
// }
// console.log(accessAllowed);

// let accessAllowed = age > 18 ? true : false;
// console.log(accessAllowed);

// let accessAllowed = age > 18;
// console.log(accessAllowed);

// let age = prompt("age?", 18);

// let message =
//   age < 3
//     ? "Hi baby!"
//     : age < 18
//     ? "Hello!"
//     : age < 100
//     ? "Greetting"
//     : "What an unusual age!";

// console.log(message);

// let company = prompt("Which company created javescript", "");

// company == "netscap" ? console.log("Right") : console.log("wrong");

// let companyName = prompt("What's the “official” name of JavaScript?", "");
// if (companyName === "ECMAScript") {
//   console.log("Right");
// } else {
//   console.log("You don't know? “ECMAScript”!");
// }

// let value = prompt("write a number", 100);

// if (value > 0) {
//   console.log(1);
// } else if (value < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

let a = 4;
let b = 2;

let result = a + b < 4 ? "Below" : "Over";
console.log(result);

const logIn = "employee";

let message =
  logIn === "employee"
    ? "hello"
    : logIn === "director"
    ? "greetings"
    : logIn === ""
    ? "no Log In"
    : "";

console.log(message);
