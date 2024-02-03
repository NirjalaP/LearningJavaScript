//4. Function that takes a number as input and checks if it is positive, negative, or zero. Return "Positive," "Negative," or "Zero" accordingly.


function checkNumber(num) {
    if (num < 0) {
        return 'Negative';
    } else if (num > 0) {
        return 'Positive';
    } else {
        return 'Zero';
    }
}

// Example usage:
console.log(checkNumber(5));//positive
