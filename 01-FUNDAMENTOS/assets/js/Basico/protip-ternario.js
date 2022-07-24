const elMayor = (a, b) => (a > b) ? a : b;
console.log(elMayor(20, 15))

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';
console.log(tieneMembresia(true))
console.log(tieneMembresia(false))

const amigo = true;
const amigosArr = ["pablo",
  "dario",
  "tony",
  amigo ? "Thor" : "Loki",
  elMayor(10, 15)
]
console.log({
  amigosArr
})

const nota = 65;
const grado = nota >= 95 ? "A+" :
              nota >= 90 ? "A" :
              nota >= 85 ? "B+" :
              nota >= 80 ? "B" :
              nota >= 75 ? "C+" :
              nota >= 70 ? "C" : "F";
console.log(grado)