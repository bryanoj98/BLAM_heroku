const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var body_parser = require('body-parser');
app.use(body_parser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
var NegG = require('./negocio/UsuarioNeg');
var admin = require('./negocio/Administrador');
var tech=require('./negocio/Tecnico');
var cli = require('./negocio/Cliente');


// const con = require("./datos/componentes");
// const sist = require("./datos/sistemas");
// const user = require("./datos/usuarios");

// const Admin = require("./negocio/Administrador");
// const Admin = require("./negocio/UsuarioNeg");
// const a= new Admin.saludar("hola","123",1,1);
// // Admin.saludar()

// var a=admin.ObjetoAdmin("hola");
// console.log(a);

// admin.Administrador(function (error, data) {
//     if (error) console.error (error);
//     else
//     {
//       console.log(data);
//     }
// });

// tech.Tecnico(function (error, data) {
//     if (error) console.error (error);
//     else console.log (data);
// });
//
// pruebita.then(function(result){
//     console.log('PRUEBA JORGE');
//     console.log(result)
// });
// console.log(pruebita);

//
// var f=cli.Cliente().then(function(result){
//   console.log(result)
//
//   });
// var com = require('./negocio/Comercial');
// com.Comercial(function (error, data) {
//     if (error) console.error (error);
//     else console.log (data);
// });

// var general = new NegG.ObjetoG().Nombre=;
//     console.log("Preba Perez");
//         console.log(general)


// general.Nombre="actu2";
// general.Contraseña="4520";
// general.Habilitado=1;
// general.Logueado=0;
// general.Tipo=2;
// general.Id=2;
//
//
//
// admin.UpdateInTable(general);
// .then(function(result){
//     console.log(result)
// });


// user.Leer().then(function(result){
//   console.log(result[0])
//   // user.Eliminar(result[0]).then(function(result){
//   //   console.log("Servidooooooooooooooooor:")
//   //   console.log(result)
//   //   })
//   });
// sist.Leer().then(function(result){
//     console.log(result[0])
//     sist.Actualizar(result[0]).then(function(result){
//         console.log(result)
//       })
//   });
// con.Leer().then(function(result){
//   console.log(result[0])
//   con.Actualizar(result[0]).then(function(result){
//     console.log("Servidooooooooooooooooor:")
//     console.log(result)
//     })
  // con.Actualizar(result[0]).then(function(result){
  //   console.log("Servidooooooooooooooooor:")
  //   console.log(result)
  //   })
// });
// app.set('views',path.join(__dirname,'views'));

app.get('/', function(req, res) {
  // admin.Administrador(function (error, data) {
  //     if (error) console.error (error);
  //     else
  //     {
  //       console.log (data);
  //       // res.sendFile(path.join(__dirname, 'vistas/Login.html'));
  //       res.render('../vistas/1Administrador',{usuario:data});
  //     }
  // });
    res.sendFile(path.join(__dirname, 'vistas/Login.html'));
});
app.get('/pedirAdmin', function(req, res) {
  console.log ("Pedirrrrrrrrrrrrrr");
  // admin.UpdateInTable(result[i]);

  admin.Administrador(function (error, data) {
      if (error) console.error (error);
      else
      {
        // console.log (data);
        // res.sendFile(path.join(__dirname, 'vistas/Login.html'));
        res.render('../vistas/1Administrador',{usuario:data});
      }
  });
});
app.get("/vistas*", function(req, res) {
  res.sendFile(path.join(__dirname, '/vistas/'+req.params[0]));
  console.log(req.params[0]);
});
app.get("/Tabla", function(req, res) {
  admin.ReadFromTable().then(function(result){
        // console.log (result);
        res.json(result);
        // res.sendFile(path.join(__dirname, 'vistas/Login.html'));
        // res.render('../vistas/1Administrador',{usuario:data});
      });
});
app.get("/DatosTec", function(req, res) {
  console.log("DatosTecnico");
  tech.Tecnico(function (error, data) {
      if (error) console.error (error);
      else{
         console.log (data);
         res.json(data);

       }
  });
});
app.post("/User", function(req, res) {
  admin.ReadFromTable().then(function(result){
        var paso=0;
        //console.log (result);
        req.on('data',function(data){
          var resp = JSON.parse(data);
          // body+=data;
          console.log(resp['nombre']);
          console.log(resp['clave']);
          for (var i = 0; i < result.length; i++) {
            if(resp['nombre']== result[i].Nombre& resp['clave']==result[i].Contraseña &result[i].Logueado==0)
            {
              console.log("entroooooooooooooooooooo");
              var r={respu:result[i].Tipo}; //BALA
              var vx = JSON.stringify(r);
              res.send(vx);
              paso=1;
              result[i].Logueado=1;
              admin.UpdateInTable(result[i]);
            }
          }
          if(paso==0)
          {
            var r={respu:-1}; //BALA
            var vx = JSON.stringify(r);
            res.send(vx);
            paso=0;
          }
        });
        // res.json(result);
        // res.sendFile(path.join(__dirname, 'vistas/Login.html'));
        // res.render('../vistas/1Administrador',{usuario:data});
      });

  // var body='';

});
app.get("/Componentes", function(req, res) {
  cli.Cliente(function (error, data) {
      if (error) console.error (error);
      else{
        // console.log (data);
        res.json(data);

      }
  });
});
app.post("/ClienteDa", function(req, res) {
  console.log("ClienteDa");
  req.on('data',function(data){
    console.log(data);
    var r={posx:1};//score
    var vx = JSON.stringify(r);

    res.json(vx);
  });

  // admin.ReadFromTable().then(function(result){
  //   // console.log("pedirAdminnnnnnnnnnn");
  //     //  console.log (result);
  //      res.render('../vistas/1Administrador',{usuario:result});
  //    });
});
app.get("/banda", function(req, res) {
    console.log("pedirClienteee");

    // res.render('Pagina2');
    res.sendFile(path.join(__dirname, 'vistas/Pagina2.html'));
});
app.get("/pedirCliente", function(req, res) {
    console.log("pedirClienteee");
    req.on('data',function(data){

    });
});
app.get("/pedirTecnico", function(req, res) {
    console.log("pedirTecnico");
    tech.Tecnico(function (error, data) {
        if (error) console.error (error);
        else{
           // console.log (data);
           res.render('../vistas/1Tecnico',{usuario:data});

         }
    });
    // res.sendFile(path.join(__dirname, 'vistas/1Tecnico.html'));
});
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
