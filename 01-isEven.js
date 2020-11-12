/* Write a program to check the given input is even or odd number */

const isEven = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(isEven());
