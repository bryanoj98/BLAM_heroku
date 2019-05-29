
// const con = require("../datos/componentes");

function ObjetoG(){
  class General {
    constructor (Nombre,Contraseña,Habilitado,Logueado) {
      this.Nombre = Nombre;
      this.Contraseña = Contraseña;
      this.Habilitado = Habilitado;
      this.Logueado = Logueado;
    }
  }
// const a=con.Leer();
return new General();
}
exports.ObjetoG=ObjetoG;
