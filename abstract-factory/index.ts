interface CarProps {
  ride(): void
}

abstract class Car implements CarProps {
  abstract ride(): void
}

class ElectricCar extends Car {
  constructor() {
    super()
  }
  ride(): void {}
}

class DieselCar extends Car {
  constructor() {
    super()
  }
  ride(): void {}
}

interface MotorcycleProps {
  ride(): void
}
abstract class Motorcycle implements MotorcycleProps {
  abstract ride(): void
}

class ElectricMotorcycle extends Motorcycle {
  constructor() {
    super()
  }
  ride(): void {}
}

class DieselMotorcycle extends Motorcycle {
  constructor() {
    super()
  }
  ride(): void {}
}

abstract class VehicleFactory {
  abstract createCar(): Car
  abstract createMotorcycle(): Car
}

class ElectricFactory extends VehicleFactory {
  createCar(): Car {
    return new ElectricCar()
  }

  createMotorcycle(): Motorcycle {
    return new ElectricMotorcycle()
  }
}

class DieselFactory extends VehicleFactory {
  createCar(): Car {
    return new DieselCar()
  }

  createMotorcycle(): Motorcycle {
    return new DieselMotorcycle()
  }
}


// ----------------------------------------------------------------

const electricFactory = new ElectricFactory()
electricFactory.createCar()
electricFactory.createMotorcycle()

const dieselFactory = new DieselFactory()
dieselFactory.createCar()
dieselFactory.createMotorcycle()
