
require('dotenv').config();

const { dbConnection } = require('./database/config');
const express = require('express');
const cors = require('cors');
const app = express();

//Configuracion de CORS
app.use(cors());


//Base de datos
dbConnection();

//console.log(process.env);

//Creando rutas o endpoint de la api
app.get('/', (req, res) => {

    res.json({

        status:true,
        message: 'Obtenido correctamente'
    })
})
app.listen(process.env.PORT, () => {

    console.log('Servidor corriendo en el puerto', process.env.PORT);
})
