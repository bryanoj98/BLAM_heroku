var NegG = require('./UsuarioNeg');
const usu = require("../datos/usuarios");
const con = require("../datos/componentes");
const sist = require("../datos/sistemas");


const models = require('../models')

// function div(a, b, callback) {
//     if (b === 0) callback (Error (...))
//     else {
//         var result = a / b;
//         callback (null, result);
//     }
// }
function Cliente(callback){
  const listClientes=[];
  usu.Leer().then(function(result){
    for (var i = 0; i < result.length; i++) {
          if(result[i].Tipo==0)
          {
                var general = new NegG.ObjetoG();
                general.Nombre=result[i].Nombre;
                general.Contraseña=result[i].Contraseña;
                general.Habilitado=result[i].Habilitado;
                general.Logueado=result[i].Logueado;
                general.Tipo=result[i].Tipo;
                general.Id=result[i].Id;
                general.FechaVinculacion=result[i].FechaVinculacion;
                listClientes.push(general);
              // console.log(listClientes);
          }
        }
        // console.log(listClientes);
        var a=0;

          con.Leer().then(function(resultC){
            sist.Leer().then(function(resultS){
              for (var i = 0; i < resultS.length; i++) {
                for (var f = 0; f < resultC.length-1; f++) {
                  // console.log(resultS[i].UsuarioId);
                  // console.log(listClientes[a].Id);
                  // console.log(resultC[f].SistemaId);
                  // console.log(listClientes.length);
                  const ListSenso=[];
                  const ListActu=[];
                  if(resultS[i].UsuarioId==listClientes[a].Id&&resultS[i].Id==resultC[f].SistemaId)
                  {
                    listClientes[a].Sistema=resultS[i].Id;
                    ListSenso.push(resultC[f].Ultrasonido,resultC[f].Fotoresistencia,resultC[f].Presencia,resultC[f].FinCarrera);
                    ListActu.push(resultC[f].VelocidadMotor,resultC[f].Leds,resultC[f].Alarma,resultC[f].Rele);
                    listClientes[a].NComponente=resultC[f].Pagados;
                    listClientes[a].ActuadoresActivos=ListActu;
                    listClientes[a].SensoresActivos=ListSenso;
                      a++;
                  }
                }
              }
              // console.log(listClientes);
              callback (null,listClientes);
              // return listClientes
              // console.log(resultC);
              // console.log(resultS);

              });

          });
  });
  // return listClientes

}
exports.Cliente=Cliente;
