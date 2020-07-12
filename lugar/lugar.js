const axios = require('axios');
const getLugarLatIng = async (dir) =>{
    const encodeULR = encodeURI(dir);

    const instance = axios.create({
        baseURL:`https://geocode.xyz/${encodeULR}?json=1`
    });

    const resp = await instance.get();
    if(resp.data.length ===0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const longt = data.longt;

    return{
        direccion,
        lat,
        longt
    }

    //console.log(argv.direccion);
}

module.exports = {
    getLugarLatIng
}



