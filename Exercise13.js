// Find the maximum number in an array of numbers
function maxnumber(numbers) {
    let max = numbers[0];
    for(let i = 0; i <= numbers.length; i ++){
        if( max < numbers[i] ){
            max = numbers[i]
        }
    }
    return max   
}
const array = [-1, 3, -4, 5, -6, -7, 8, 9];
console.log(maxnumber(array));