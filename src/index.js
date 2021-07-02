//Requiero Express
const express = require('express')
//Instancio Express
const app = express()

//Peticion GET a la ruta principal, responde con "Esto es una prueba para IC!"
app.get('/', async (req, res) => {
    res.status(200).send('Esto es una prueba para IC!')
})


module.exports = app;