/* import {
  promesaLenta,
  promesaMedia,
  promesaRapida
} from '../src/js/promesas' */
// import {buscarHeroe, buscarHeroeAsync} from './js/promesas'
import {
  obtenerHeroesArr
} from "./js/await";

obtenerHeroesArr().then(console.table)


// buscarHeroe('capi').then(console.log).catch(console.log)
// buscarHeroeAsync('iron').then(console.log).catch(console.log)

// promesaLenta.then((mensaje)=>console.log(mensaje))
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//   .then(console.log)
//   .catch(console.warn)