// for of, for in in es6

// for of
const names = ["s1", "s2", "s3"];

for (let name of names){
    // console.log(name);
}

// for in
let students = {
    name: "Jarif",
    ID: 201804072,
    GPA: 5.00
}

for (let x in students){
    // console.log(x);
    console.log(`${x}: ${students[x]}`);
}