// To create a claas in JS

module.exports = class Person
{
    age = 25
    //location = "Pune"

    // getters and setters are used to get and set the value of a property

    get location()
    {
        return "Pune"
    }

    // constructor is a special method that is automatically called when an object of the class is created

    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    // Methods
    fullName()
    {
        console.log(this.firstName + " " + this.lastName)
    }

}

// To create an obhect of a class

// let person = new Person("Abhijeet", "Jathar")
// console.log(person.age)

// console.log(person.location)
// console.log(person.fullName())