// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function difference(arr1, arr2){
    return arr1.filter(element => !arr2.includes(element));
}
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [11, 12, 3, 14, 5];
console.log(difference(Array1, Array2));