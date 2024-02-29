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
