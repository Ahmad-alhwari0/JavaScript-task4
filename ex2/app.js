function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, employeeId, position) {
  Person.call(this, name, age);
  this.employeeId = employeeId;
  this.position = position;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;

Employee.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I work as ${this.position} (ID: ${this.employeeId}).`);
};


const emp1=new Employee("ahmad",25,101,"developer");
const emp2=new Employee("tareq",23,102,"marketing");
const emp3=new Employee("wadeaa",24,103,"ui/ux");

emp1.greet();
emp2.greet();
emp3.greet();


console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Person);
