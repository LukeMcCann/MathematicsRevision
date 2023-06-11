const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;

const generateIntegers = (limit = 1000001) => {
	const MAX_ITER = 1000001;
	let iteration_count = 0;
	const integers = [];
	while (integers.length < limit && iteration_count < MAX_ITER) {
		integers.push(iteration_count);
		iteration_count++;
	}

	return integers;
}

const keepsIdentity = (currentValue, number, operation) => {
	if (operation.name === undefined) {
		throw new Error('Operation Not Supported!');
	}

	if (operation.name === 'addition') {
		return (currentValue + number) === currentValue;
	}

	if (operation.name === 'multiplication') {
		return (currentValue * number) === currentValue;
	}
};

const isIdentityNumber = (number, operation) => {
	const integerArr = generateIntegers();
	return integerArr.every((currentValue) => keepsIdentity(currentValue, number, operation));
}

console.log(isIdentityNumber(0, addition)); // true
console.log(isIdentityNumber(1, addition)); // false
console.log(isIdentityNumber(100, addition)); // false
console.log(isIdentityNumber(1002, addition)); // false
console.log(isIdentityNumber(123214, addition)); // false

console.log(isIdentityNumber(1, multiplication)); // true
console.log(isIdentityNumber(2, multiplication)); // false
console.log(isIdentityNumber(100, multiplication)); // false
console.log(isIdentityNumber(1312432, multiplication)); // false
console.log(isIdentityNumber(234, multiplication)); // false