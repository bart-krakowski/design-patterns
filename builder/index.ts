interface Builder {
  setSeats(): void
  setDoors(): void
  setEngine(): void
}

class Car {
  public parts: string[] = []

  public getParts(): string[] {
    return this.parts
  }
}

class Manual {
  public parts: string[] = []

  getParts(): string[] {
    return this.parts
  }
}

class CarBuilder implements Builder {
  private car: Car

  public setSeats(): void {
    this.car.parts.push('Seats')
  }

  public setDoors(): void {
    this.car.parts.push('Doors')
  }

  public setEngine(): void {
    this.car.parts.push('Engine')
  }
}

class CarManualBuilder implements Builder {
  private manual: Manual

  public setSeats(): void {
    this.manual.parts.push('Seats')
  }

  public setDoors(): void {
    this.manual.parts.push('Doors')
  }

  public setEngine(): void {
    this.manual.parts.push('Engine')
  }
}

class Director {
  private builder: Builder

  public setBuilder (builder: Builder): void {
    this.builder = builder
  }

  public constructCar(): void {
    this.builder.setSeats()
    this.builder.setDoors()
    this.builder.setEngine()
  }

  public constructManual() : void {
    this.builder.setSeats()
    this.builder.setDoors()
    this.builder.setEngine()
  }
}

// ------------------------------------------

const director = new Director();
const builder = new CarBuilder()

director.setBuilder(builder)
director.constructCar()
director.constructManual()
