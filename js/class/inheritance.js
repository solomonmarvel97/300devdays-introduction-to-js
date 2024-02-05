// Class declaration
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
// Inheritance with classes
class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    // Overriding the greet method
    greet() {
      console.log(`Hello, my name is ${this.name}, and I am a student.`);
    }
  }
  
  let alice = new Student('Alice Smith', 20, 'A');
  alice.greet();