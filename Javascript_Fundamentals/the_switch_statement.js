// const num = 1000000;
// console.log(num.toLocaleString("en-IN"));
// console.log(Math.min(2, 3, 42, 41, 23, 3, 45));
// console.log(Math.max(2, 3, 42, 41, 23, 3, 45));

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// +++++++++++++++++++++++++date&time+++++++++++++++++++++++++

// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023, 1, 28, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(myTimeStamp / 1000));

// +++++++++++++++++++switch++++++++++++++++++++++++

// A switch statement can replace multiple if checks.

// It gives a more descriptive way to compare a value with multiple variants.

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly");
    break;
  case 5:
    console.log("too big");
    break;
  default:
    console.log("I don't know such value");
}

let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    console.log("this runs, because +c is 1, exactly equals d+1");
    break;
  default:
    console.log("this doesn't run");
}

let x = 3;
switch (x) {
  case 4:
    console.log("Right");
    break;
  case 3:
  case 5:
    console.log("Worng");
    console.log("why don't take match class");
    break;
  default:
    console.log("the result is strange. Really.");
}

let arg = "0";

switch (arg) {
  case "0":
  case "1":
    console.log("One or zero");
    break;
  case "2":
    console.log("Two");
    break;
  case 3:
    console.log("Never executes!");
    break;
  default:
    console.log("An unknown value");
}

// +++++++++++++++Task+++++++++++++++++++

let browser = "Brave";

if (browser === "Edge") {
  console.log("You Have got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "FireFox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okey we support these browers too");
} else {
  console.log("We hope this page looks good");
}

let l = 1;
switch (l) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2, 3");
    break;
  default:
    console.log("Doesn't match");
}
