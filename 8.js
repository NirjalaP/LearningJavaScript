// 8. Function that takes a number as input and checks if it is even. If it's even, return "Even," otherwise return "Odd".
function OddorEven(number){
    if (number%2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

console.log(OddorEven(6));//Output:Even.
console.log(OddorEven(3));//Output:Odd.
