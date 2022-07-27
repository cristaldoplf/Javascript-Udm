const heroes = {
  capi: {
    nombre: 'Capitan America',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Mucho dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'Telarañas'
  },
}


export const buscarHeroe = (id) => {

  const heroe = heroes[id];
  //dentro de la promesa se recibe un callback que se ejecutara independiente del tiempo
  //recibe generalmente resolve para devolver si se resuelve y reject si falla
  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un héroe con el id ${id}`);
    }
  });
}