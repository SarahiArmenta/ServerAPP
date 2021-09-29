//Utilizar la bibliotec Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//crea tabla Donation
const Donation=(sequelize)=>{

    sequelize.define('Donation',{
        //Atributos
            idDonation :{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            quantity :{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            donationDate :{
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            taxDeducibe :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            idEmail:{
                type: Sequelize.STRING,
                allowNull: false,
            },          
        });
    }
module.exports = Donation;