const  express = require('express');
const Sequelize = require('sequelize');
const Op=Sequelize.Op;
const sequelize = new Sequelize('seq_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
const models = require('../models')
const LeerBD = () =>{
// models.Usuario.findAll().then(function(result){
//   console.log(result)
// });
  return models.Usuario.findAll({
        raw: true,
        attributes: ['*'],
        include: []
      });
};
const CrearBD = (crea) => {
  // crea.Nombre = "JakySieras";
  return models.Usuario.create(crea).then(Usuario => {
  // you can now access the newly created task via the variable task
  })
  // models.Usuario.create({
  //   UsuarioId:'1',
  //   Pagados: '0',
  //   Ultrasonido: '-1',
  //   Fotoresistencia: '-1',
  //   VelocidadMotor: '-1',
  // 	Leds: '-1',
  //   Alarma: '-1',
  //   Rele: '-1',
  //   Presencia: '-1',
  //   FinCarrera: '-1'
  // }).then(Usuario => {
  // // you can now access the newly created task via the variable task
  // })
};
const ActualizarDB = (actu) => {
  // actu.FechaVinculacion = Date.now();
  // console.log("Actulizaaaaaaaaaar");
  //
  // console.log(actu);
  return models.Usuario.update(actu, { where: { id: actu.Id } }).catch(e => {
        console.log(e);
    }); // 0 Sin Cambios 1 Actualizo

};
const EliminarDB = (actu) => {
  return models.Usuario.update({ Habilitado: 0}, { where: { id: actu.Id } }).catch(e => {
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
