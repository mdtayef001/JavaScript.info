// alert("I am javascript");

// alert("hello");
// alert("world");

// alert(3 + 2 + 1);

// alert("hello");

// [1, 2].forEach(alert);

// let message;

// message = "Hell0";

// console.log(message);

// let message = "hello";

// console.log(message);

// let message = "hello",
//   age = 24,
//   user = "tayef";

// console.log(message, age, user);

// let user = "Tayef";

// let age = 24;

// let message = "Hello world";

// console.log(user, age, message);

// let message = "hello";
// console.log(message);

// message = "world";

// console.log(message);

// let hello = "Hello world";

// let message = hello;

// console.log(hello, message);

// const COLOR_RED = '"#F00"';

// let color = COLOR_RED;

// console.log(color);

// let name;
// let admin;

// name = "jhon";

// admin = name;

// console.log(admin);

// const ourPlanetName = "Earth";

// const currentUserName = "jhon";

// let message = 123;
// console.log(message);

// message = "tayef is a bolod";
// console.log(message);

// console.log(Infinity);

// console.log(NaN ** 0);

// let name = "jone";

// console.log(`Hello ${name}!`);

// console.log(`the result is ${1 + 2}`);

// let isGreater = 4 > 1;
// console.log(isGreater);

// let age;
// console.log(age);
// age = null;
// console.log(age);

// name = "Ilya";

// console.log(`hello ${1}`);

// console.log(`hello ${"name"}`);

// console.log(`hello ${name}`);

// let age = prompt("How old are you?", 100);

// alert(`You are ${age} years old!`);

// let result = prompt("title");
// alert(result);

// let sign = prompt("What's your sign?");

// if (sign === "tayef") {
//   alert("Wow! I'm your big fan!");
// } else {
//   alert(`fuck you ${sign}`);
// }

// let test = prompt("test", "");

// alert(test);

// let isBoss = confirm("Are you the bos?");

// alert(isBoss);

// let yourName = prompt("What is your Name?", "");

// alert(yourName);

// let value = true;

// console.log(typeof value);

// value = String(value);

// console.log(typeof value);

// let srt = "123";

// console.log(typeof srt);

// let num = Number(srt);

// console.log(typeof num);

// console.log(Boolean("0"));

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(typeof (1 + 2 + "2"));

// let x = 1;

// x = -x;
// console.log(x);

// x = 2;
// let y = 3;
// console.log(x - y);

// console.log(4 ** (1 / 2));

// let s = "Tayef" + " Hosssain" + " Nabil";

// console.log(s);
// console.log(6 - "2");
// console.log(6 / "3");
// console.log(+true);
// console.log(+"");

// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);

// console.log(a);
// console.log(c);

// let count = 1;
// let a = ++count;
// console.log(a);

// let count2 = 1;
// let b = count2++;
// console.log(b);

// let c = 1;
// c++;
// console.log(c);

// let d = 1;
// ++d;
// console.log(d);

// let counter = 1;
// console.log(2 * counter);
// counter++;

// let a = (10 + 2, 3 + 2);
// console.log(a);

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// let result = 5 > 4;
// console.log(result);
// console.log("a" < "A");
// console.log(true != 0);
// console.log(false < 1);

// let a = 0;
// console.log(Boolean(a));
// let b = "0";
// console.log(Boolean(b));
// console.log(a == b);

// console.log(Number(null));
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == null);
// console.log(undefined === null);
// console.log("2" > "12");

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
