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

// outer: for (let i = 0; i < 3; i++) {
//   inner: for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");
//     if (!input) break outer;
//   }
// }
// alert("Done!");

let m = 3;
while (m) {
  console.log(m--);
}

let k = 0;
while (++k < 5) console.log(k);

let l = 0;
while (l++ < 5) console.log(l);

let g = 0;
while (g < 5) {
  console.log(g);
  g++;
}

for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("even number:" + i);
  } else {
    console.log("odd number:" + i);
  }
}

let v = 0;
while (v < 3) {
  console.log(v++);
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

console.log(num);

let N = 10;

nextPrime: for (let i = 2; i <= N; i++) {
  // console.log(i);
  for (let j = 2; j < i; j++) {
    // console.log(j);
    if (i % j === 0) continue nextPrime;
    // console.log(j);
  }
  console.log(i);
}
