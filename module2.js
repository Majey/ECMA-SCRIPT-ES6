let message = "This is ES6 module concept";

let getName = (name) => `Hello, my name is ${name}`;

class myClass {
    constructor(){
        console.log("This is from the constructor");
    };
};

export {
    message,
    getName,
    myClass
}