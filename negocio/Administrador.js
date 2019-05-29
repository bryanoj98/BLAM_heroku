var NegG = require('./UsuarioNeg');
const usu = require("../datos/usuarios");
const models = require('../models')
function ObjetoAdmin(){
  class Admin {
    constructor (Nombre,Contraseña,Habilitado,Logueado,Tiempo,lista) {
      // var general = new NegG.ObjetoG();
      this.Nombre = Nombre;
      this.Contraseña = Contraseña;
      this.Habilitado = Habilitado;
      this.Logueado = Logueado;
      this.TiempoActualizacion=Tiempo;
      this.ListaUsuarios=lista;
    }
  }
// const a=con.Leer();
return new Admin();
}
function Administrador(callback){
    var general = new NegG.ObjetoG();
    general.TiempoActualizacion = "1 segundo";
    general.ListaUsuarios=usu.Leer().then(function(result){
      general.ListaUsuarios=result;
        for (var i = 0; i < result.length; i++) {
          if(result[i].Tipo==1){
            general.Nombre=result[i].Nombre;
            general.Contraseña=result[i].Contraseña;
            general.Habilitado=result[i].Habilitado;
            general.Logueado=result[i].Logueado;
          }
        }
        // console.log(general)
        callback (null,general);
        // return general
    });
    // return general
}

function CreateInTable(user){
  // console.log(user);
  usu.Leer().then(function(result){
    console.log(result[0])
    result[0].Nombre=user.Nombre;
    result[0].Contraseña=user.Contraseña;
    result[0].Tipo=user.Tipo;
    result[0].Habilitado=user.Habilitado;
    result[0].Logueado=user.Logueado;
    result[0].FechaVinculacion=Date.now();

    usu.Crear(result[0]).then(function(result){
      // console.log("Servidooooooooooooooooor:")
      // console.log(result)
      })
    });
}
function ReadFromTable(){
  return usu.Leer();

}
function UpdateInTable(user){
  usu.Leer().then(function(result){
    console.log(result[user.Id-1])
    console.log("actualizarrrrrrr")
    // console.log(result)


    result[user.Id-1].Nombre=user.Nombre;
    result[user.Id-1].Id=user.Id;
    result[user.Id-1].Contraseña=user.Contraseña;
    result[user.Id-1].Tipo=user.Tipo;
    result[user.Id-1].Habilitado=user.Habilitado;
    result[user.Id-1].Logueado=user.Logueado;
    result[user.Id-1].FechaVinculacion=result[user.Id-1].FechaVinculacion;

    usu.Actualizar(result[user.Id-1]).then(function(result){
      // console.log("Servidooooooooooooooooor:")
      // console.log(result)
      })
    });
}
exports.ObjetoAdmin=ObjetoAdmin;
exports.Administrador=Administrador;
exports.CreateInTable=CreateInTable;
exports.ReadFromTable=ReadFromTable;
exports.UpdateInTable=UpdateInTable;
