
let users = ["Kevin", "Erick", "Majengo"];

// for(i=0; i < users.length; i++){
//     console.log(users[i])
// }

for(let user in users) {
    console.log(users[user]);
}

let person = {
    "name": "Kevin Erick",
    "email": "kevin@yahoo.com",
    age: 30
}

for(let info in person) {
    console.log(person[info]);
}