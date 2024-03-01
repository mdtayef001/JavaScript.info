// Function expressions
// It allows us to create a new function in the middle of any expression.
// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

const sayHi = function () {
  console.log("Hello");
};

sayHi();

// Function is a value

const func = sayHi;
func();

// Callback functions
// The idea is that we pass a function and expect it to be “called back” later if necessary.

// function ask(question, yes, no) {
//   if (question) yes();
//   else no();
// }

// function showOk() {
//   console.log("You agreed");
// }

// function showCancel() {
//   console.log("You canceled the execution");
// }

// const question = "Do you agree ?";

// ask(question, showOk, showCancel);

function ask(question, yes, no) {
  if (question) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    console.log("you agreed");
  },
  function () {
    console.log("You canceled the execution.");
  }
);

// Function Expression vs Function Declaration

// Function Declaration: a function, declared as a separate statement, in the main code flow
// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
// A Function Expression is created when the execution reaches it and is usable only from that moment.

sayHello("Hello");

function sayHello(hello) {
  console.log(hello);
}

// sayhello("Hello");

// let sayhello = function (hello) {
//   console.log(hello);
// };

// let age = 20;

// let welcome;

// if (age < 18) {
//   welcome = function () {
//     console.log("Hello!");
//   };
// } else {
//   welcome = function () {
//     console.log("Greetings!");
//   };
// }

// welcome();

let age = 18;

let welcome =
  age < 18
    ? function () {
        console.log("hello");
      }
    : function () {
        console.log("Grettings!");
      };
welcome();
