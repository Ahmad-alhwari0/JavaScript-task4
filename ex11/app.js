class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `person name is ${this.name} and your email is ${this.email}`;
  }
}

const person1 = new Person("ahmad", "ahmadalhwari0@mail.com");

console.log(person1.getInfo());

class Student extends Person {
  constructor(name, email, studentId) {
    super(name, email);
    this.studentId = studentId;
  }

  getInfo() {
    return super.getInfo() + " " + this.studentId;
  }
}
const student1 = new Student("ahmad", "ahmad@gmail.com", 2042409);


console.log(student1.getInfo());

class Instructor extends Person {
  constructor(name, email, salary) {
    super(name, email);
    this.salary = salary;
  }


   getInfo() {
    return super.getInfo() + " " + this.salary;
  }
}

const inst1 = new Instructor("ahmad", "ahmad@gmail.com", 2500);


console.log(inst1.getInfo());