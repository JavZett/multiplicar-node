const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo, listar} = require('./multiplicar/mutiplicar');

 let comando = argv._[0];
 switch(comando) {
    case 'listar':
        console.log('Listar');
        listar( argv.base, argv.limite);
    break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo}.txt creado correctamente`))
            .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido');

 }
//console.log(process.argv);
//let argv2 = process.argv;
//let parametero = argv[2];
//let base = parametero.split('=') [1]
//console.log(argv.base);
//console.log('Límite', argv.limite);

