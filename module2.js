let message = "This is ES6 module concept";

let getName = (name) => `Hello, my name is ${name}`;

class myClass {
    constructor(){
        console.log("This is from the constructor");
    };
};

export default function() {
    console.log("This is from the default function");
};

export {
    message,
    getName,
    myClass
}