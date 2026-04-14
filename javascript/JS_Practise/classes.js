// Classes in JavaScript
class Person
{
    name = "Abhijeet";
    lastName = "Jathar";
    age = 30;
    // getter is a method that is used to get the value of a property. 
    // It is defined using the get keyword.
    get location()
    {
        return "Pune";
    }

    // constructor is a special method that is called when an object is created. It
    //  is used to initialize the properties of the object.

    constructor(firstName, lastName, age)
    {
        this.name = firstName;
        this.lastName = lastName;
        this.age = age;
    }

}

let person = new Person("Abhi","Jat",12);

console.log(person.name); // Output: Abhi
