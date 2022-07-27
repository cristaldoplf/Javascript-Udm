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

export const buscarHeroe = (id, callback) => {

  const heroe = heroes[id];

  if (heroe) {
    callback(null, heroe) /* si el heroe existe, 
    devolvemos el error como null y el heroe */
  } else {
    callback(`No existe un héroe con el id ${id}`)
    /* si el heroe no existe, solo 
    devolvemos el error */
  }

  // callback(heroe);

}