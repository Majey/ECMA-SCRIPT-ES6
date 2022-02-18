class user {
    static num = 0;
    constructor(){
        console.log("Hi from the Constructor")
    }
    static getValue = () => {
        this.num++;
        console.log(this.num);
    }
}

// const obj = new user();
user.getValue();
user.getValue();
user.getValue();
user.getValue();
user.getValue();
user.getValue();