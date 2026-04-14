// Objects is an collection of properties and methods. It is a data structure that can store multiple values 
// in a single variable. It is a way to group related data and functions together.

// Properties are defined in key-value pairs. The key is a string that represents the name of the property, 
// and the value can be any data type, including another object or a function.

let person = {
    "name": "Abhijeet",
    lastName: "Jathar",
    "age": 30,
    // method is a function that is defined inside an object. 
    // It can be called using the object name and the method name.
    fullName: function(){
        console.log(this.name + " " + this.lastName);
    }
}

console.log(person.fullName()); // Output: Abhijeet Jathar

console.log(person.name); // Output: Abhijeet
console.log(person.lastName); // Output: Jathar

// with the help of index like array notation  
console.log(person["name"]); // Output: Abhijeet

person.gender = "Male"; // Adding a new property to the object
console.log(person.gender);

// to delete a property from the object we can use delete keyword
delete person.age;
console.log(person.age); // Output: undefined

// to check a property is present in the object or not we can use in operator

console.log("age" in person); // Output: false

// to print all the values of the object we can use for in loop

for(let key in person)
{
    console.log(person[key]);    
}

