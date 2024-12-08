// Exercise 18: Print the first 100 prime numbers
function is_prime(n){
    if (n <= 1) return false;
    for(let i = 2; i <= ((n ** 0.5) + 1); i ++ ){
        if (n % i === 0) return false;
    }
    return true;
}

function print_primes(limit){
    primes = [];
    for (num = 0;  num <= limit; num ++ ){
        if (is_prime(num)) primes.push(num);
    }
    return primes
}
let limit = 100
console.log(print_primes(limit))