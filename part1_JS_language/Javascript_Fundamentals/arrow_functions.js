// Arrow functions, the basics

let sum = (a, b) => a + b;
console.log(sum(1, 2));

let double = (n) => n * n;
console.log(double(5));

// Arrow functions can be used in the same way as Function Expressions.
let age = 18;

let welcome =
  age < 18 ? () => console.log("Hello") : () => console.log("Greetings!");

welcome();

// +++++++++++++++TASK+++++++++++++++

function ask(question, yes, no) {
  if (question) yes();
  else no();
}

ask(
  "",
  () => {
    console.log("You agred.");
  },
  () => {
    console.log("You canceled the execution.");
  }
);
