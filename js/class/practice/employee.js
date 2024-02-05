class Employee {
    constructor(name, employeeId, position) {
        this.name = name
        this.employeeId = employeeId
        this.position = position
    }

    getDetails() {
        return `Name: ${this.name}, Employee ID: ${this.employeeId}, Position: ${this.position}`
    }

    work() {
        console.log(`${this.namee} is performing regular tasks`)
    }
}


// perform inheritance

class AdminEmployee extends Employee {
    constructor(name, employeeId, position, department) {
        super(name, employeeId, position)
        this.department = department
    }

    // polymorphism
    getDetails() {
        // overriding the getDetails method to include the department
        return `${super.getDetails()}, Department: ${this.department}`
    }

    manageEmployees() {
        console.log(`${this.name}, is managing other employees`)
    }

    accessSensitiveInformation() {
        console.log(`${this.name} can access sensitive information`)
    }
}


// creating the instances

let regularEmployee = new Employee('John Doe', '12412', 'Software Developer')
let adminEmployee = new AdminEmployee('John James', '121231', 'IT Manager', "IT Department")

// Display Details 
console.log(regularEmployee.getDetails())
console.log(adminEmployee.getDetails())

adminEmployee.manageEmployees()