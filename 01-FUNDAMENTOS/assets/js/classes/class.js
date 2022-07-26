class Persona {
  //propiedad estatica, pertenece a la clase, no a los objetos
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  /* es opcional, pueden dejarlos en el constructor, pero si en la clase ocupamos una adicional, 
  necesitamos agregarla aqui aunque no sea recibida por el constructor */
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
    // if (!nombre) throw Error('Necesitamos el nombre')
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    
    //para una clase statica usamos el nombre de la clase y la llamamos con el dot notation, por que el this
    //hace referencia a la propiedad del objeto, no de la clase.
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida
  }

  get getComidaFavorita(){
    return `La comida favorita de ${this.codigo} es ${this.comida}`
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`)
  }
}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironMan = new Persona('Tony Stark', 'Iron Man', 'Soy Iron Man');
// console.log(ironMan);
spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'EL pie de cereza de la tia May';
spiderman.nemesis = 'Duente Verde'


console.log(spiderman.getComidaFavorita);
console.log(spiderman);
console.log('Conteo statico', Persona._conteo)
console.log(Persona.conteo)

//podemos crear propiedades estaticas de la siguiente forma en una clase.
Persona.propiedadExterna = 'Hola, soy una propiedad Statica creada de forma externa.'
console.log(spiderman);