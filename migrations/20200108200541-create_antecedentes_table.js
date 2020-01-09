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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("antecedentes_familiares")
  }
};
