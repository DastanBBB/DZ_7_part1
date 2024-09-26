class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }
    //Метод для запуска машины
    start() {
        console.log(`${this.model} завелась`);
    }

    showDetails() {
        console.log(`Модель: ${this.model}, Цвет: ${this.color}, Количество колес: ${this.wheels}`);
    }
}

class electricCar extends Cars {
    constructor(model, color, wheels, batteryCapacity) {
        super(model, color, wheels);
        this.batteryCapacity = batteryCapacity; //Доп параметр
    }
    charge() {
        console.log(`${this.model} заряжается. Емкость батареи: ${this.batteryCapacity} кВт/ч`);
    }
}

// Класс Трак, наследуется от cars
class truck extends Cars {
    constructor(model, color, wheels, loadCapacity) {
        super(model, color, wheels);
        this.loadCapacity = loadCapacity; // Доп параметр
    }

    load() {
        console.log(`${this.model} может перевезти ${this.loadCapacity} кг груза`);
    }
}

class sportsCar extends Cars {
    constructor(model, color, wheels, maxSpeed) {
        super(model, color, wheels);
        this.maxSpeed = maxSpeed; // Доп параметр
    }
    race() {
        console.log(`${this.model} едет со скоростью ${this.maxSpeed} км/ч`);
    }
}

// Экземпляры машин
const tesla = new electricCar('Tesla Model X', 'Серебристый', 4, 100);
const volvo = new truck('Volvo', 'Черный', 6, 2000);
const lamborghini = new sportsCar('Huracan', 'Красный', 4, 350);

//Вызываю методы
tesla.showDetails();
tesla.start();
tesla.charge();

volvo.showDetails();
volvo.start();
volvo.load();

lamborghini.showDetails();
lamborghini.start();
lamborghini.race();
