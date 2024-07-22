const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numberArray) {
	let result = 0;
  for (let number of numberArray) {
    result += number;
  }
  return result
};

const multiply = function(numberArray) {
  return numberArray.reduce((result, number) => result * number);
};

const power = function(firstNumber, secondNumber) {
	return Math.pow(firstNumber, secondNumber);
};

const factorial = function(number) {
	let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
