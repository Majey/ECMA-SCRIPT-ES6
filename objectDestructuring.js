let user = {
    "name": "Kevin",
    "email": "kevin@yahoo.com",
    "phone": "0727272727",
    // age: 20,
    "fruit": {
        "fruit1": "Mango",
        "fruit2": "Apple",
        "fruit3": "Grape"
    }
}

let { name, email, phone:mobile, age = 18, fruit: { fruit1, fruit2, fruit3 } } = user;
// age has a default value of 18
// phone can be renamed to anything e.g mobile

console.log(fruit2);