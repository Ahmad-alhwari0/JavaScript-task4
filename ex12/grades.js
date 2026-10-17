export default function calculateGrade(grade) {
  if (grade !== "") {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else {
      return "F";
    }
  }
}
