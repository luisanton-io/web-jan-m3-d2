// Class

// A class is a blueprint representing the data structure of an object

class Car {

    constructor(__make, __model, __year) { // parameters
        this["make"] = __make
        this["model"] = __model
        this.year = __year
        this.lastChecked = new Date()
        // 
    }

    details() {
        return `My car is: ${this.make} ${this.model} ${this.year}`
    }

}

class BMW extends Car {
    constructor(__model, __year) {
        super("BMW", __model, __year)
        this.xDrive = true
    }
}

const myCar = new Car("Ford", "Mustang", 1969)
const anotherCar = new Car("BMW", "M3", 2018)
const justAnotherCar = new Car("BMW", "M3", 2018)

const myBMW = new BMW("M3", 2022)

console.log(myBMW.details())

console.log(myCar)

console.log(myCar.details())

// console.log({
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969,
//     lastChecked: new Date()
// } instanceof Car)