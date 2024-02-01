// Synchronous vs Asynchronous in es6

//callback and higher order function in es6

/*  // concept of callback and higher order function

function square(x) {
    console.log(`square of ${x}: ${x*x}`);
}
square(5);

// const y = square; 
// y(6);

function higherOrderFunction(num, callback) {
    callback(num);
}
higherOrderFunction(6, square); */

const taskOne = (callback) => {
    console.log("Task 1");
    callback()
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2. Data loading");
        callback()
    }, 3000);
}

const taskThree = (callback) => {
    console.log("Task 3");
    callback();
};

const taskFour = (callback) => {
    console.log("Task 4");
    callback();
};

const taskFive = () => {
    console.log("Task 5");
};

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(function f4() {
                taskFive();
            });
        });
    });
});