class Calculator {
    constructor(value) {
        this.value = value
    }

    add(num) {
        this.value += num
        return this
    }

    subtract(num) {
        this.value -= num
        return this
    }

    multiply(num) {
        this.value *= num
        return this
    }

    divide(num) {
        this.value /= num
        return this
    }

    getResult() {
        return this.value
    }
}

const result = new Calculator(10)
    .add(5)
    .subtract(8)
    .multiply(2)
    .divide(2)
    .getResult()

console.log(result)