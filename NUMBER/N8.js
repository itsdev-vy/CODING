// swap two variables without using the 3rd variable.

let a = 5;
let b = 10;

// console.log("Before Swap : ", a, b);

// [a, b] = [b, a];

// console.log("After Swap : ", a, b);


console.log("Before Swap : ", a, b);

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap : ", a, b);