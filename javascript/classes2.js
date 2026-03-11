// To call a class from another file we need to export the class from the 
// file where it is defined and import it in the file where we want to use it
// To export a class we use the export keyword before the class definition

const Person = require('./classes.js') // to import the class from the file where it is defined

let person =new Person("Abhijeet", "Jathar")

console.log(person.age)

console.log(person.location)
console.log(person.fullName())