let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  },
  'ultima-pelicula': 'infinity war',//podemos usar el menos para nombres si lo usamos como string
  casado: false

};

console.log(personaje);
console.log('nombre:', personaje.nombre);
console.log('nombre:', personaje['nombre']);
console.log('edad:', personaje.edad);
console.log('coors:', personaje.coords.lat, personaje.coords.lng);
console.log('nr de trajes:', personaje.trajes.length);
console.log('ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]); // va a buscar la propiedad vivo como si buscaramos por el nombre

console.log('Ultima pelicula', personaje['ultima-pelicula'])

// mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje ); //convierte a las propiedades y valores en arrays y al objeto en un array.
console.log(entriesPares);

Object.freeze( personaje ); // lo congela al momento en el que uso la instruccion
//pero solo a las asignaciones directas, si hay un objeto dentro, puede cambiarse.
personaje.dinero = 100000000;
personaje.casado = false;

const propiedades = Object.getOwnPropertyNames( personaje ) // transforma el listado de propiedades a forma de arreglo
const valores = Object.values( personaje ) // nos lista los valores del objeto
console.log({propiedades})
console.log({valores})
