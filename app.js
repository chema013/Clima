const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    },
    city: {
        alias: 'c',
        desc: 'Ciudad a buscar',
        demand: true
    }
}).argv;

const getInfo = async(direccion, city) => {

    try {
        const coordenadas = await lugar.getLugar(direccion, city);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.long);
        return `El clima de ${coordenadas.name} es de ${temperatura} °C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${city},${direccion}.`;
    }
}

getInfo(argv.direccion, argv.city)
    .then(console.log)
    .catch(console.log);