const groupA = ["Ahmad", "Sara", "Omar"];

const groupB = ["Lina", "Khaled"];

const allStudents = [...groupA, ...groupB];
console.log(allStudents);

function calculateAverage(...grades) {
  let total = grades.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  return total / grades.length;
}
console.log(calculateAverage(80, 90, 100));


const studentIds = [101, 102, 101, 103, 102, 104];


const uniqueIds =[...new Set(studentIds)];


console.log(uniqueIds);



// const studentIds = [5, 7, 5, 9, 7, 10];




// const uniqueIds = [...new Set(studentIds)];

// console.log(uniqueIds);



const grades=new Map();



grades.set(201, 95);
grades.set(202, 80);
grades.set(201, 100);




// console.log(grades.get(202));

// console.log(grades.delete(201));

console.log(grades.size);




const studentArray=[...grades];



console.log(studentArray);