/*
RUTAS:/API/USUARIOS
*/

const {Router} = require('express');

const {getUsuarios, crearUsuarios}  = require('../controllers/usuarios.controller')

const router = Router();


router.get('/', getUsuarios);

router.post('/', crearUsuarios);

module.exports = router;