const Sequelize = require('sequelize');

module.exports = global.sequelize.define('clientes',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    nombre: {
        type:Sequelize.STRING(300),
        allowNull:false
    },
    ap: {
        type:Sequelize.STRING(300),
        allowNull:false
    },
    am: {
        type:Sequelize.STRING(300),
        allowNull:false
    },
    fecha_nacimiento: {
        type:Sequelize.DATEONLY,
        allowNull:false
    },
    telefono: {
        type:Sequelize.STRING(20),
        allowNull:true
    },
    ocupacion: {
        type:Sequelize.STRING(500),
        allowNull:true
    },
    motivo: {
        type:Sequelize.TEXT(),
        allowNull:true
    },
    enfermedad: {
        type:Sequelize.TEXT(),
        allowNull:true
    },
    toma_medicamentos: {
        type:Sequelize.TEXT(),
        allowNull:true
    },
    ejercicio: {
        type:Sequelize.TEXT(),
        allowNull:true
    },
    tiempo_ejercicio: {
        type:Sequelize.STRING(500),
        allowNull:true
    },

    
    
})