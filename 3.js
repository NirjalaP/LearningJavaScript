// 3. Function that takes an array of numbers as input and returns the sum of all the numbers in the array.
function arraysum(numbers){
    let sum=0;
    for (let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const sumArray = [5,10,15,20];
const add = arraysum(sumArray);
console.log (add);