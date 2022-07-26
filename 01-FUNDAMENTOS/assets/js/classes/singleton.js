class Singleton {
  static instancia;
  nombre = '';

  constructor(nombre = '') {
    if (!!Singleton.instancia) {
      //el this hace referencia a esta instancia de la clase en este momento
      return Singleton.instancia;
    }
    Singleton.instancia = this;
    this.nombre = nombre;
    return this;
  }
}

const instancia1 = new Singleton('Ironman')
const instancia2 = new Singleton('Spiderman')

console.log(`Nombre en la instancia1 es ${instancia1.nombre}`)//Nombre en la instancia1 es Ironman
console.log(`Nombre en la instancia2 es ${instancia2.nombre}`)//Nombre en la instancia1 es Ironman