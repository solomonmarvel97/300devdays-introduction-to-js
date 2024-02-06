class Product {
  constructor(name, price) {
    this._name = name
    this._price = price
  }

  // Encapsulation
  getName() {
    return this._name
  }

  setName(newName) {
    this._name = newName
  }

  getPrice() {
    return this._price
  }

  setPrice(newPrice) {
    this._price = newPrice
  }

  calculateTotalPrice(quantity) {
    return this._price * quantity
  }

  static currencyConverter(price, exchangeRate) {
    return price * exchangeRate
  }
}

let product1 = new Product("Football", 1000)

console.log(product1.getPrice())

product1.setPrice(10_000)

console.log(product1.getPrice())

// calculate total price if we need to purchase 5 football
let totalPrice = product1.calculateTotalPrice(5)
console.log(totalPrice)

let exchangeRateInNGN = Product.currencyConverter(product1._price, 1400)
console.log(exchangeRateInNGN)
