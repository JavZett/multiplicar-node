const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    if (!Number(base)){
        console.log(`${base} no es un número`);
        return;
    } else if (!Number(limite)){
        console.log(`${limite} no es un número`);
        return;
    }
    for( let i = 0; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}
let crearArchivo = (base, limite = 10) => {
    
    return new Promise((resolve, reject) => {

        if (!Number(base)){
            console.log(`${base} no es un número`);
            return;
        } else if (!Number(limite)){
            console.log(`${limite} no es un número`);
            return;
        }
        let data = '';

        for(let i = 0; i <= limite; i++) data += `${base} * ${i} = ${base*i}\n`;

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject (err);
            else
                resolve(`tabla-${base}.txt`);

        });
    
    });
}

module.exports = {
    crearArchivo,
    listar
}