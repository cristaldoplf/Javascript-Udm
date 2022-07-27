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

//ponemos async antes de la funcion para transformarla y resume toda la estructura.
export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw Error(`No existe un héroe con el id ${id}`);
  }
}

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa Lenta')
  }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa Media')
  }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa Rapida')
  }, 1000);
});

export {
  promesaLenta,
  promesaMedia,
  promesaRapida
}