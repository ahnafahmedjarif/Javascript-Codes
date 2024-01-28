// arrow function in es6 (part-1)

//traditional function
function display1(){
    console.log("I am display 1.");
};

// arrow function
const display2 = () => {
    console.log("I am display 2.");
};

// display1();
// display2();

//returning value in traditional function
function message1(){
    return "Hi i am message 1";
}
console.log(message1());

// returning value in arrow function
const message2 = () =>{
    return "Hi i am message 2";
}
console.log(message2());

// passing parameter in traditional function

function add1(num1, num2){
    return num1 + num2;
}
console.log(add1(3, 4));

// passing parameter in arrow function
const add2 = (n1, n2) => {
    return n1 + n2;
}
console.log(add2(5, 50));

