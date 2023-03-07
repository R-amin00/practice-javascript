function doubleNum(numbers){
    const output = [];
    for (let i = 0; i < numbers.length; i++) {
        const double = numbers[i] * 2;
        output.push(double);
    }
    return output;
}
const numbers = [2, 3, 4, 5, 6];
const result = doubleNum(numbers);
// console.log(result)



// // // array value doubled
// const numbers = [2, 3, 4, 5, 6];
//     const output = [];
//     for (const number of numbers) {
//         const double = number * 2;
//         output.push(double);
//     }

// // const result = doubleNum(numbers);
// console.log(output)



const numberArr = [46, 65, 94, 86, 57, 84, 54];
const findNumber = numberArr.map(x =>  x * 2)
// console.log(findNumber)


const friends = ['salam', 'rahim', 'karim', 'jamil'];
const friendName = friends.map(f => f.length);
console.log(friendName)