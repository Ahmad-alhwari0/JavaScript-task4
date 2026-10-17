import { students } from "./students.js";
import calculateGrade from "./grades.js";

const studentscon = document.querySelector("#students-container");

studentscon.innerHTML = "";

for (const student of students) {
  const studentCard = document.createElement("article");

  const name = document.createElement("h1");
  name.textContent = student.name;

  const id = document.createElement("p");
  id.textContent = `ID: ${student.id}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${student.email}`;

  const grade = document.createElement("p");
  grade.textContent = `Grade: ${student.grade}`;

  const result = document.createElement("p");
  result.textContent = `Result: ${calculateGrade(student.grade)}`;


  studentCard.append(name ,id, email , grade , result);
  studentscon.appendChild(studentCard);
}
