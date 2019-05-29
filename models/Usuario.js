'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    Nombre: DataTypes.STRING,
    Contraseña: DataTypes.STRING,
    Tipo: DataTypes.INTEGER,
    Habilitado: DataTypes.INTEGER,
    Logueado: DataTypes.INTEGER,
    FechaVinculacion: DataTypes.DATE
  }, {timestamps: false});
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Sistema, {
      foreignKey : 'id',
      targetKey: 'UsuarioId'
    });
  };
  return Usuario;
  };
