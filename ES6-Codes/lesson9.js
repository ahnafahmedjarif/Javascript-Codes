// arrow function in es6 (part-2)

var students = [
    {
        id: 201804072, 
        name : "Jarif",
        gpa: 4.12
    }, 
    
    {
        id: 201804078, 
        name : "Mubeen",
        gpa: 3.60
    }, 
    
    {
        id: 201804080, 
        name : "Adi",
        gpa: 2.65
    }, 

    {
        id: 2018040100, 
        name : "Siyam",
        gpa: 4.32
    }, 
    
]

// with traditional function
function studentNames1 () {
    return students.filter(function(x){
        return x.gpa > 3
    }).map(function(y){
        return y.name;
    });
}
console.log(studentNames1());


// with arrow function 
const studentNames2 = () =>{
    return students.filter((x) => x.gpa > 3).map((y) => y.name);
    
}
console.log(studentNames2())