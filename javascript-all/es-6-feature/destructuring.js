const fish = {
    name:'King Hilsa',
    address:'Chandpur',
    color:'silver',
    phone:'01700000000',
    price: 4000
}

// //If wanna get any property from this objert I should
// // But it is not a good practice
// const name = fish.name;
// const address = fish.address;
// const color = fish.color;
// const phone = fish.phone;
// const price = fish.price;

// console.log(name)


// // I should and it is good practice
// {property name} = object or object variable name 
const {phone} = fish;

// console.log(phone);



// Array destructuring
const [first, second] = [44, 77, 98, 56];
// console.log(first, second);

const people = ['karim', 'salam', 'orpita'];
const [father, son, daughter] = people;
// console.log(father, daughter);

function getName() {
    return ['jamila', 'halima']
}
const [mother, sister] = getName();
// console.log(mother);
