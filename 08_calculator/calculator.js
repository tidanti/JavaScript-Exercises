const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
  if (numArray.length === 0) {
    return 0;
  }

	return numArray.reduce((total, num) => {
    return total += num;
  }, 0);
};

const multiply = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((total, num) => {
    return total *= num;
  }, 1);
};

const power = function(num, power) {
	return Math.pow(num, power); // ?? rewrite?
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  let numFactorial = 1;
  for (let i = num; num > 1; num--) {
    numFactorial *= num;
  }

  return numFactorial;
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
