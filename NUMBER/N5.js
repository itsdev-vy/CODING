// Sum of first n numbers().
// Input: n = 3
// Output: 6
// Explanation: 1 + 2 + 3 = 6

const sofn = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}

console.log(sofn(3));