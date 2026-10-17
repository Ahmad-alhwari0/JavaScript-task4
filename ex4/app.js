const students = [];

for (let i = 1; i <= 50; i++) {
  const student = {
    id: i,
    name: `Student${i}`,
    grade: Math.floor(Math.random() * 41) + 60,
  };
  students.push(student);
}

students.splice(50, 0, {
  id: 51,
  name: "ahmad",
  grade: 95,
});

console.log(students.length);
console.log(students[50]);


students.splice(4,1,{
    id: 52,
    name: "Lina",
    grade: 98
});
console.log(students[4]);

students.splice(9, 1);

const portion =students.slice(10,20);
console.log(portion.length);

students.sort((a,b) =>b.grade -a.grade);

students.forEach((element,index) => {
  console.log(index , element);
});
