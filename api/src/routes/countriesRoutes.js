const { Router } = require('express');
const { getCountriesHandler, getCountriesByIdHandler } = require("./handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler)

countriesRouter.get("/:idPais", getCountriesByIdHandler);

module.exports = countriesRouter;