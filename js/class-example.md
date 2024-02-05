
# Example class definition of an Employee Record System

```javascript
class Employee {
  constructor(name, employeeId, position) {
    this.name = name;
    this.employeeId = employeeId;
    this.position = position;
  }

  getDetails() {
    return `Name: ${this.name}, Employee ID: ${this.employeeId}, Position: ${this.position}`;
  }

  work() {
    console.log(`${this.name} is performing regular work tasks.`);
  }
}

class AdminEmployee extends Employee {
  constructor(name, employeeId, position, department) {
    super(name, employeeId, position);
    this.department = department;
  }

  getDetails() {
    // Overriding the getDetails method to include the department
    return `${super.getDetails()}, Department: ${this.department}`;
  }

  manageEmployees() {
    console.log(`${this.name} is managing other employees.`);
  }

  accessSensitiveInformation() {
    console.log(`${this.name} has access to sensitive information.`);
  }
}

// Creating instances of Employee and AdminEmployee
let regularEmployee = new Employee('John Doe', 'E001', 'Software Developer');
let adminEmployee = new AdminEmployee('Admin Smith', 'A001', 'IT Manager', 'IT Department');

// Displaying details
console.log(regularEmployee.getDetails());
console.log(adminEmployee.getDetails());

// Regular employee performing work
regularEmployee.work();

// Admin employee performing work and additional actions
adminEmployee.work();
adminEmployee.manageEmployees();
adminEmployee.accessSensitiveInformation();
```

In this example:

- The `Employee` class has basic properties like name, employee ID, and position, along with methods like `getDetails` and `work`.
- The `AdminEmployee` class inherits from `Employee` and extends its functionality by including a `department` property and additional methods like `manageEmployees` and `accessSensitiveInformation`.
- Instances of both classes are created, and you can see how the AdminEmployee has access to the methods of the Employee class and adds its own methods for managing employees and accessing sensitive information.
