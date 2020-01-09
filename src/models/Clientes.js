const Sequelize = require('sequelize');

module.exports = global.sequelize.define('clientes',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    nombre: Sequelize.STRING(300),
    ap: Sequelize.STRING(300)
});