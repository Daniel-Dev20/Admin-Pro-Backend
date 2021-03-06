
//Importando modelo de usuarios

const Usuario = require('../models/usuarios');

const getUsuarios = (req, res) => {

    res.json({
        ok:true,
        message: 'Get usuarios'
    })
}

const crearUsuarios = async(req, res) => {

    const {nombre, email, password} = req.body;

    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({

        ok:true,
        usuario
    })
}

module.exports = {

    getUsuarios,
    crearUsuarios
}