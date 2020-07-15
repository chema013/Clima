const axios = require("axios");

const getClima = async(lat, long) => {
    const resp = await axios({
        "method": "GET",
        "url": "https://community-open-weather-map.p.rapidapi.com/weather",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "d8e71d068fmsh620b02715149a39p15c342jsn50dd0f96c106",
            "useQueryString": true
        },
        "params": {
            "lat": lat,
            "lon": long,
            "callback": "test",
            "id": "2172797",
            "units": "%22metric%22 or %22imperial%22",
            "mode": "xml%2C html",
            "q": ""
        }
    });

    var datos = resp.data.split('(');
    datos = datos[1].split(')');
    const resultado = JSON.parse(datos[0]);

    return resultado.main.temp - 273.15;
}

module.exports = {
    getClima
}