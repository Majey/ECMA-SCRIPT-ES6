
let user = ["Kevin", "kevin@yahoo.com", 0727272727, 18, ["apple", "mango", "banana"]];

// let name = user[0];
// let email = user[1];
// let phone = user[3];

let [ name, email, phone, age=0, [fruit1, fruit2, frut3]] = user;
// age has a default value of 0

console.log(fruit2);