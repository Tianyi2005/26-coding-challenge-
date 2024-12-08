// Create a function that will return the first n Fibonacci numbers using recursion
function Fibonacci(n) {
    if (n <= 0){
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    else{
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
const n = 10;
console.log(`The ${n}th Fibonacci number is ${Fibonacci(n)}`);
