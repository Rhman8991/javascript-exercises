const sumAll = function(firstNumber, secondNumber) {
    const minNumber = Math.min(firstNumber, secondNumber);
    const maxNumber = Math.max(firstNumber, secondNumber);
    
    if (
        minNumber < 0 ||
        typeof firstNumber !== "number" ||
        typeof secondNumber !== "number" ||
        !Number.isInteger(firstNumber) ||
        !Number.isInteger(secondNumber) 
    ) {
        return 'ERROR'
    }

    const numberArray = []
    for (let i = minNumber; i <= maxNumber; i++) {
        numberArray.push(i)
    }

    return numberArray.reduce((sum, element) => sum += element)
};

// Do not edit below this line
module.exports = sumAll;
