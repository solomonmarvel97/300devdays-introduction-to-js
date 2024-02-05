class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

        // perform some other actions
    }

    // this is a method
    printDetails() {
        return `This person's name is ${this.name}, and this person's age is ${this.age}`
    }
}

let john = new Person("John James", 45)

console.log(john.printDetails())