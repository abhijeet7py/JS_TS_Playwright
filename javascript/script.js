console.log("Hello, World!");

// for(let i = 1; i<= 5; i++){
//     //console.log(i);
//     console.log("Apna College");
// }

// Calculate sum of 1 to n

// let sum = 0;

// for(let i = 1; i <= 6; i++){
//     sum = sum + i;
// }
// console.log("The sum is " + sum);


// Infinite loop
// for(let i = 1; i>= 0; i++){
//     console.log(i);
// }


// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let i = 1;

// do{
//     console.log("i = ", i);
//     i++
// }while(i <= 5);

// For of loop

// str1 = "Abhijeet";

// for(let i of str1){ // iterator
//     console.log(i);
// }

// print all even numbers from 1 to 100

// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// Array

// marks =  [90, 80, 70, 60, 50];
// // console.log(marks);

// // find the avg
// // let sum = 0
// // for(let i of marks){
// //     sum += i;
// // }
// // console.log(sum);

// // let avg = sum / marks.length

// // console.log(`avg is : ${avg}`)

// // splice method

// console.log(marks.splice(1,2,34,56,34));
// console.log(marks);

// let componies = ["Google", "Meta", "Amazon", "Microsoft", "Apple"];
// console.log(componies);


//funtion

// function sum (a,b){
//     console.log(a + b);
// }
// sum(10, 20);

// // arrow function

// const mul = (a , b) =>{
//     return a * b;
// }


function count_vowels (str){
    let count = 0;
    for(let i of str.toLowerCase()){
        if("aeiou".includes(i)){
            count++;
        }
    }
    return count;
}

let str = "Abhijeet";
let count = count_vowels(str);
console.log(`The number of vowels in the string ${str} is : ${count}`);

const count_vow = (str1) =>{
    let count1 = 0;
    for(let i of str1.toLowerCase()){
        if("aeiou".includes(i)){
            count1++;
        }
    }
    return count1;
}

let str1 = "Abhijeet";
let count1= count_vowels(str1);
console.log(`The number of vowels in the string ${str1} is : ${count1}`);