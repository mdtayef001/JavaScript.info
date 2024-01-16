// Nullish coalescing operator '??'
// ?? returns the first argument if it’s not "null/undefined". Otherwise, the second one.

let a = null;
let result =
  a !== null && a !== undefined ? console.log(a) : console.log(`a is = ${a}`);

let user;
console.log(user ?? "Anonymous");

user = "Jone";
console.log(user ?? "Anonymous");

let firstName = null;
let lastName;
let nickName = "Tayef Hossain Nabil";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

let height = 0;
console.log(height || 100);
console.log(height ?? 100);

// Precedence
// The precedence of the ?? operator is the same as ||
// That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.
// So we may need to add parentheses in expressions like this:

let hig = null;
let wid = null;
let area = (hig ?? 100) * (wid ?? 50);
console.log(area);
