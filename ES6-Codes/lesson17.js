// Synchronous vs Asynchronous in es6

// promise part-2

const taskOne = () =>{
    return new Promise((resolve, reject) => {
        resolve("Tak 1 is not completed")
    });
};

const taskTwo = () =>{
    return new Promise((resolve, reject) => {
        // resolve("Tak 2 is completed")
        setTimeout(() =>{   
            resolve("Tak 2 is completed")
        }, 2000)
    });
};

const taskThree = () =>{
    return new Promise((resolve, reject) => {
        reject("Tak 3 is not completed")
    });
};

const taskFour = () =>{
    return new Promise((resolve, reject) => {
        resolve("Tak 4 is completed")
    });
};

taskOne()
    .then(res => console.log(res))
    .then(taskTwo)
    .then(res => console.log(res))
    .then(taskThree)
    .then(res => console.log(res))
    .then(taskFour)
    .then(res => console.log(res))
    .catch((err) => console.log(err))