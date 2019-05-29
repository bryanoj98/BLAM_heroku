'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sistema = sequelize.define('Sistema', {
    UsuarioId: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    FechaReporte: DataTypes.DATE
  }, {timestamps: false});
  Sistema.associate = function(models) {
    Sistema.hasMany(models.Usuario, {
        foreignKey : 'id',
        sourceKey: 'UsuarioId'
    });
    Sistema.belongsTo(models.Componente, {
      foreignKey : 'id',
      targetKey: 'SistemaId'
    })
  };
  return Sistema;
  };
