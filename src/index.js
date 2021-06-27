//Requiero Express
const express = require('express')
//Instancio Express
const app = express()

//Peticion GET a la ruta principal, responde con "Esto es una prueba para IC!"
app.get('/', async (req, res) => {
    res.status(200).send('Esto es una prueba para IC!')
})

//Arranco el Servidor en el puerto 3000
app.listen(process.env.PORT || 3000, ()=> {
    console.log('Corriendo...')
})

module.exports = app;