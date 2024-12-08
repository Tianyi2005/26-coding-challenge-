//Rotate an array to the right 1 position
function rotateright(arr) {
    if (arr.length === 0) return arr;
    const lastElement = arr[arr.length - 1];
    for(let i = arr.length - 1; i > 0; i --){
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
} 
const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateright(originalArray);
console.log(rotatedArray);

