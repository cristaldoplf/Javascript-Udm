import './styles.css';
import {
  buscarHeroe
} from './js/promesas'
import {
  buscarHeroe as buscarHeroeCallback
} from './js/callbacks'

const heroeId1 = 'capi'
const heroeId2 = 'iron'
const heroeId3 = 'spider'

// PROMISE HELL
// buscarHeroe(heroeId1).then(heroe1 => {
//   // console.log(`Enviando a ${heroe.nombre}`)
//   buscarHeroe(heroeId2).then(heroe2 => {
//     buscarHeroe(heroeId3).then(heroe3 => {
//       console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} y ${heroe3.nombre} a la mision`)
//     })
//   })
// })
// PROMISE ALL
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2), buscarHeroe(heroeId3)])
  .then(([heroe1, heroe2, heroe3]) => {
    console.log('promise.all', heroe1, heroe2, heroe3)
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} y ${heroe3.nombre} a la mision`)
  }).catch(err => {
    alert(err)
  }).finally(
    console.log('Se termino el Promise.all')
  )

console.log('Fin del programa')

//callback hell
// buscarHeroe(heroeId1, (err, heroe1) => {

//   if (err) { return console.error(err) } 

//   buscarHeroe(heroeId2,(err, heroe2)=>{
//     if(err) { return console.error(err) }
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)

//     buscarHeroe(heroeId3,(err, heroe3)=>{
//       if(err) { return console.error(err) }
//       console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} y ${heroe3.nombre} a la mision`)
//     })
//   })

// });