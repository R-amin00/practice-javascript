// // // Practice Problem 1
// // Problem-01: Write an arrow function that will take 3 parameters, multipy the parameters and will return the result
const multipyNumbers = (num1, num2, num3) => num1 * num2 * num3;
const multipyResult = multipyNumbers(8, 10, 12);
// console.log(multipyResult);


// // Problem-02: Write the following sentence in 'Three Lines' and print the reuslt:
// //             I am a web debeloper. 
// //             I love to code.
// //             I love to eat biryani.
const multipleLine = () => `I am a web developer.
I love to code.
I love to eat biryani.`;
const lineResult = multipleLine();
// console.log(lineResult);


// // Problem-03: Write an arrow function that will take 2 parameters; one parameter will come from you and other parameter will be default parameter. And add this two parameters and return the result
const addNum = (num1, num2 = 0) => num1 + num2;
const addResult = addNum(12);
// console.log(addResult);


// // // Practice Problem 2
// // Problem-01: Write an arrow function where it will do the following:
// //               a) It will take an array where the array elements will be the name of your friends.
// //               b) Check if the length of each element is even, push elements with even length to a array and return the result
const getEvenFriends = (friends, friedsName) => {
    if(friedsName in friends || Array.isArray(friends[friedsName])){
        const evenFriends = friends[friedsName].filter((item) => item.length % 2 === 0);
        return evenFriends;
    }else {
        return[]
    }
}
const friends = {
    friendsName: ['Thomas', 'Alex', 'Alfard', 'Nixon', 'Rayan', 'Tylor', 'Kate', 'Selina']
};
const newFrinds = getEvenFriends(friends, 'friendsName');
// console.log(newFrinds);



// // // Practice Problem 3
// // Problem-01: Write an arrow function where it will do the following:
// //               a) Square each every element
// //               b) Calculate the sum of the squred elements
// //               c) Return the average of the sum of squared elements
const getAvgSumSqrNum = (number1, number2, number3) => {
    const sqrNum1 = number1 * number1;
    const sqrNum2 = number2 * number2;
    const sqrNum3 = number3 * number3;
    const sumTotal = sqrNum1 + sqrNum2 + sqrNum3;
    const avrgNumber = (sumTotal / 3).toFixed(2);
    return avrgNumber;
}
const average = getAvgSumSqrNum(42, 65, 42);
// console.log(average);


// // // Practice Problem 4
// // Problem-01: Write an arrow function where it will do the following:
// //               a) It will take two array inputs
// //               b) Combine the two arrays and assign in a new array
// //               c) Find the maximum number from the new array and return the result
const findMaxNum = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2];
    let maxNumber = 0;
    for(i = 0; i < newArr.length; i++){
      if(newArr[i] > maxNumber){
        maxNumber = newArr[i];
      }
    }
    return maxNumber;
}

const arr1 = [34, 45, 65, 36, 76, 75];
const arr2 = [64, 84, 28, 69, 92, 77];
const showResult = findMaxNum(arr1, arr2)
console.log(showResult);