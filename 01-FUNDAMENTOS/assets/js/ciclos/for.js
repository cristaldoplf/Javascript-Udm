const heroes = ["batman", "superman", "mujer maravilla", "aquaman"]

console.warn("For tradicional")

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i])
}

console.warn('For in')
for(let i in heroes){
  console.log(heroes[i])
}//es similar al for comun

console.warn('For of')
for (let heroe of heroes) {
  console.log(heroe)
}//extrae el valor dentro del arreglo y lo devuelve a la variable iteradora