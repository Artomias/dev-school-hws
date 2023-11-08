function isPrime (number) {
    if(num === 1)
        return false;
    if(number > 1){
        for(let i = 2; i < number; i++){
            if (number % i === 0)
                return false;
        }
    } else if (number < 1) {
        return false;
    }

    return true;
}

console.log(isPrime(2147483648));
console.log(isPrime(3));
console.log(isPrime(-3));
console.log(isPrime(-512));
console.log(isPrime(0));
console.log((isPrime(-1)));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(-2));