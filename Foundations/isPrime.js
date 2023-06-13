const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limit = Math.sqrt(number);
  for (let divisor = 2; divisor <= limit; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}