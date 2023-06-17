const primeFactorisation = (number) => {
  let factors = [];
  let divisor = 2;

  while (number > 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

const primeFactorisationRecursive = (number) => {
  let factors = [];

  const findPrimeFactors = (num, divisor) => {
    if (num === 1) {
      return;
    }

    if (num % divisor === 0) {
      factors.push(divisor);
      findPrimeFactors(num / divisor, divisor);
    } else {
      findPrimeFactors(num, divisor + 1);
    }
  };

  findPrimeFactors(number, 2);
  return factors;
};

const res = primeFactorisation(10);

console.log({ res });
