// Prime or not and 1 to n.

// const isPrime = (n) => {

//     if (n <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(29));

const isPrime = (n) => {
    let finaleres;

    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

const countPrimes = (n) => {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
            count++;
        }
    }
    console.log("Total Count :", count);
}

console.log(countPrimes(100));