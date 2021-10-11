
require('dotenv').config();

const { dbConnection } = require('./database/config');
const express = require('express');
const cors = require('cors');
const app = express();

//Configuracion de CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());


//Base de datos
dbConnection();

//console.log(process.env);

//Creando rutas o endpoint de la api
app.use('/api/usuarios', require('./routes/usuarios'))

app.listen(process.env.PORT, () => {

    console.log('Servidor corriendo en el puerto', process.env.PORT);
})
