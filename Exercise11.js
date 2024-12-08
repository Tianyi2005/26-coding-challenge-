//Calculate the average of the numbers in an array of numbers
function Average(numbers) {
    const Average = numbers.reduce((acc, num) => acc + num, 0);
    return Average / numbers.length
}
console.log(Average([10, 20, 30]));