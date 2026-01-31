// Sum of n numbers(2537 → 17).

const son = (n) => {
    let result = 0;
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10)
    }
    return result;
}

console.log(son(2537));



// const son = (n) => {
//     let result = 0;
//     for (let x of String(n)) {
//         result += Number(x);
//     }
//     return result;
// }

// console.log(son(2537));

// const son = (n) => {
//     let result = 0;
//     let x = [...String(n)];

//     for (let i = 0; i < x.length; i++) {
//         result = result + Number(x[i]);
//     }
//     return result
// }

// console.log(son(2537));



// const son = (n) => {
//     let x = [...String(n)];
//     let result = x.reduce((acc, curr) => {
//         let y = acc + Number(curr);
//         return y;
//     }, 0);
//     return result;
// }

// console.log(son(2537));



