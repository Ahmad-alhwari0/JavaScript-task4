const group1 = [
  "Ahmad", "Sara", "Omar", "Lina", "Yousef",
  "Mariam", "Khaled", "Rana", "Hassan", "Dima",
  "Tariq", "Nour", "Fadi", "Layla", "Karim",
  "Huda", "Bilal", "Salma", "Waleed", "Rania",
  "Zaid", "Amal", "Nabil", "Yasmin", "Samir"
];

const group2 = [
  "Reem", "Adnan", "Hala", "Marwan", "Dana",
  "Firas", "Nadia", "Ziad", "Iman", "Tarek",
  "Ghada", "Anas", "Suha", "Basel", "Lubna",
  "Rami", "Wafa", "Jamal", "Mona", "Sami",
  "Hanan", "Mazen", "Rasha", "Adel", "Farah"
];


const group3=group1.concat(group2);

console.log(group3);

group3.sort();
console.log(group3);


console.log(group3 === group3.sort());


group3.reverse();
console.log(group3);

console.log(group3.includes("ahmad"));
console.log(group3.includes("Ahmad"));



group3.forEach((element,index) => {
    console.log(index,element);
});