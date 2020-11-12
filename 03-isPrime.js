/* Write a program to decide given N is prime or not. */

const isPrime = (num) => {
  if (num === 2 || num === 3) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  } else {
    for (i = 3; i < num; i += 2) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
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
    console.log("failed");
  }
}
