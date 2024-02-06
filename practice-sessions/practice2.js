
class Customer {
  constructor(name, email) {
    this._name = name
    this._email = email
  }

  getName() {
    return this._name
  }

  // this method changes the name of the customer
  setName(newName) {
    this._name = newName
  }

  getEmail() {
    return this._email
  }

  setEmail(newEmail) {
    this._email = newEmail
  }

  static sendPromotion(customer, promotion) {
    let message = `Hi ${customer.getName()}, ${promotion}`
    return message
  }

}

let customer1 = new Customer("John", "john@email.com")

console.log(customer1.getEmail())

customer1.setEmail("johnmark@outlook.com")

console.log(customer1.getEmail())

let promo = Customer.sendPromotion(customer1, "You just got yourself a free monthly sub")

console.log(promo)
