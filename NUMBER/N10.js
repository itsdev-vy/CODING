// Armstrong or not.  3-Digit Example (153): \(1^{3}+5^{3}+3^{3}=1+125+27=153\).

const isArmstrong = (n) => {
    let original = n;
    let res = n;
    let sum = 0;
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    while (res > 0) {
        let x = Math.floor(res % 10);
        sum += Math.pow(x, count)
        res = Math.floor(res / 10);
    }

    if (original === sum) {
        console.log('Armstrong')
    } else {
        console.log("not an armstrong")
    }

}

isArmstrong(154);