// As we can see identity numbers are anything which does not
// change the identity of the number

const x = [];

const additionIdentity = 0;
const multIdentity = 1;

for (i = 1; i < 101; i++) {
	x.push(i);
}

const additionResult = x.map(x => x + additionIdentity);
const multResult = x.map(x => x * multIdentity);

console.log({ x, additionResult, multResult});