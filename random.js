// Math.random() devuelve número aleatorio entre 9 y 1.
var numero = Math.random();

var str = ' MAYOR que 0,5'

if(numero <= 0.5){
	str = ' MENOR que 0,5';
} 

console.log('\n' + numero + str +'\n');
