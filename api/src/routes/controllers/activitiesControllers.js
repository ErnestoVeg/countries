const {Activity, Country} = require("../../db");

const createActivity = async (nombre, dificultad, duracion, temporada, countries) =>{

    const newActivity = await Activity.create({nombre, dificultad, duracion, temporada});
    await newActivity.addCountry(countries);
    return newActivity;
}

const getActivities = async () => {

    const actividades = await Activity.findAll({
        include:
        {model: Country,
            attributes:
            ["id", "name"]
        }
    })
    const result = actividades.length? actividades : "No hay actividades para mostrar";
    return result;
}

module.exports = { 
    createActivity,
    getActivities
}