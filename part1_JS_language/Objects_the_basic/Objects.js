// Objects

let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

// Property values are accessible using the dot notation

console.log(user);
user.isAadmin = true;
console.log(user);
delete user.age;
console.log(user);

// Square brackets
// For multiword properties, the dot access doesn’t work
// There’s an alternative “square bracket notation” that works with any string

console.log(user["likes birds"]);

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows

let key = "tayef";

user[key] = true;
console.log(user);

// let User = {
//   name: "Tayef",
//   age: 22,
//   game: "dota2",
// };

// let keY = prompt("what do you want know about the user?", "");

// console.log(User[keY]);

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let fruit = "apple";

let bag = {};
bag[fruit + "Computers"] = 5;
console.log(bag.appleComputers);

// Property names limitations
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction

let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: "test",
};
console.log(obj.for + obj.let + obj.return);
console.log(obj[0]);
console.log(obj["0"]);

// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

let User = {
  name: "John",
  age: 30,
  test: undefined,
};
console.log(user.noSuchProperty === undefined);
console.log("age" in User);
console.log("blabla" in User);
console.log(User.test);
console.log("test" in User);

// The "for..in" loop
// To walk over all key of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

for (let key in User) {
  console.log(key);
  console.log(User[key]);
}

// Ordered like an object
// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "Usa",
};

for (let key in codes) {
  console.log(key);
}

let code = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "Usa",
};
for (let key in code) {
  console.log(key);
}
// if the keys are non-integer, then they are listed in the creation order, for instance

let userS = {
  name: "Jhon",
  surname: "Smith",
};
userS.age = 40;

for (const key in userS) {
  console.log(key);
}

// ++++++++++++++++++++++++++++++++++taks+++++++++++++++++++++++++++++

const Fuck = {
  why: false,
  havingFun: true,
};
