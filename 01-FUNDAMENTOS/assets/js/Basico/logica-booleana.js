// const regreseTrue = () => {
//   console.log("Regresa true");
//   return true;
// }

// const regreseFalse = () => {
//   console.log("Regresa false");
//   return false;
// }

// console.log(regreseFalse())
// console.log("=============");
// console.log(regreseFalse() && regreseTrue())

/* console.warn('Not o la negacion')
console.log(true)
console.log(!true) */

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a6 = soyFalse || soyNull || soyUndefined || "Ya no soy falso"; // "Ya no soy falso"

const a1 = true && 'Hola Mundo'; // el valor es 'Hola Mundo'
const a2 = true && 'Hola Mundo' && 123; // el valor es 123, muestra el ultimo valor
const a3 = false && 'Hola'; // sera false

const a4 = "hola" && "mundo" //sera mundo
const a5 = "hola" && "mundo" && false //sera falso
