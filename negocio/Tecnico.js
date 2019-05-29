var NegG = require('./UsuarioNeg');
const usu = require("../datos/usuarios");
const cli = require("./Cliente");

const models = require('../models')


function Tecnico(callback){
  const listTecnico=[];
  // const ClientesActivos=0;
  // const a=0;
  // const ClientesInactivos=0;
  // var general = new NegG.ObjetoG();
  usu.Leer().then(function(result){
    cli.Cliente(function (error, data) {
        if (error) console.error (error);
        else {
          // console.log (data);
          for (var i = 0; i < result.length; i++) {
              // console.log (i);
              // console.log (result.length);
                if(result[i].Tipo==3)
                {
                      // console.log(result[i].Id)
                      var general = new NegG.ObjetoG();
                      // const listClientes=[];
                      // listClientes.push(data);
                      general.Nombre=result[i].Nombre;
                      general.Contraseña=result[i].Contraseña;
                      general.Habilitado=result[i].Habilitado;
                      general.Logueado=result[i].Logueado;
                      general.Tipo=result[i].Tipo;
                      general.Id=result[i].Id;
                      general.FechaVinculacion=result[i].FechaVinculacion;
                      general.listaClientes=data;
                      listTecnico.push(general);//
                    // console.log(listComercial);
                }
              }
              // console.log(listComercial);
              callback (null,listTecnico);
        }

    });
  });
}

// function CreateInTable(user){
//   // console.log(user);
//   usu.Leer().then(function(result){
//     console.log(result[0])
//     result[0].Nombre=user.Nombre;
//     result[0].Contraseña=user.Contraseña;
//     result[0].Tipo=user.Tipo;
//     result[0].Habilitado=user.Habilitado;
//     result[0].Logueado=user.Logueado;
//     result[0].FechaVinculacion=Date.now();
//
//     usu.Crear(result[0]).then(function(result){
//       // console.log("Servidooooooooooooooooor:")
//       // console.log(result)
//       })
//     });
// }
// function GetSistemasReg(){
//   return usu.Leer();
//
// }
// function GetEstadoComponentes(){
//   return con.Leer().
//   then(function(result){
//       console.log('TECCCCCCCCNICO');
//
//       console.log(result)
//       return result
//   });
// }
// function UpdateInTable(user){
//   usu.Leer().then(function(result){
//     console.log(result[user.Id-1])
//     // console.log("actualizarrrrrrr")
//
//     result[user.Id-1].Nombre=user.Nombre;
//     result[user.Id-1].Id=user.Id;
//     result[user.Id-1].Contraseña=user.Contraseña;
//     result[user.Id-1].Tipo=result[user.Id-1].Tipo;
//     result[user.Id-1].Habilitado=user.Habilitado;
//     result[user.Id-1].Logueado=user.Logueado;
//     result[user.Id-1].FechaVinculacion=result[user.Id-1].FechaVinculacion;
//
//     usu.Actualizar(result[user.Id-1]).then(function(result){
//       // console.log("Servidooooooooooooooooor:")
//       // console.log(result)
//       })
//     });
// }
exports.Tecnico=Tecnico;
// exports.GetSistemasReg=GetSistemasReg;
// exports.GetEstadoComponentes=GetEstadoComponentes;
