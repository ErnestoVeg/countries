const axios = require('axios');
const { Country , Activity } = require("../../db");
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;


const getAllCountries = async () => { 
    //? FUNCIÓN QUE TRAE, LIMPIA Y CARGA LA INFO DE LA API A LA  BASE DE DATOS
    
    //* ÚNICO ENDPOINT URL="https://rest-countries.up.railway.app/v3/all"
    try{
    const dataCruda = await axios.get("https://rest-countries.up.railway.app/v3/all ");
     
    const paisesMap = await dataCruda.data.map((pais)=>{
        return{
            id: pais.cca3,
            name: pais.name.common,
            img:  pais.flags[0],
            continente: pais.continents[0] ? pais.continents[0] : 'No encontré continente',
            capital: pais.capital? pais.capital[0]: 'Not Found',
            subregion: pais.subregion,
            area: pais.area,
            poblacion: pais.population,
        };
    }); 

    const save = async () => {

        await paisesMap.map( async (paisM)=>{

                await Country.findOrCreate({
                where:{
                    name: paisM.name,
                    id: paisM.id,
                },
                defaults:{
                    img: paisM.img,
                    continente: paisM.continente,
                    capital: paisM.capital,
                    subregion: paisM.subregion,
                    area: paisM.area,
                    poblacion: paisM.poblacion,   
                }
            })
            .catch((error) => {console.log(error); })
        })        
    }
    save();
    
    // console.log(paisesMap)
    console.log(`Trajo la info de ${paisesMap.length} países`)
    console.log(await Country.findAll({where:{capital: 'Buenos Aires'}}))
    return paisesMap;}
    catch(error){
        console.log(error);
        return error;
    }

};

const getCountriesDb = async () => {

    const countries = await Country.findAll();
    return countries;
}

const getCountriesByName = async (name) =>{
    const buscar = name;
    const countries = await Country.findAll({
        where:{
            name: {
                [Op.iLike]: `%${buscar}%`
            }
        }
    })

    const respuesta = countries.length? countries : Country.findAll();

    return respuesta;
}

const getCountryById = async (idPais) =>{
    if(idPais.length !== 3) throw new Error("Id incorrecto");

    const info = await Country.findByPk(idPais, 
        {include:
        {model: Activity,
                attributes:
            ["nombre", "dificultad", "duracion", "temporada"]
            }})
    const respuesta = Object.keys(info).length ? info : "No se reconoce el id de país";
    return respuesta; 
}

module.exports = {
    getAllCountries,
    getCountriesDb,
    getCountriesByName,
    getCountryById
}