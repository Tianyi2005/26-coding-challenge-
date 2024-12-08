// Print the first 10 Fibonacci numbers without recursion
function Fibonacci(n){
    let fibbo = [0, 1];
    for(let i = 2; i < n; i ++){
        fibbo[i] = fibbo[i - 1] + fibbo[i - 2];
    }
    console.log(fibbo.slice(0,n).join(', '))
}

Fibonacci(10)