// map and filter in es6

// map function
var numbers = [2, 3, 4, 5];
var squareNumbers = numbers.map(function(x){
    return x*x;
})

console.log(squareNumbers);

// filter function
var nums = [22, 34, 31, 4, 5 ,6, 78];
var newNum = nums.filter(function(x){
    return x > 10;
});

console.log(newNum);

