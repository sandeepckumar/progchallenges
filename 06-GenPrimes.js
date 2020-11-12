/* Generate N prime numbers in given range */

const genPrimes = (start, end) => {
  let primes = [];
  while (start < end) {
    let i = 2;
    while (i < start) {
      if (start % i === 0) {
        i++;
      } else if (i === start) {
        primes.push(i);
      }
    }
    start++;
  }
  return primes;
};

console.log(genPrimes(1, 10));
