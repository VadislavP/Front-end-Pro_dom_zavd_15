function createCar(make, model, year, speed) {
    const car = {
        make: make,
        model: model,
        _year: year,
        _currentSpeed: speed,

        get age() {
            return this._year;
        },

        set age(newYear) {
            if (newYear <= new Date().getFullYear()) {
                this._year = newYear;
            } else {
                console.log("Invalid year.");
            }
        },

        get currentSpeed() {
            return this._currentSpeed;
        },

        set currentSpeed(newSpeed) {
            if (newSpeed >= 0) {
                this._currentSpeed = newSpeed;
            } else {
                console.log("Invalid speed.");
            }
        },

        accelerate: function (amount) {
            this.currentSpeed += amount;
        },

        brake: function (amount) {
            this.currentSpeed -= amount;
        }
    };

    return car;
}

// Приклад використання:
const myCar = createCar('Toyota', 'Camry', 2018, 120);
console.log(`Car is ${myCar.age} years old.`); // Car is 2018 years old.

myCar.age = 2024;
console.log(`Car is ${myCar.age} years old.`); // Car is 2018 years old.

myCar.accelerate(20);
console.log(`${myCar.currentSpeed} km/h.`); // 140 km/h.
myCar.brake(10);
console.log(`${myCar.currentSpeed} km/h.`); // 130 km/h.

