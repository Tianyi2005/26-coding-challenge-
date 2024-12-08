// Create a function that will return in an array the first “p” prime numbers greater than “n”
function is_prime(n){
    if (n <= 1) return false;
    for(let i = 2; i <= ((n ** 0.5) + 1); i ++ ){
        if (n % i === 0) return false;
    }
    return true;
}

function print_primes(p, n){
    primes = [];
    num = n + 1;
    while (primes.length < p){
        if (is_prime(num)) primes.push(num);
        num += 1;
    }
    return primes;
}

let p = 30
let n = 5
console.log(print_primes(p, n))