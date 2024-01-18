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
