interface PrototypeProps {
  clone(): Prototype
}

class Prototype implements PrototypeProps {
  size: number

  constructor(source?: Prototype) {
    this.size = source?.size
  }

  clone(): Prototype {
    return Object.assign({}, this)
  }
}

// ----------------------------------------------------------------

const p1 = new Prototype()
p1.size = 2

const p2 = new Prototype(p1)

const p3 = p1.clone()

export {}
