// Synchronous vs Asynchronous in es6

// promise part-1

// how to create promise

const promise1 = new Promise((resolve, reject) =>{
    // let completedPromise = false;
    // if (completedPromise) {
    //     resolve("completed promise 1");
    // } else{
    //     reject(new Error("not completed promise 1"));
    // }
    setTimeout(() =>{
        resolve("completed promise 1");
    }, 2000)
});

const promise2 = new Promise((resolve, reject) =>{
    // resolve("Completed promise2.")
    setTimeout(() => {
        resolve("Completed promise2.")
    }, 1000)
})

// promise1.then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     // console.log(error);
//     console.log(error.message);
// });

// promise2.then((response) => console.log(response));

// shortcut to call all promise
Promise.race([promise1, promise2])
.then((res) => console.log(res));