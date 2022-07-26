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
    
    /* para una clase statica usamos el nombre de la clase y la llamamos con el dot notation, por que el this
    hace referencia a la propiedad del objeto, no de la clase. */
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

class Heroe extends Persona{
  
  clan;

  constructor(nombre, codigo, frase,clan ='sin clan') {
    //hacemos referencia a la clase que extendemos
    super(nombre, codigo, frase);  
    
    this.clan = clan;
  }

  quienSoy(){
    //podemos "sobreescribir el metodo de la clase padre", podemos llamar a super dentreo del petodo para acceder al del padre
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo} y soy del clan ${this.clan}`)
    super.quienSoy()
  }

}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman', 'Avengers');
const ironMan = new Heroe('Tony Stark', 'Iron Man', 'Soy Iron Man');

console.log(spiderman)
spiderman.quienSoy()