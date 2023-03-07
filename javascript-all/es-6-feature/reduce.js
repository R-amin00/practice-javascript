// .reduce  (accumulatorFunction, initial value)
// accumulator function use two parameter

const number = [22, 45, 65, 12, 34, 61, 86, 15, 23];
// // single line
// const total = number.reduce((previous, current) => previous + current,0); 
// // Multi line
const total = number.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
},0);
console.log(total)