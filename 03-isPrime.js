/* Write a program to decide given N is prime or not. */

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  div = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= div; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
];

for (let _ of primes) {
  if (!isPrime(_)) {
    console.log(_);
    console.log("failed");
  }
}
