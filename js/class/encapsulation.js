// Encapsulation with classes
class Car {
    #speed = 0; // private variable
  
    accelerate(amount) {
      this.#speed += amount;
    }
  
    brake(amount) {
      this.#speed = Math.max(0, this.#speed - amount);
    }
  
    getInfo() {
      return `Current speed: ${this.#speed} km/h`;
    }
  }
  
  let myCar = new Car();
  myCar.accelerate(30);
  console.log(myCar.getInfo());