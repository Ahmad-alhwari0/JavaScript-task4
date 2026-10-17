

const product={
    id:1,
    name:"laptop",
    price:1200,
    category:"Electronics",
    available:true
};



const jaonstring=JSON.stringify(product);
console.log(jaonstring);




const parsedProduct=JSON.parse(jaonstring);


console.log("Original:", product);
console.log("Parsed:", parsedProduct);


const validJSON = '{"id": 1, "name": "Laptop"}';
try {
  const brokenProduct = JSON.parse(validJSON);
  console.log(brokenProduct);
} catch (error) {
  console.log("Invalid JSON:", error.message);
}