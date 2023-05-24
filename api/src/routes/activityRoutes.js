const { Router } = require('express');
const { createActivityHandler, getActivitiesHandler } = require("./handlers/activitiesHandlers"); 

const activitiesRouter = Router();

activitiesRouter.post("/", createActivityHandler);

activitiesRouter.get("/", getActivitiesHandler);

module.exports = activitiesRouter;