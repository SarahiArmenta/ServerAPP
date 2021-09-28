   
const express = require("express");
const user = require('../models/user');
const userController = require('../controllers/user');
const userDataController = require('../controllers/userdata');
const userDonations = require('../controllers/donation');
/*const encuestaController = require('../controllers/encuesta');
const usuarioNivelController = require('../controllers/usuarioNivel');
const nivelController = require('../controllers/nivel');*/
//mini app
const router = express.Router();



//Mostrar el formulario
//router.get('/agregarUsuario',userController.getAgregarUsuario);
/*router.get('/agregarEncuesta',usuarioController.getAgregarEncuesta);

router.get('/inicioSesion',usuarioController.getInicioSesion);
router.get('/error',usuarioController.getError);*/

//Obtener los datos del formulario
//router.post('/UsuarioTermino',usuarioController.postUsuarioTermino);
//router.post('/agregarUsuario',userController.postAgregarUsuario);
router.get('/agregarUsuario',userController.getAgregarUsuario);
router.post('/agregarUsuarioData',userDataController.postAgregarUsuarioData);
router.post('/verificaUsuario',userDataController.postVerificaUsuario);
/*router.post('/agregarEncuesta',encuestaController.postAgregarEncuesta);
router.post('/agregarNivel',nivelController.postAgregarNivel);
router.post('/agregarUsuarioNivel',usuarioNivelController.postAgregarUsuarioNivel);*/
//router.post('/ActualizarNivel',usuarioNivelController.postActualizarNivel);


//Mostrar al usuario el resultado de la transaccion
//router.get('/confirmacion',usuarioController.getConfirmacion);

//Mostrar los registros de la base de datos
router.get('/registros',userDonations.getDonations);

//Mostrar un solo registro
//router.get('/registro/:usuario',usuarioController.getRegistro);


/*INTERACCIÓN CON VIDEOJUEGO*/
//Obtener los datos del formulario
router.post('/iniciarSesion',userController.postIniciarSesion);
/*router.post('/iniciarSesionPagina',usuarioController.postIniciarSesionPagina);*/

module.exports =router;