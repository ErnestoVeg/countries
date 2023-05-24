const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countriesRoutes");
const activitiesRouter = require("./activityRoutes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);

router.use("/activities", activitiesRouter);

router.get("/", (req, res)=>{
    res.status(200).send("Estamos en el main, será esto el landing?")
})

module.exports = router;
