

alert('Hola desde app.js')

let 
  a = 10, 
  b = 20, 
  c = 30, 
  d = 40, 
  x = a + b,
  f = 'Hola',
  g = 'Spiderman';


  const salud = f +' '+ g;

console.log('%c Mis variables', 'color:blue; font-weight: bold')
console.log(a)
console.warn(b)
console.error(c)

c = 'Hola de nuevo'

console.table({a,b,c,d,x,salud})