const Sequelize = require('sequelize');

module.exports = global.sequelize.define('usuarios',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    nombre:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    usuario:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    password:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    perfilId:{
        type:Sequelize.INTEGER(11),
        allowNull:false
    },
    
});