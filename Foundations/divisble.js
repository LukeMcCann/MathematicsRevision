// We could easily check whether something is divisible using modulo
// alone in JS, however, the point of this exercise is to cement
// the shorthand method of Divisibility using our shorthand rules
// to visualise what our thought process when doing this may
// look like in code. We still modulo as we do that in our heads,
// a computer is far better at handling these numbers than us,
// so this is entirely pointless other than for a thought exercise.

// We can tell if a number is divisible at a glance following,
// a few simple rules.
const divisibleBy = (digit) => {
	if (digit === 2) {
		return (number) => {
			const evenDigits = [0, 2, 4, 6, 8];
			const lastDigit = `${number}`.slice('-1');
			return evenDigits.includes(parseInt(lastDigit, 10));
		};
	}

	if (digit === 3) {
		return (number) => {
			return `${number}`.split('').reduce(
				(partialSum, a) => partialSum + a
			) % 3 === 0;
		};
	}

	if (digit === 4) {
		return (number) => {
			return `${number}`.slice('-2').split('').reduce(
				(partialSum, a) => partialSum + a
			) % 4 === 0;
		};
	}

	if (digit === 5) {
		return (number) => {
			const lastDigit = `${number}`.slice('-1');
			return parseInt(lastDigit, 10) === 5 || parseInt(lastDigit, 10) === 0;
		}
	}

	if (digit === 6) {
		const divisibleBy2 = divisibleBy(2);
		const divisibleBy3 = divisibleBy(3);

		return (number) => {
			return divisibleBy2(number) && divisibleBy3(number);
		}
	}

	if (digit === 7) {
		return (number) => {
			const x = [...`${number}`];
			const lastDigit = x.splice('-1');
			const restOfNumber = parseInt(x.join(''), 10);
			return ((lastDigit * 5) + restOfNumber) % 7 === 0;
		}
	}

	if (digit === 8) {
		return (number) => {
			return parseInt(`${number}`.slice('-3')) % 8 === 0;
		}
	}

	if (digit === 9) {
		return (number) => {
			return ([...`${number}`].reduce((partialSum, a) => partialSum + a)) % 9 === 0;
		}
	}

	if (digit === 10) {
		return (number) => {
			return parseInt(`${number}`.slice('-1'), 10) === 0;
		}
	}
};

// If the last digit is 0, 2, 4, 6, 8
// then the number is divisible by 2.
const divisibleBy2 = divisibleBy(2);

// If the sum of the digits is divisible by 3
// then the number is divisible by 3
const divisibleBy3 = divisibleBy(3);

// If the last two digits are divisible by 4
// then the number is divisible by 4
const divisibleBy4 = divisibleBy(4);

// If the last digit is 0, 5
// then the number is divisible by 5
const divisibleBy5 = divisibleBy(5);

// If divisible by 2 and 3
// then the number is divisible by 6
const divisibleBy6 = divisibleBy(6);

// If 5 × last digit + rest of the number is divisible by 7
// then the number is divisible by 7
const divisibleBy7 = divisibleBy(7);

// If the last three digits are divisible by 8
// then the number is divisible by 8
const divisibleBy8 = divisibleBy(8);

// If the sum of the digits is divisible by 9
// then the number is divisible by 9
const divisibleBy9 = divisibleBy(9);

// the last digit is 0
// then the number is divisible by 10
const divisibleBy10 = divisibleBy(10);

console.log(divisibleBy2(120));
console.log(divisibleBy3(120));
console.log(divisibleBy4(120));
console.log(divisibleBy5(120));
console.log(divisibleBy6(120));
console.log(divisibleBy7(126));
console.log(divisibleBy8(130120));
console.log(divisibleBy9(126));
console.log(divisibleBy10(120));