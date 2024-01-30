//  Destructuring array and objects in es6

// Array  Destructuring 

let  numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = numbers;

console.log(num1);

// swapping with destructuring
let a = 10; 
let b = 10;
[a, b] = [b, a];

// Object Destructuring

const studentInfo = {
    id: 201804072,
    name: "Jarif",
    gpa: 4.50,
    languages : {
        native: "Bangla",
        beginner: "Spanish"
    }
}

const  {id, name, languages} = studentInfo

console.log(id);
console.log(name);
console.log(languages);
console.log(languages.native);

// Destructuring function parameters

const students = ({studentID, studentName}) =>{
    console.log(`${studentID}, ${studentName}`);
}

const student = {
    studentID: 201804078,
    studentName: "Mubeen"
}

students(student);