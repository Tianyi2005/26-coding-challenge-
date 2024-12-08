// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function uniqueArray(arr1, arr2){
    const uniqueToArr1 = arr1.filter(num => !arr2.includes(num));
    const uniqueToArr2 = arr2.filter(num => !arr1.includes(num));
    return [...uniqueToArr1, ...uniqueToArr2]
}
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [11, 12, 3, 14, 5];
console.log(uniqueArray(Array1, Array2));