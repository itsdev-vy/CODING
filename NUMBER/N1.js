// Factorial. 5*4*3*2*1 = 120

const factorial = (n) => {
    let fact = n;

    while (n > 1) {
        fact = fact * (n - 1);
        n--;
    }
    return fact;
}

console.log(factorial(6));

