// Reverse a string
function reverseString(string){
    let reversed = '';
    for(i = string.length - 1; i >= 0; i --){
        reversed += string[i];
    }
    return reversed;;
}
const originalstring = "Hello yllord!"
console.log(reverseString(originalstring))