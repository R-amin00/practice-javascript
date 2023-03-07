// Arrow Function 
const add = (first, second) => first + second;

const getFullName = (first, last) => first + ' ' + second;

const multiply = (a, b) => a * b;
const result = multiply(4, 5)
// console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// // No parameter of arrow function or empty parathesis
const getPie = () => 3.1416;

// one parameter 
const dooubleIt = (num) => num * 2;

// one parameter simple version and it is good practice
const simpleParameter = num => num * 4; //normally when function has one paramerter, it is good practice not to have ()

// multi line arrow function + regular function 
// if you want to return something , use the 'return'
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    return multiplyResult;
}