//Calculate the average of the numbers in an array of numbers
function add(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum 
}
console.log(add([10, 20, 30]));