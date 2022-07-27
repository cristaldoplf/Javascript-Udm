import './styles.css';
import {
  buscarHeroe
} from './js/callbacks'

const heroeId = 'capi9'

buscarHeroe(heroeId, (err, heroe) => {
  
  if (err) {
    console.error(err)
    /* llega el error de no existir el id */
  } else {
    console.log(heroe)
    /* de existir el id, llega el heroe */
  }
});