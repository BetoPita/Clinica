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
    },
    diabetes:{
        type:Sequelize.STRING(300),
        allowNull:false
    },
    cancer:{
        type:Sequelize.STRING(300),
        allowNull:false
    },
    hta:{
        type:Sequelize.STRING(300),
        allowNull:false
    },
    cardiacos:{
        type:Sequelize.STRING(300),
        allowNull:false
    }
});