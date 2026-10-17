const reportsContainer=document.querySelector("#reports");
const button = document.querySelector("#showBtn");
//   name: "Ahmad",
//   id: 101,
//   grade: 85,
//   status: function status(grade) {
//     if (grade >= 50) {
//       return "pass";
//     } else {
//       return "Fail";
//     }
//   },
// };

// const report = `Name: ${student.name}
// id: ${student.id}
// Grade: ${student.grade}
// status :${student.status(student.grade)}`;

// console.log(report);

const students = [
  { name: "Ahmad", id: 101, grade: 85 },
  { name: "Sara", id: 102, grade: 100 },
  { name: "amal", id: 103, grade: 20 },
  { name: "ali", id: 104, grade: 95 },
  { name: "nasser", id: 105, grade: 50 },
];

const report = students.map((student) => {
  return `Student: ${student.name}
ID: ${student.id}
Grade: ${student.grade}
Status: ${student.grade >= 50 ? "Pass" : "Fail"}`;
});
console.log(report);




button.addEventListener("click" , function(){
    reportsContainer.innerHTML="";
  
    reportsContainer.textContent=report.join("\n \n ");

   
});