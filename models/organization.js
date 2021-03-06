 //Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

 //crea tabla Organitation
 const Organization = (sequelize)=>{
    sequelize.define('Organization',{
        //Atributos
            email: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            name :{
                type: Sequelize.STRING,                
                allowNull: false
            },
            tag :{
                type: Sequelize.STRING,
                allowNull: false
            },
            description :{
                type: Sequelize.STRING,
                allowNull: false
            },
            password :{
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber :{
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: false
            },            
            state: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false
            }
        });
 }
module.exports = Organization;