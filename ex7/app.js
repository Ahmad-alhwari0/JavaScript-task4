// function square(number) {
//   return number *number;
// }
const square = (number) => number * number;

// const ifEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isEven = (number) => number % 2 === 0;

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 30 },
];

products.reduce((accumulator, current) => {
  return accumulator + current.price;
}, 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = numbers.map((number) => {
  return number * number;
});

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(
  products.reduce((before, after) => {
    return before + after.price;
  }, 0),
);
