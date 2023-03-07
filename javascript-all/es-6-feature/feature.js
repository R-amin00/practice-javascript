//// Old feature
// function addNumber(first, second){
//     second = second || 0;
//     if(second === undefined){
//         second = 0;
//     }
//     const total = first + second;
//     return total;
// }
// const call = addNumber(12, 12);
// console.log(call)


// // ES-6 Feature   
function addNumber(first, second = 0){
    const total = first + second;
    return total;
}

// const call = addNumber(12);
// console.log(call)



// // Function Declaration
// // Type: 01
function add1(first, second){
    const total = first + second;
    return total;
}


// // Function of Expression [with variable]
// // Type: 02
const add2 = function add1(first, second){
    const total = first + second;
    return total
}


// // Function of Exprssion [with variable]
// // Type: 03
// // Anonymous Function 
const add3 = function(first, second){
    const total = first + second;
    return total;
}


// // Arrow Function

// first step
const addN = function(first, second){
    return first + second;
}

// second step
function addN1(first, second){
    return first + second;
}

// final output of Arrow function 
const add4 = (first, second) => first + second;   // return = '=>'

// const call = add4(12, 13);
// console.log(call)

// So after learning this, there is a very important question
// That is, What is the defferrent between Fucntion declaration, function expression and arrow function
// This question is important for INTERVIEW





const number = [23, 34, 54, 32, 65, 56, 12,67];
const number2= [...number, 33, 55, 777, 444]
// console.log(number2)