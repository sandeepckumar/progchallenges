/* Find the gcd of two numbers using recursion */

// Using Euclids algorithm

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

console.log(gcd(7, 21));
