const Usuario = require('../models/usuario');

exports.obtenerUsuario = async ( req, res ) => {

    try {
        
        const usuario = await Usuario.findOne({name: new RegExp('^'+req.params.name+'$', "i")});
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.crearUsuario = async (req,res) => {
    try {

        let usuario;

        //Creamos nuestro producto
        usuario = new Usuario(req.body);

        await usuario.save()

        res.send(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 
