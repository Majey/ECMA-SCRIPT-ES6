
sum = (a, b, c) => a + b + c;
console.log(sum(10,20,30));

sum = (...x) => x;
console.log(sum(10, 20, 30));

sum = (...x) => {
    total = 0;
    for (let i=0; i < x.length; i++) {
        total += x[i];
    }
    return total;
};
console.log(sum(10, 20, 30, 40));

