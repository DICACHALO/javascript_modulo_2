// Fechas

let fecha = new Date();
let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1; //Siempre toca agregar +1 porque empieza el conteo en 0
let diaSemana = fecha.getDay(); //Así toma el número del día en que vamos
let dia = fecha.getDate();
let hora = fecha.getHours() + ":" + fecha.getMinutes();

console.log(fecha);
console.log(anio + "/" + mes + "/" + dia + ": " + hora);
