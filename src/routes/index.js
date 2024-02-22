const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("../controllers/getDogs");
const getDogsById = require("../controllers/getDogsById"); 
const getDogsByName = require("../controllers/getDogsByName"); 
const getAllTemps = require("../controllers/getTemperaments"); 
const postDogs = require("../controllers/postDogs"); 

const router = Router();

router.get("/api/dogs", (req, res) => {
    if (req.query.name) getDogsByName(req, res); 
    else getDogs(req, res);
});

router.get("/api/dogs/:id", (req, res) => {
    getDogsById(req, res);
});

router.get("/api/dogs", (req, res) => {
    getDogsByName(req, res);
});

router.get("/api/temperaments", (req, res) => {
    getAllTemps(req, res);
});

router.post("/api/dogs", (req, res) => {
    postDogs(req, res);
});



module.exports = router;



