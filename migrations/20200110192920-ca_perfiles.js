'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('ca_perfiles', 
      { 
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
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('ca_perfiles');
  }
};
