// Fibonacci.

// const fib = (n) => {
//     let prev = 0;
//     let curr = 1;
//     let next;

//     console.log(prev);
//     console.log(curr);

//     for (let i = 2; i <= n; i++) {
//         next = prev + curr;
//         console.log(next);
//         prev = curr;
//         curr = next;
//     }
// }



const fib = (n) => {
    let prev = 0;
    let curr = 1;
    let series = [prev, curr];

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        series.push(next);
        prev = curr;
        curr = next;
    }
    return series.join();
}

console.log(fib(5));