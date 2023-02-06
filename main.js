// *Nullish Coalescing Operator declared by => ??

// const idade = null;

// document.body.innerText = 'sua idade e: ' + (idade ?? 'nao informado'); 

// *Objects 

// const user = {
//     nickname: 'carloteiro',
//     age:  25,
//     degree: 'Computer Science',
//     address: {
//         rua: 'casa docarai',
//         numero: '4A'
//     },
// };

// -expressions 

// document.body.innerText = ('name' in user) //in
// document.body.innerText = Object.keys(user) // keys from a object
// document.body.innerText = JSON.stringify(Object.values(user)) // values from a object with stringify example
// document.boddy.innerText = JSON.stringify(Object.entries(user)) // entries from a object with stringify example

// *destructuring declared by {object} and for [arrays]

// const { address, age: idade, nome = 'pitoca' } = user
// document.body.innerText = JSON.stringify({address, idade, nome})

// function revelAge({age}){
// return age;
// }

// document.body.innerText = revelAge(user)

// *Rest operator => take all rest of a entity symbolied by "...(variable)"

// const {nickname, ...rest} = user

// const array = [1,2,3,4,5,6,7,8,9,10];

// const [first, , third, ...rest] = array;

// document.body.innerText = JSON.stringify({first, third, rest})

// *Short Syntax

// const name = 'carlos';
// const age = 25;

// const user = {
//     name,
//     age,   
// };

// document.body.innerText = JSON.stringify(user)

// * Optional Chaining declared by "? befere '.'"

// const user = {
//         nickname: 'carloteiro',
//         age:  25,
//         degree: 'Computer Science',
//         address: {
//             rua: 'casa docarai',
//             numero: '4A',
//             showFullAdress() {
//                 return 'casa das prima';
//             }
//         },
//     };

// document.body.innerText = user.address?.showFullAdress?.() in a function the optional chaining goes before the function call "()"

// const key = 'nickname';

// document.body.innerText = user[key] => you can call the specified object with a []

// * Array methods (map, filter, every, some, find, findIndex, reduce)

// const array = [1, 2, 3, 4, 5,];

// for (const i of array) {
//     document.body.innerText += i;
// }

// array.forEach(i => {
//     document.body.innerText += i;
// })

// multiply items in a array using for each

// const newArray= [];

// array.forEach(i =>{  
//     newArray.push(i * 2);
// })

// document.body.innerText = JSON.stringify(newArray)

// -map()

// multiples items in a array using map() 

// const newArray = array.map(i => { 
//     if (i % 2 === 0) {
//         return i * 10;
//     }
//     return i; // map aways return a array with the same size of original array, yeah and map can return in same operation
// })

// document.body.innerText = JSON.stringify(newArray)

// -filter()

// filter only odd items and using map to multiplies for 10

// const newArray = array 
// .filter(item => item % 2 ==! 0)
// .map(item => item * 10)

// document.body.innerText = JSON.stringify(newArray)

// -every()

// const allItemsAreNumbers = array.every(item => {
//     return typeof item === 'string'; 
// });

// document.body.innerText = JSON.stringify(allItemsAreNumbers)

// -some()

// const atLeastOneItemAreNotANumber = array.some(item => {
//     return typeof item ==! 'number';
// })

// document.body.innerText = JSON.stringify(atLeastOneItemAreNotANumber)

// -find()
//find the first item according to the request

// const pair = array.find(item => item % 2 === 0)

// document.body.innerText = JSON.stringify(pair)

// -findIndex()
//find the first index item according to the request

// const pair = array.findIndex(item => item % 2 === 0)

// document.body.innerText = JSON.stringify(pair)

// -reduce()
// reduce need two parameters the arrow function and a initial valor, in this case represents the 0

// const sum = array.reduce((acc, item) => {
//     return acc + item    
// }, 0)

// document.body.innerText = JSON.stringify(sum)

// * Template Literals

// const name = 'carlo';
// const message = `Welcome, ${name ? name : 'visitor'}`;

// //conditions in parameters 
// // ?? == not exist
// // ? == if
// // : == else

// document.body.innerText = message

// * Promises 

// .then/.catch

// const sumTwoNumbers = new Promise((resolve, reject) => {
//     setTimeout()
// });


//challenger turing
// const nums = [4, 3]

// function find_max(nums) {
//     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num of nums) {
//     if (num > max_num) {
//         max_num = num
//         }
//     }
//     return max_num;
// }

// document.body.innerText = JSON.stringify(find_max)

//
//video : https://www.youtube.com/watch?v=37SwqREHRGI&t=343s&ab_channel=Rocketseat
//FINISH THE PROMISES AND ES MODULES!!