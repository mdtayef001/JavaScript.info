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

let User = {
  name: "Tayef",
  age: 22,
  game: "dota2",
};

let keY = prompt("what do you want know about the user?", "");

console.log(User[keY]);
