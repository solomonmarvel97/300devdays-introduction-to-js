**3. Object-Oriented Programming Principles**

Object-Oriented Programming (OOP) principles provide guidelines for designing and structuring code in a way that promotes reusability, maintainability, and scalability. Let's explore these principles and their practical implementation in JavaScript.

**1. Aggregation:**

Aggregation represents a relationship where one object contains references to other objects, but the contained objects can exist independently of the container. It emphasizes the "has-a" relationship.

**Practical Example:**

Consider a Library class that aggregates Book objects:

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = []; // Aggregation
  }
  
  addBook(book) {
    this.books.push(book);
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');

const library = new Library();
library.addBook(book1);
library.addBook(book2);
```

**2. Composition:**

Composition represents a relationship where one object contains another object as a part of its state. It emphasizes the "part-of" relationship.

**Practical Example:**

Consider a Car class composed of Engine and Wheels objects:

```javascript
class Engine {
  start() {
    console.log('Engine started');
  }
}

class Wheels {
  rotate() {
    console.log('Wheels rotating');
  }
}

class Car {
  constructor() {
    this.engine = new Engine(); // Composition
    this.wheels = new Wheels(); // Composition
  }
  
  drive() {
    this.engine.start();
    this.wheels.rotate();
    console.log('Car driving');
  }
}

const car = new Car();
car.drive();
```

**3. Multiplicity:**

Multiplicity represents the cardinality of relationships between objects, indicating how many instances of one class are associated with instances of another class.

**Practical Example:**

Consider a Classroom class that has multiple Student objects:

```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Classroom {
  constructor() {
    this.students = []; // Multiplicity
  }
  
  addStudent(student) {
    this.students.push(student);
  }
}

const student1 = new Student('Alice', 20);
const student2 = new Student('Bob', 22);

const classroom = new Classroom();
classroom.addStudent(student1);
classroom.addStudent(student2);
```

**4. Inheritance:**

Inheritance allows one class (subclass) to inherit properties and methods from another class (superclass), facilitating code reuse and promoting a hierarchical relationship.

**Practical Example:**

Consider a Parent class and a Child class inheriting from it:

```javascript
class Parent {
  greet() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  greet() {
    console.log('Hello from Child');
  }
}

const parent = new Parent();
parent.greet(); // Output: Hello from Parent

const child = new Child();
child.greet(); // Output: Hello from Child
```

**5. Encapsulation:**

Encapsulation hides the internal state of an object and restricts direct access to it, promoting data integrity and reducing code complexity.

**Practical Example:**

Consider a BankAccount class with private balance:

```javascript
class BankAccount {
  #balance = 0; // Encapsulation
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
    } else {
      console.log('Insufficient funds');
    }
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
account.withdraw(50);
console.log(account.getBalance()); // Output: 50
```

**6. Polymorphism:**

Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling flexibility and extensibility in code.

**Practical Example:**

Consider a Shape superclass and Rectangle and Circle subclasses:

```javascript
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Output: 50

const circle = new Circle(5);
console.log(circle.area()); // Output: ~78.54
```
