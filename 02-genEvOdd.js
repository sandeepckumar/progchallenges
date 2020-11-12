/* Write a program to generate even & odd less than N & generate "N" even & odd numbers. */

const genEvenOdd = (n) => {
  let result = {
    even: [],
    odd: [],
  };
  for (i = 1; i < n; i++) {
    if (i % 2 === 0) {
      result.even.push(i);
    } else {
      result.odd.push(i);
    }
  }
  return result;
};

console.log(genEvenOdd(100));
