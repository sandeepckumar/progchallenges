/* Generate N prime numbers in given range */

const isPrime = (n) => {
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0 || n === 0 || n === 1) {
    return false;
  }
  div = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= div; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const genPrimes = (x, y) => {
  let primes = [];
  if (x % 2 === 0) {
    x += 1;
  }
  for (let i = x; i <= y; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

console.log(genPrimes(1000, 100000));
