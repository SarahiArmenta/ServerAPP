//Biblioteca para definir lo que es un JSON
const bodyParser = require("body-parser");

//Biblioteca para generar las rutas de acuerdo al sistema operativo
const path = require("path");

//Importar la biblioteca express para la creación de servidores
const express = require('express');

//Traer la conexión de la base de datos
const sequelize = require('./util/database');

//Crear el servidor
const app = express();

//Middleware para configura la definicion de un JSON
app.use(bodyParser.json());
//Middleware para configurar la recepción de formularios
app.use(bodyParser.urlencoded({extended:true}))

const usuarioRoutes = require('./routes/user');

app.use(express.json())
app.use('/user',usuarioRoutes);




//Inicializar servidor
const puerto=8080;
sequelize.sync({/*force: true*/
})
    .then(resultado=>{
        console.log('Conexión exitosa');
        //Lanza el servidor para escuchar peticiones
        app.listen(puerto,()=>console.log("Servidor en línea en el puerto 8080"));   })
    .catch(error=>console.log(error));