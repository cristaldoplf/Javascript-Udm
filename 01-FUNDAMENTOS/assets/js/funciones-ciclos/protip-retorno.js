/* function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido
  }
} */

// const crearPersona = (nombre, apellido) => ({
//   nombre,
//   apellido
// })

// const persona = crearPersona('Pablo', 'Cristaldo')

// console.log(persona)

// function imprimeArgumentos() {
//   console.log(arguments)
// }
// imprimeArgumentos(10,true,false,'pablo','hola')

// const imprimeArgumentos2 = (edad ,...args) => { /// hace referencia a un parametro REST que dice create un arreglo con cada argumento enviado.
//   // console.log( {edad, args} ); 
//   console.log(args)
//   return args;
// }

// const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false,'pablo','hola');
// console.log({casado, vivo,nombre,saludo})

// const {apellido} = crearPersona('pablo', 'cristaldo')
// console.log({apellido})

// const tony = {
//   nombre: 'Tony Stark',
//   codeName: 'Ironman',
//   vivo: false,
//   edad: 40,
//   trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
// };
// const imprimePropiedades = ({ nombre,codeName,vivo,edad = 15,trajes}) => {
//   console.log({nombre})
//   console.log({codeName})
//   console.log({vivo})
//   console.log({edad})
//   console.log({trajes})
// }
// imprimePropiedades(tony)