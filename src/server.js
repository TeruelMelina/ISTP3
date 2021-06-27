const app = require('./index')


//Arranco el Servidor en el puerto 3000
app.listen(process.env.PORT || 3000, ()=> {
    console.log('Corriendo...')
})