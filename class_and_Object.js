class user {
    name = "Kevin";
    details = (val) => {
        this.name = val;
        return `My name is ${this.name} and I am tall, dark and handsome`
    };
}

const obj = new user;
console.log(obj.name);
console.log(obj.details("Erick"));