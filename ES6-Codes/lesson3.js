// spread operator in es6

function addNum(x, y, z){
    return x + y + z;
};

let num1 = [1, 2, 3];
// console.log(addNum(...num1)); output: 6

let newArray = [5, ...num1, 6 ];
// console.log(newArray); output: [5, 1, 2, 3, 6]

let num2 = [4, 5, 6];
let nums = [...num1, ...num2]; 
// console.log(nums); output: [1, 2, 3, 4, 5, 6]


let p1 = {
    name: "Ahnaf Ahmed",
    age: 15
}

let p2 = {
    nationality: "Bangladesh",
    occupation: "Student"
}

let p = {...p1, ...p2};
console.log(p);