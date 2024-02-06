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

// Creating the base user model

class User {
  constructor(name, email) {
    this._name = name
    this._email = email
  }

  getName() {
    return this._name
  }

  setName(newName) {
    this._name = newName
  }

  getEmail() {
    return this._email
  }

  setEmail(newEmail) {
    this._email = newEmail
  }

  viewProfile() {
    return `User: ${this._name}, Email: ${this._email}`
  }
}

class RegularUser extends User {
  constructor(name, email) {
    super(name, email)
    this._type = "Regular"
  }

  getType() {
    return this._type
  }

  // Additional action for the user
  placeOrder(product) {
    return `The product with the name ${product.getName()} has the price of ${product.getPrice()}. Order was placed successfully`
  }
}

let user1 = new RegularUser("john doe", "johndoe@gmail.com")
console.log(user1.getName())
console.log(user1.getEmail())
console.log(user1.viewProfile())
console.log(user1.getType())

let product1 = new Product("Vanilla Ice Cream", "100_000")

let result = user1.placeOrder(product1)

console.log(result)

console.log("########################################")


let user2 = new RegularUser("john mary", "johnmary@gmail.com")
console.log(user2.getName())
console.log(user2.getEmail())
console.log(user2.viewProfile())
console.log(user2.getType())


class AdminUser extends User {
  constructor(name, email) {
    super(name, email)
    this._type = "Admin"
  }

  getType() {
    return this._type
  }

  // Additional action for the user
  addProduct(productName) {
    return `Adding product ${productName} as an admin`
  }
}

let admin1 = new AdminUser("jerry doe", "jerrydoe@gmail.com")
console.log(admin1.getName())
console.log(admin1.getEmail())
console.log(admin1.viewProfile())
console.log(admin1.getType())
console.log(admin1.addProduct("Meat Pie"))
