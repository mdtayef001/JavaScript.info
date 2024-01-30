// Loops: while and for
// Loops are a way to repeat the same code multiple times.
// The “while” loop
// while (condition) {
//     // code
//     // so-called "loop body"
//   }
// While the condition is truthy, the code from the loop body is executed.

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

i = 3;
while (i) {
  console.log(i);
  i--;
}

// The “do…while” loop

let x = 0;
do {
  console.log(x);
  x++;
} while (x < 3);

// The “for” loop

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let y = 0;
for (y = 0; y < 3; y++) {
  console.log(y);
}
console.log(y);

for (; i < 3; i++) {
  console.log(i);
}

let n = 0;
for (; n < 3; ) {
  console.log(n++);
}

// Breaking the loop

// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", "");
//   console.log(value);
//   if (!value) break;
//   sum += value;
// }

// alert("Sum:" + sum);

// Continue to the next iteration

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (!input) break outer;
  }
}
alert("Done!");
