const { getCountriesDb, getCountriesByName, getCountryById } = require("../controllers/countriesControllers");

const getCountriesHandler = async (req, res) => {
    const {name} = req.query;

    try{
        const results = name? await getCountriesByName(name) : await getCountriesDb();
        // if(typeof results === "string")
        res.status(200).json(results);
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

const getCountriesByIdHandler = async (req, res)=>{
    const {idPais} = req.params;
    try {
        const paisBuscado = await getCountryById(idPais);
        res.status(200).json(paisBuscado);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports = {getCountriesHandler, getCountriesByIdHandler }