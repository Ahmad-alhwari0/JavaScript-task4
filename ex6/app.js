const inventory = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    category: "Electronics",
    quantity: 10,
  },
  {
    id: 2,
    name: "Mouse",
    price: 50,
    category: "Electronics",
    quantity: 20,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 50,
    category: "Electronics",
    quantity: 30,
  },
  {
    id: 4,
    name: "Chair",
    price: 120,
    category: "Furniture",
    quantity: 15,
  },
  {
    id: 5,
    name: "Desk",
    price: 200,
    category: "Furniture",
    quantity: 8,
  },
  {
    id: 6,
    name: "Headphones",
    price: 75,
    category: "Electronics",
    quantity: 25,
  },
  {
    id: 7,
    name: "Smartphone",
    price: 600,
    category: "Electronics",
    quantity: 12,
  },
  {
    id: 8,
    name: "Bookshelf",
    price: 150,
    category: "Furniture",
    quantity: 6,
  },
  {
    id: 9,
    name: "Monitor",
    price: 300,
    category: "Electronics",
    quantity: 14,
  },
  {
    id: 10,
    name: "Notebook",
    price: 5,
    category: "Stationery",
    quantity: 100,
  },
];

inventory.sort((a, b) => a.price - b.price);

inventory.forEach((element, index) => {
  console.log(index, element);
});

const availableCategories = ["Electronics", "Furniture", "Stationery"];

console.log(availableCategories.includes("Furniture"));

// inventory.forEach((product ,index) => {
//   if(product.name==="Keyboard"){
//     inventory.splice(index,1);
//   }
// });

const index = inventory.findIndex((product) => product.name === "Keyboard");
if (index !== -1) {
  inventory.splice(index, 1);
}

const firstFive = inventory.slice(0, 5);

console.log(firstFive);
const secondInventory = [
  {
    id: 11,
    name: "Tablet",
    price: 400,
    category: "Electronics",
    quantity: 7,
  },
];

const allProducts = inventory.concat(secondInventory);

console.log(allProducts);
