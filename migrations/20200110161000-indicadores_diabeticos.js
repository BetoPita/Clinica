'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('indicadores_diabeticos',{
        id:{
          type: Sequelize.INTEGER(11),
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
      },
      comidas_dias:{
          type:Sequelize.INTEGER(11),
          allowNull:false
      },
      preparacion:{
          type:Sequelize.TEXT(),
          allowNull:false
      },
      come_entre_comidas:{
          type:Sequelize.TEXT(),
          allowNull:false
      },
      hora_hambre:{
          type:Sequelize.TEXT(),
          allowNull:false
      },
      alimentos_no_agradan:{
          type:Sequelize.TEXT(),
          allowNull:false
      },
      toma_suplementos:{
          type:Sequelize.TEXT(),
          allowNull:false
      }
      ,
      cantidad_suplementos:{
          type:Sequelize.STRING(100),
          allowNull:false
      },
      dieta_especial:{
          type:Sequelize.STRING(100),
          allowNull:false
      },
      tipo_dieta_especial:{
          type:Sequelize.STRING(300),
          allowNull:false
      },
      tiempo_dieta_especial:{
          type:Sequelize.STRING(100),
          allowNull:false
      },
      razon_dieta_especial:{
          type:Sequelize.TEXT(),
          allowNull:false
      },
      resultados_dieta_especial:{
          type:Sequelize.STRING(100),
          allowNull:false
      },
      medicamentos_bajar_peso:{
          type:Sequelize.STRING(300),
          allowNull:false
      },
      consumo_agua:{
          type:Sequelize.STRING(200),
          allowNull:false
      },
      consumo_alcohol:{
          type:Sequelize.STRING(200),
          allowNull:false
      },
      consumo_tabaco:{
          type:Sequelize.STRING(200),
          allowNull:false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      clienteId: Sequelize.INTEGER(11),
      
      
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('indicadores_diabeticos')
  }
};
