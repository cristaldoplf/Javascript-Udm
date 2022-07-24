let a = 5;

if (a >= 10) {
  console.log('A es mayor a 10')
} else {
  console.log('A es menor a 10')
}
// console.log('Fin del programa')
const hoy = new Date();
let dia = hoy.getDay(); // 0:Domingo, 1:Lunes...
console.log({dia})

if (dia === 0) {
  console.log("Domingo")
} else {
  console.log("No es Domingo");
}