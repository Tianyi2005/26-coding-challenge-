// Reverse an array
function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while (start < end){
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start ++;
        end --;
    }
    return arr;
}
const originalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(originalArray))