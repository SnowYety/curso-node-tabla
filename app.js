
const{crearArchivo} = require('./helpers/multiplicar')
const argv= require('./config/yargs')
const colors = require('colors');
console.clear()
//console.log(process.argv)

//const [,,arg3='base=5'] = process.argv
//const [,base=5] = arg3.split('=')

//console.log(process.argv);
//console.log(argv);

//console.log('base:yargs', argv.base)

console.log('Inicia el Programa.....................')

crearArchivo(argv.base,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err))