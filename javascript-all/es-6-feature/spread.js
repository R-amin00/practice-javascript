// Find Maximum Number
const max = Math.max(23, 45, 74, 87);
// console.log(max);


// not a right way
const maxNumbers = [45, 65, 67, 56, 63, 98, 56];
const maxNumber = Math.max(maxNumbers);
// // console.log(...maxNumbers)
// console.log(maxNumber);


// write way
const maxNums = [44, 33, 56, 67, 36];
const maxNum = Math.max(...maxNums);
// console.log(maxNum);

// Spread Intregate
// problematic when I push value in one variable it get unto two variable
// Type: 01
const numbers = [44, 68, 49, 39, 89, 58];
const numbers2 = numbers;
// numbers.push(111);
// numbers2.push(444);
// console.log(numbers);
// console.log(numbers2);

//Type: 02
const numbers3 = [numbers];
// numbers.push(111);
// numbers3.push(444);
// console.log(numbers);
// console.log(numbers3);

// Right way 
//Type: 01
const numbers4 = [...numbers];
// numbers.push(111);
// numbers4.push(444);
// console.log(numbers);
// console.log(numbers4);

//Type:02
const numbers5 = [888, ...numbers, 999]
// console.log(numbers5);


// const combineAndFindHighest = (arr1, arr2) => {
//     const combinedArray = arr1.concat(arr2);
//     const highestNumber = Math.max(...combinedArray);
//     return highestNumber;
//   }
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const highestNumber = combineAndFindHighest(arr1, arr2);
// console.log(highestNumber); // Output: 6

// const combineAndFindHighest = (arr1, arr2) => {
//     const combinedArray = [...arr1, ...arr2];
//     const highestNumber = Math.max(...combinedArray);
//     return highestNumber;
//   };
//   const arr1 = [1, 3, 5, 7];
//   const arr2 = [2, 4, 6, 8];
//   const highestNumber = combineAndFindHighest(arr1, arr2);
//   console.log(highestNumber); // Output: 8
  
