const Sequelize = require('sequelize');

module.exports = global.sequelize.define('ca_perfiles',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    perfil:{
        type:Sequelize.STRING(200),
        allowNull:false
    }
    
});