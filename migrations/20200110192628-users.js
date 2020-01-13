'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios',{
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
          allowNull:false,
          unique:true
      },
      password:{
          type:Sequelize.STRING(200),
          allowNull:false
      },
      perfilId:{
          type:Sequelize.INTEGER(11),
          allowNull:false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
