'use strict';
module.exports = (sequelize, DataTypes) => {
  const Componente = sequelize.define('Componente', {
    SistemaId: DataTypes.INTEGER,
    Pagados: DataTypes.INTEGER,
    Ultrasonido: DataTypes.INTEGER,
    Fotoresistencia: DataTypes.INTEGER,
    VelocidadMotor: DataTypes.INTEGER,
  	Leds: DataTypes.INTEGER,
    Alarma: DataTypes.INTEGER,
    Rele: DataTypes.INTEGER,
    Presencia: DataTypes.INTEGER,
    FinCarrera: DataTypes.INTEGER
  }, {timestamps: false});
  Componente.associate = function(models) {
    Componente.hasMany(models.Sistema, {
      foreignKey : 'id',
      sourceKey: 'SistemaId'
    });
  };
  return Componente;
};
