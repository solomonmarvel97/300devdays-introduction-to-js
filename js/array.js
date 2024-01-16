let mountains = ['Evest', 'Fuji', 'Nanga Parbat'];
console.log(mountains); // 'Everest'

mountains[0] = 'Everest'
console.log(mountains); // 'Everest'


console.log(mountains.length)


let locations = new Array();

console.log(locations)

locations.push("Abuja")
locations.push("Lagos")
locations.push(["Delta", "Calabar"])

console.log(locations.indexOf('Abuja'))

let arrayOfObjects = [
    {
        employee_id: 1,
        employee_name: "John Doe",
        employee_department: "IT"
    },
    {
        employee_id: 2,
        employee_name: "Mary Doe",
        employee_department: "HR"
    }
]

console.table(arrayOfObjects)