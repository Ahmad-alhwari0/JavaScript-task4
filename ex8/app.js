const user = {
  name: "Ahmad",
  email: "ahmadalhwari0@gmail.com",
  age: 25,
  address: "Amman",
};


const {email , address}=user;




const {name : usuename}=user;



const skills = ["HTML", "CSS", "JavaScript", "PHP"];


// const skillOne=skills[0];
// const skillThree=skills[2];

const [skillOne, , skillThree] = skills;


const createUser=(name , age=18) => {
return {
    name:name,
    age:age
}
}; 





console.log(createUser("ahamd"));
console.log(createUser("ahamd", 0));
