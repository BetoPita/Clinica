'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("antecedentes_familiares",{
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
    clienteId: Sequelize.INTEGER(11),
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
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("antecedentes_familiares")
  }
};
