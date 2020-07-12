const axios = require('axios');

const getClima = async(latitud, longitud) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=4627b51eab53d238d65773929296ecac&units=metric`);

    return resp.data.main.temp;

    //console.log(argv.direccion);
}

module.exports = {
    getClima
}



