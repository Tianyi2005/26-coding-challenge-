//Rotate an array to the left 1 position
function rotateleft(arr) {
    if (arr.length === 0) return arr;
    const firstElement = arr[0];
    for(let i = 1; i < arr.length; i ++){
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = firstElement;
    return arr;
} 
const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateleft(originalArray);
console.log(rotatedArray);

