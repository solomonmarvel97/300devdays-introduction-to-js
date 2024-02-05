class Product {
    constructor(productId, name, price) {
        this.productId = productId
        this.name = name
        this.price = price
    }

    create() {
        // Save the record to the database
        let productObject = {
            productId : this.productId,
            productName: this.name,
            productPrice: this.price
        }
        productObject.message = "The product was created successfully"

        return productObject
    }

    static delete(id) {
        // run a query to delete the record
        // from the database given the specific id
        // passed into the static method

        return "Product was deleted successfully"
    }
}

let appleDrink = new Product(14122, "Apple Drink", 1000)

console.log(appleDrink.create())

Product.delete(14122)