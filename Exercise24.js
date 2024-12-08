// Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2){
    const mergedArray = arr1.concat(arr2);
    return mergedArray;
}
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [11, 12, 13, 14, 15];
console.log(mergeArrays(Array1, Array2));