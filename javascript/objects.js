// Objects is an collection of properties
// Each property has a key and a value

let person = 
{
    firstName: "Abhijeet",
    lastName: "Jathar",
    age: 26,
    // to add a method to the object
    fullName : function()
    {
        console.log(this.firstName + this.lastName)
    }

}
console.log(person.fullName()) // to call the method of the object
console.log(person.firstName)
console.log(person["lastName"])

// To Change the value of a property
person.firstName = "Abhi"
console.log(person.firstName)

// To add a new property to the object

person.gender = "male"
console.log(person)

// To delete a property from the object

delete person.gender
console.log(person)

// To check if a property exists in the object
console.log('gender' in person)

// To print the aal the values of object

for(let key in person)
{
    console.log(person[key])
}
