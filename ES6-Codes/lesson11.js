// Array function in es6

// find method in python 
let numbers = [5, 55, 78, 6, 8];
const evenNumber = (value, index, array) =>{
    if (value % 2 === 0){
        return value
    }
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);

console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);

const student = [
    {
        id: 101, 
        gpa: 4.5
    },
    
    {
        id: 102, 
        gpa: 3.4
    },
    
    {
        id: 103, 
        gpa: 2.5
    },
    
    {
        id: 101, 
        gpa: 5.0
    }
    
]

console.log(student.find(x => x.gpa > 4));