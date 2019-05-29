var NegG = require('./UsuarioNeg');
const usu = require("../datos/usuarios");
const cli = require("./Cliente");
const models = require('../models')

function Comercial(callback){
  const listComercial=[];

  const ClientesActivos=0;
  const a=0;
  const ClientesInactivos=0;
  // var general = new NegG.ObjetoG();
  usu.Leer().then(function(result){
    cli.Cliente(function (error, data) {
        if (error) console.error (error);
        else {
          // console.log (data);
          for (var i = 0; i < result.length; i++) {
              // console.log (i);
              // console.log (result.length);
                if(result[i].Tipo==2)
                {
                      // console.log(result[i].Id)
                      var general = new NegG.ObjetoG();
                      // const listClientes=[];
                      // listClientes.push(data);
                      for (var f = 0; f < data.length; f++) {
                        if(data[f].Habilitado==1)general.ClientesActivos=general.ClientesActivos+1;
                        else general.ClientesInactivos=general.ClientesInactivos+1;
                      }
                      general.Nombre=result[i].Nombre;
                      general.Contraseña=result[i].Contraseña;
                      general.Habilitado=result[i].Habilitado;
                      general.Logueado=result[i].Logueado;
                      general.Tipo=result[i].Tipo;
                      general.Id=result[i].Id;
                      general.FechaVinculacion=result[i].FechaVinculacion;
                      general.listaClientes=data;
                      listComercial.push(general);
                    // console.log(listComercial);
                }
              }
              // console.log(listComercial);
              callback (null,listComercial);
        }

    });
  });


  // const listaClientes=[];
  // const ClientesActivos=0;
  // const ClientesInactivos=0;
  //
  // general.listaClientes=cli.Cliente()
  //     for (var i = 0; i < cli.Cliente().length; i++) {
  //       if(result[i].Tipo==0){
  //         general.Nombre=result[i].Nombre;
  //         general.FechaVinculacion = result[i].FechaVinculacion;
  //         general.SensoresActivos = result[i].SensoresActivos;
  //         general.numSensoresActivos = result[i].SensoresActivos.length;
  //         general.ActuadoresActivos = result[i].ActuadoresActivos;
  //         general.numActuadoresActivos = result[i].ActuadoresActivos.length;
  //         if(result[i].Habilitado==1){
  //           general.ClientesActivos=general.ClientesActivos+1;
  //         }else{general.ClientesInactivos=general.ClientesInactivos+1;}
  //       }
  //     }
  //
  // console.log(general)
  // return general
}
  exports.Comercial=Comercial;
