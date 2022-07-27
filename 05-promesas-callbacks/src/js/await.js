const heroesIds = ['capi', 'iron', 'spider'];
import {
  buscarHeroe,
  buscarHeroeAsync
} from './promesas'

const heroesPromesa = heroesIds.map(id => buscarHeroe(id))

export const obtenerHeroesArr = async () => {

  const heroesArr = [];

  for (const id of heroesIds) {
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe)
  }

  return heroesArr;
}