// class and constructor in es6

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    set studentName(name){
        this.name = name;
    }

    get studentInfo (){
        return this.id + " " + this.name;
    }
}

s1 = new Student(201804072, "Jarif");
console.log(s1);
console.log(s1.name);

s1.studentName = "Mubeen";
console.log(s1);
console.log(s1.name);

console.log(s1.studentInfo);