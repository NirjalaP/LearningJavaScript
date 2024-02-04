// 5. Function that takes two numbers as input and returns the larger of the two.
function compare(a,b){
    if (a>b){
        return a + ' is greater.';
    }
    else if (a<b){
        return b + ' is greater.';
    }
    else
        return 'Invalid';
}

const result = compare (2,3); // Explanatory way
console.log (result);// output: 3 is greater.

console.log (compare(8,9));//Shorter way. Output: 9 is greater.