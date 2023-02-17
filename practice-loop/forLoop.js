//Task-01: Write the programme to sum those number which are divideable by 3 and 5 and it will be continue upto 100

// for (let i = 1; i <= 100; i++) {
//     if(i%3==0 && i% 5 == 0){
//         sum = sum + i;
//         // document.write(sum);
//         console.log(sum)
//     }else{
//         // console.log("end")
//     }
    
// }
// console.log(sum);



// // Task-02: write "ajk amar mon valo nei" 39  times
// for (let i = 1; i < 40; i++) {
//     const element = i;
//     console.log(element)
//     console.log("ajk amar mon valo nei");
// }


// // Task-03: Display number between 58 to 98
// for (let i = 58; i <= 98; i++) {
//     const element = i;
//     console.log(i);
    
// }



// // Task-04: Show all EVEN NUMBER from 412 to 456
// for (let i = 412; i <= 456;) {
//     i = i + 2;
//     console.log(i)
// }


// // Task-05: Show all ODD NUMBER from 581 to 623

// for (let i = 581; i <= 623;) {
//     console.log(i)
//     i = i + 2;
// }



// // Task-06: Create an array for all the mobile phones. Display all the elements of the array by using FOR loop

// let phone = ['samsung', 'nokia', 'symphony', 'realme', 'infinix', 'vivo', 'oppo'];
// for (let i = 0; i < phone.length; i++) {
//     const showPhone = phone[i];
//     console.log(showPhone);
// }



// // Task-07: Run a loop from 30 to 86. This loop will be stopped if the values get higher than 44

// for(let i = 30; i <= 86; i++) {
//     console.log(i)
//     if (i > 43) {
//         break;
//     }
// }



// // Task-08: Write the price of the books that you have. Display the prices if the prices are lower than 200


let book1 = 160;
let book2 =400;
let book3 = 200;
if(book2 < book1 && book3 < book2) {
    console.log(book2);
}else if(book3 > book2 && book3 > book1){
    console.log(book3);
}else{
    console.log(book1);
}