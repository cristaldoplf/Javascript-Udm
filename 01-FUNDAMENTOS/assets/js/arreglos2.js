let juegos = ['zelda', 'mario', 'metroid', 'chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2 - 2];;
let ultimo = juegos[juegos.length - 1];

console.log({
  primero,
  ultimo
});

juegos.forEach((ele, index, arr) => {
  console.log({
    ele,
    index,
    arr
  })
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem')
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.pop()
console.log({nuevaLongitud, juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegos})
console.log({juegosBorrados})

let metroidIndex = juegos.indexOf('metroid');//CaSeSeNsItIvE
console.log( { metroidIndex })