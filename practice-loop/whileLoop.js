// // Task-01: Write the programme to sum those number which are divideable by 3 and 5 and it will be continue upto 100

// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     if (i%2==0 && i%5==0) {
//         sum = sum + i;
//         i = i + 1;
//     }else{
//        i = i + 1;
//     }
// }
// console.log(sum)
// // document.write(sum)



// // Task-02: write "ajk amar mon valo nei" 39  times

// let line = 0;
// while(line < 40) {
//     line = line + 1;
//     console.log(line);
//     console.log("ajk amar mon valo nei")
// }


// // // Task-03: Display number between 58 to 98

// let num = 58
// while (num <= 98) {
//     console.log(num);
//     num = num + 1;
// }



// // Task-04: Show all EVEN NUMBER from 412 to 456

// let num = 412;
// while(num <= 456) {
//     console.log(num);
//     num = num + 2;
    
// }


// // Task-05: Show all ODD NUMBER from 581 to 623

// let num = 581;
// while(num <= 623) {
//     console.log(num);
//     num = num + 2;
// }


// // Task-06: Create an array for all the mobile phones. Display all the elements of the array by using FOR loop

// let phoneAry = ['samsung', 'nokia', 'symphony', 'realme', 'infinix', 'vivo', 'oppo'];
// let phone = 0;
// while(phone < phoneAry.length) {
//     const phoneName = phoneAry[phone];
//     console.log(phoneName);
//     phone = phone + 1;
// }



// // Task-07: Run a loop from 30 to 86. This loop will be stopped if the values get higher than 44

let num = 30;
while(num <= 86) {
    console.log(num); 
    if (num > 43) {
        break;
    }
    num = num + 1;
}
