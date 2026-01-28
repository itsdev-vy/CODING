// Palindrome. 121 is a palindrome

const palindrome = (n) => {
    let original = n.toString();
    let str = original;
    let reverse = str.split('').reverse().join('');

    if (original === reverse) {
        return true
    } else {
        return false
    }
}

// const palindrome = (n) => {
//     let start = Math.floor(n / 100);
//     let end = n % 10;
//     if (start === end) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(palindrome(121));