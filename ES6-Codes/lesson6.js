// forEach function in es6

let numbers = [10, 20, 30, 40];
numbers.forEach(myFunction);

function myFunction(x){
    // console.log(x); output: 10, 20, 30, 40 (in a row)
};

let names = ["Jarif", "Arham", "Zarin"];
names.forEach(function (x){
    // console.log(x);  output: Jarif, Arham, Jarif (in a row)
});


let nums = [10, 20, 30, 40];
let squareNum = [];
nums.forEach(function(x){
    squareNum.push(x*x);
})

console.log(squareNum);

newNum = [10, 20, 30, 40];
newNum.forEach(function (x, index, array){
    array[index] = x+5;
});

console.log(newNum);
