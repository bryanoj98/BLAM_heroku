const  express = require('express');
const Sequelize = require('sequelize');
const Op=Sequelize.Op;
const sequelize = new Sequelize('seq_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
    define: {
        timestamps: false
    }
});
const models = require('../models');

const LeerBD = () =>{
// models.Componente.findAll().then(function(result){
//   console.log(result)
// });
  return models.Componente.findAll({
        raw: true,
        attributes: ['*'],
        include: []
      });
};
const CrearBD = (crea) => {
  // crea.Pagados = 90;
  models.Componente.create(crea).then(Componente => {
  // you can now access the newly created task via the variable task
  })
  // models.Componente.create({
  //   SistemaId:'1',
  //   Pagados: '0',
  //   Ultrasonido: '-1',
  //   Fotoresistencia: '-1',
  //   VelocidadMotor: '-1',
  // 	Leds: '-1',
  //   Alarma: '-1',
  //   Rele: '-1',
  //   Presencia: '-1',
  //   FinCarrera: '-1'
  // }).then(Componente => {
  // // you can now access the newly created task via the variable task
  // })
};
const ActualizarDB = (actu) => {
  //SISTEMA DATE
  models.Sistema.update({ FechaReporte: Date.now()}, { where: { id: actu.SistemaId } }).then(function(result){
    // console.log("Sistem<:")
    // console.log(result)
    })
  .catch(e => {
        console.log(e);
    })
  return models.Componente.update(actu, { where: { id: actu.Id } }).catch(e => {
        console.log(e);
    }); // 0 Sin Cambios 1 Actualizo


};
const EliminarDB = (actu) => {
  return models.Componente.update(actu, { where: { id: actu.Id } }).catch(e => {
        console.log(e);
    })
};

const  convertToLowerCase = (sentence) => {return "chao";};
module.exports = {
  Leer:LeerBD,
  Crear:CrearBD,
  Actualizar:ActualizarDB,
  Eliminar:EliminarDB
};
