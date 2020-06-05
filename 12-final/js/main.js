'use strict'

// function printPersons(persons) {
//     persons.forEach(p => console.log(p));
// }

// const printPersons = function(persons) {
//     persons.forEach(p => console.log(p));
// }

// let name = 'Ivan';
// let age = 25;
// let price = 3000;
// let isMale = true;


// function getPersons(cb) {
//     const list = Array(5).fill(0).map(item => {
//         const person = {
//             name: Array(5).fill(0).map(item => Math.floor(Math.random() * 10)).join(''),
//             age: Math.floor(Math.random() * 100)
//         };
//         return person;
//     });
//     cb(list);
// }

// getPersons(printPersons);

// function test(name, age, isMale) {
//     console.log(name, age, isMale);
// }

// test(name, age, isMale);

// try {

//     let test = undefined;

//     let name = 'Ivan';

//     test(name);

// } catch(e) {
//     console.log('Please correct your code!');
// }

// try {
//     let a = 10;
//     let b = 0;
    
//     if (b === 0) {
//         throw new Error('Division by zero!');
//     }
    
//     let c = a / b;
    
//     console.log('Result:', c);
// } catch (e) {
//     console.log('Division by zero!');
// }

// console.log('Its work!');

// const promise = new Promise(resolve, reject);

// promise
//     .then()
//     .catch(err => console.log(err));

// async function getUsers() {
//     let users = null;
//     try {
//         let result = await fetch('https://randomuser.me/api/?results=5', {
//             method: 'GIVE'
//         });
//         users = await result.json();
//         return users;
//     } catch (e) {
//         let err = new Error('text');
        
//     }
// }

// const users = getUsers();

// users
//     .then(console.log)
//     .catch(console.log);

// let m1 = [0, 1, 3];
// let m2 = ['asd', 'qwe', 'zxc'];

// let m3 = [...m1, ...m2];

// console.log(m3);

// let [first, second, ...spread] = ['asd', 'qwe', 'zxc', 'dfg', 'ert'];

// console.log(first, second);
// console.log(spread);

// let person = {
//     name: 'ivan',
//     age: '25',
//     isMale: true
// };

// let { name, age } = person;

// console.log(name, age);

// function foo(name) {
//     name += ' !!! ';
//     return function(age) {
//         return name + age;
//     }
// }

// const sayIvan = foo('ivan');

// const text = sayIvan(25);

// console.log(text);


function factorial(n) {
    if (n === 1) {
        return 1; 
    }
    return n * factorial(n-1);
}

console.log(factorial(5));