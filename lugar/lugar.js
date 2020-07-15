const axios = require('axios');

const getLugar = async(code, city) => {

    const resp = await axios({
        "method": "GET",
        "url": `https://countries-cities.p.rapidapi.com/location/country/${code}/city/list`,
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "countries-cities.p.rapidapi.com",
            "x-rapidapi-key": "d8e71d068fmsh620b02715149a39p15c342jsn50dd0f96c106",
            "useQueryString": true
        },
        "params": {
            "page": "2",
            "per_page": "20",
            "format": "json",
            "population": "15000"
        }
    });

    let listaCiudades = resp.data.cities;

    var cu = listaCiudades.filter(element => {
        return (element.name === city)
    });

    if (cu.length <= 0) {
        throw new Error(`No hay resultados para ${code}`);
    }

    return {
        name: cu[0].name,
        lat: cu[0].latitude,
        long: cu[0].longitude
    }
};

module.exports = {
    getLugar
}