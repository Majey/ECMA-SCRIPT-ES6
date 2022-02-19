
let p = new Promise((resolve, reject) => {
    let add = 1 + 1;
    if (add == 2) {
        resolve ("Success");
    } else {
        reject ("Fail");
    };
})

p.then((message) => console.log(message))
.catch((message) => console.log(message));
p.finally(() => console.log("Promise Tutoral"));

/*

let val = 1;
console.log(val);

val = 2;
setTimeout(() => {
    console.log(val);
}, 2000);

val = 3;
console.log(val);

*/