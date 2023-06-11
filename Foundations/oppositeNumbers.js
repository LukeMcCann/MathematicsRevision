// Opposite Numbers

// Opposite numbers are numbers which are the same distance away from 0. The opposite of 1 for instance is -1.
// We can write a function for this easily by simply appending '-' to a positive or vice versa, however
// this would not illustrate the concept of distance.

const simpleOpposite = (number) => {
	if (number > 0) {
		return -number;
	} else {
		return Math.abs(number);
	}
}

console.log(simpleOpposite(100));
console.log(simpleOpposite(-100));

// As you can see this does the job but does not demonstrate the concept of distance from zero.

const oppositeInteger = (number) => {
	const rootNumber = 0;

	if (number > rootNumber) {
		return rootNumber -Math.abs(number);
	} else {
		return rootNumber +Math.abs(number);
	}
}

console.log(oppositeInteger(20));
console.log(oppositeInteger(-20));

// Here we can clearly see that we are calculating the opposite of our number from the root of zero.
// This showcases the distance on the number line between zero and each of these integers.

// When we say opposite numbers in mathematics we usually mean the number we start with * -1
// a reflection of this in function form:

const realOppositeInteger = (number) => number * -1;

console.log(realOppositeInteger(40));
console.log(realOppositeInteger(-40));