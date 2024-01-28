// Object Literals in es6

function studentInfo1 (name, age){
    return {
        // name: name,
        // age: age
        name,
        age
    }
};

console.log(studentInfo1("Jarif", 15));

//concise method in es6

let message = {
    'body name'(){
        return `Hi, I am a object function`
    }
};
console.log(message['body name']());