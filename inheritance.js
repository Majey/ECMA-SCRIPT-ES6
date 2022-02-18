class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName = () => `My name is ${this.name}`;
}

class Student extends Person {    
    getAge = () => `I am ${this.age} years old`;    
}

class Teacher extends Person {
    getExperience = () => `I have ${this.age} years experience`;
}

const stude = new Student("Kevin", 30);
console.log(stude.getName());
console.log(stude.getAge());
const teach = new Teacher("Mr. Chris", 10);
console.log(teach.getName());
console.log(teach.getExperience());