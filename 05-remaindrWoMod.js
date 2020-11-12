/* Write a program to find remainder of two number without using mod operator */

// Division is basically recursive subtraction, below implementation will use recursive function for subtracting numerator with denominator

const divNoMod = (x, y) => {
  if (x < y) {
    return x;
  }
  return divNoMod(x - y, y);
};

console.log(divNoMod(1234, 13));

// Implemented the same as above with loops

const divNoModloop = (x, y) => {
  while (x > y) {
    x = x - y;
  }
  return x;
};

console.log(divNoModloop(1234, 13));

// To-do implement division using bit-wise operators
