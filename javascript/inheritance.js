//Inheritance in JavaScript
// Inheritance is the main pillar of Object-Oriented Programming (OOP). 
// It allows us to create a new class that is a child of an existing class. 
// The child class inherits all the properties and methods of the parent class, 
// and can also have its own properties and methods.

// The child class which inherits from the parent class is called a subclass(derived class, child class, or sub class), 
// and the parent class is called a superclass.

const Person = require('./classes')
class Pet extends Person

{
    // constructor should be defined in the child class to initialize the properties of the child class
    constructor(firstName, lastName)
    {
        // call parent class constructor to initialize the properties of the parent class
        super(firstName, lastName)
    }

    get location()
    {
        return "Mumbai"
    }
}

let pet =new Pet("Tom", "Cat")
pet.fullName()
console.log(pet.location)