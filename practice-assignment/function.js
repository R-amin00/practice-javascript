// // Task-01: Convert Radian to Degree
// function radianToDegree (radian) {
//     let toDegree = radian * (180 / 3.1416).toFixed(4);
//     return toDegree;
// }
// let degree = radianToDegree(10);
// console.log("10 Radian =", degree,"degree")

// // Task-02: Check whether the given file name is JavaScript file or not
// function isJavaScriptFile (params) {
    
// }
// let file = isJavaScriptFile();
// console.log(file)


// // Task-03: Calculate total oil price when each litre of disel, petrol and octane price are 114, 130 and 135 tk
// function oilPrice(disel, petrol, octane) {
//     let countPrice = (disel * 6) + (petrol * 8) + (octane * 3);
//     return countPrice;
// }
// let totalPrice = oilPrice(114, 130, 135);
// console.log(totalPrice);


// /* Task-04: You have two cars and 80 employee, one is bus which contains 50 people and 
//     other is microbus where 11 people can get up. You have to send all the employee at their home by car. 
//     So you have to send over employees in public transeport and you have to pay 250 taka per every employee.*/

// function publicBusFare(employee) {
//     let busEmployee = employee - 50;
//     let microEmployee = busEmployee - 11;
//     let publicTranseportFee = microEmployee * 250;
//     return publicTranseportFee;
// }
// let fare = publicBusFare(80);
// console.log(fare);


// Task-05: If first person's name is similar to 2nd person's friend's name or 1st person's friend's name is similar to 2nd person's name , then they will be best friend and it will retuen Ture otherwise False
// const personFriend = [
//     {
//         id: 1,
//         person: 'Tom',
//         friend: 'Rock',
//     },
//     {
//         id:2,
//         person: 'Rock',
//         friend: 'Tomy',
//     }

// ]
// function isBestFriend(personFriend) {
//     const firstPersonName = personFriend[0].person;
//     const firstFriendName = personFriend[0].friend;
//     const secondPersonName = personFriend[1].person;
//     const secondFriendName = personFriend[1].friend
//     if(firstPersonName === secondFriendName || firstFriendName === secondPersonName){
//         // console.log("They are best friend");
//         return true;
//     }else {
//         // console.log("They are not best friend");
//         return false;
//     }
// }
// let beFriend = isBestFriend(personFriend);
// console.log(beFriend);