const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias :'d',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLatIng(argv.direccion)
    .then(console.log);*/

/*clima.getClima(40.42955, -3.67930)//ejemplo madrid
    .then(console.log)
    .catch(console.log);*/
const getInfo = async(direccion) =>{

    try {
        const coordenadas = await lugar.getLugarLatIng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.longt); 
 
        return `el clima de ${coordenadas.direccion} es de ${temperatura}.`;
    } catch (error) {
        return `no se pudo determinar el clima ${direccion}`;
    }
    




    //clima salida
    //else no se pudo determinar el clima
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


