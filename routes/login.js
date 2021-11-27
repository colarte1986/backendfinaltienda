const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

//api login
router.post('/',loginController.crearUsuario);
router.get('/:name',loginController.obtenerUsuario);



module.exports = router;