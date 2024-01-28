
"use strict"

//default parameter in es6

function message(test = "Hello this is a default parameter") {
    console.log(test);
}

message();
message("Welcome to js es6");

//rest parameter
function num(x, y, ...z){

    // console.log(`${x}, ${y}`);
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}

num(10, 20, 30 , 40 , 50);