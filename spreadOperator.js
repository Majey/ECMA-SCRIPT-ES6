// Spread Operator marges arrays

let arr1 = [23, 12, 34];
let arr2 = [56, 32, 98];
let arr3 = [...arr1, ...arr2];
let arr4 = [24, 56, ...arr2, 10, 20, 30]

console.log(arr3);
console.log(arr4);

//****************** EXAMPLE 2 ********************** */

sum = (a, b, c, d) => a + b + c + d;
let arr5 = [30, 20, 40, 10];

console.log(sum(...arr5));
