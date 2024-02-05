class Human {
    constructor(name, age, hands, legs) {
        this.name = name
        this.age = age
        this.hand = hands
        this.legs = legs
    }

    walk() {
        return `${this.name} is walking`
    }

    eat() {
        return `${this.name} is eating`
    }
}

let marv = new Human("Marv Magic", 40, 2, 2)

console.log(marv.eat())