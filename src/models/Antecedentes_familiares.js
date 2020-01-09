const Sequelize = require('sequelize');

module.exports = global.sequelize.define('antecedentes_familiares',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    obesidad:{
        type:Sequelize.STRING(300),
        allowNull:false
    }
});