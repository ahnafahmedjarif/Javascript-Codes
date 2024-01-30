// String methods in es6

const message = "Today is friday";

console.log(message.startsWith("Today")); //output: true
console.log(message.startsWith("Today", 10)); //output: false

console.log(message.endsWith("Friday")); //output: true

console.log(message.includes("Friday")); //output: false
console.log(message.includes("friday")); //output: true

