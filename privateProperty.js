class user {
    name = "Kevin";
    #phone = "0727272727"; // Adding # to phone makes it private
    AGE = 30;
    details = () => `My name is ${this.name}`;
    getPhone = () => this.#phone; // this function makes it possible to access private property
    setPhone = (value) => {
        this.#phone = value;
    } // This function modifies private property which is phone in this scenario
}
const obj = new user;
console.log(obj.details());
obj.setPhone("0720000000")
console.log(obj.getPhone());