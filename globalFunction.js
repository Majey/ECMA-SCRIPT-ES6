let val = "50";
if (isNaN(val)) {
    console.log("Not a number");
} else {
    console.log("Is a number");
}; 

let val2 = "50";
if (isFinite(val2)) {
    console.log("Finite number");
} else {
    console.log("Not Finite number");
}; 

let val3 = 50.89;
if (Number.isInteger(val3)) {
    console.log("Integer number");
} else {
    console.log("Not integer number");
}; 