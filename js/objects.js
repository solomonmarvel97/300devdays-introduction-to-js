let emptyObject = {}
console.log(emptyObject)

emptyObject.newProperty = "Hello World"
console.log(emptyObject)

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    department: "Computer Science",
    role: "Lecturer"
};

console.log(person)

let human = {
    legs : 2,
    hands: 2,
    head: 1,
}

console.log(human.legs + " legs")

human['eyes'] = 2
human.eyes = 2
human.legs = 3
console.log(human)

let employee = {
    name: "John Doe",
    dob: "1/1/1990",
    department: "IT",
    role: "DevOps Engineer"
}

console.table(employee)
// delete employee.role

console.log('role' in employee)