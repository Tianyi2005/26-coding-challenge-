//Calculate the sum of digits of a positive integer number
function sumOfDigits(num) {
    return num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
}
console.log(sumOfDigits(123));
