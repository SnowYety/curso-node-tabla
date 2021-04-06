const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base=5,listar=false,hasta=1) =>{
let salida='';
let consola='';

    try {
        for(let i= 1; i<=hasta; i++){
            //console.log(i);
            salida += `${base} X ${i} = ${base*i}\n`;
            consola += `${base} ${'X'.blue} ${i} ${'='.yellow} ${base*i}\n`;
        }
        if(listar){
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)

        return `Archivo tabla-${base}.txt creado.... :)`
    } catch (error) {

        throw(error)
    }
    
}

module.exports={
    crearArchivo
}