
const express = require("express");
const userController = require('../controllers/user');
const userDonations = require('../controllers/donation');
const organizationController = require('../controllers/organization');
const projectController = require('../controllers/project');
const router = express.Router();


//Registro e inicio Sesión --> Usuario
router.post('/agregarUsuario',userController.postAgregarUsuario);
router.post('/iniciarSesion',userController.postIniciarSesion);
router.post('/validarCorreo',userController.postValidarCorreo);
router.post('/updatePassword',userController.postUpdatePassword);
router.post('/nombreUsuario',userController.postNombreUsuario);

//Recuperación de contraseña
router.post('/forgot', userController.forgotPassword);
router.post('/recover', userController.recoverPassword);

//Correo de contacto
router.post('/contacto', userController.postEmailContacto);

//Registro e inicio sesion --> Organizacion
router.post('/agregarOrganizacion',organizationController.postAgregarOrganizacion);
router.post('/iniciarSesionOrganizacion',organizationController.postIniciarSesionOrg);
router.post('/organizacionesPorAceptar',organizationController.postOrganizacionesPorAceptar);
router.post('/organizacionesAceptadas',organizationController.postOrganizacionesAceptadas);
router.post('/aceptarOrganizacion',organizationController.postAceptarOrganizacion);
router.post('/rechazarOrganizacion',organizationController.postRechazarOrganizacion);
router.post('/nombreOrganizacion',organizationController.postNombreOrganizacion);

//Proyecto
router.post('/agregarProyecto',projectController.postAgregarProyecto);
router.post('/listaProyectosAceptados',projectController.postListaProyectosAceptados);
router.post('/listaProyectosPorAceptar',projectController.postListaProyectosPorAceptar);
router.post('/aceptarProyecto',projectController.postAceptarProyecto);
router.post('/rechazarProyecto',projectController.postRechazarProyecto);

//Donaciones
router.post('/registros',userDonations.getDonations);
router.post('/hacerDonacion',userDonations.postAgregarDonation);

module.exports =router;
