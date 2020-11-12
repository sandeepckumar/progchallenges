/* Subtract two number without using minus operator*/

// If x & y are given numbers, below implementation will add x to the 1's complement plus 1 of y which is x - y

const minus1s = (x, y) => {
  return x + (~y + 1);
};

console.log(minus1s(10, 3));

// To-do implement same thing with bit-wise operators
