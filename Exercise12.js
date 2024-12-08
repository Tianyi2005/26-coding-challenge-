// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function filterpositivenumbers(numbers) {
    let array = [];
    for(let i = 0; i <= numbers.length; i ++){
        if( numbers[i] > 0 ){
            array.push(numbers[i]);
        }
    }
    return array   
}
const array = [-1, 3, -4, 5, -6, -7, 8, 9];
console.log(filterpositivenumbers(array));