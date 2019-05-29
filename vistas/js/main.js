function myFunction() {
  n1=document.getElementById("nombrecito").value;
  n2=document.getElementById("clavecita").value;
  // alert(n1+n2);
  var r={nombre:n1,clave:n2}; //BALA
  var vx = JSON.stringify(r);
  $.ajax({
  url: "User",
  type: "POST",
  data: vx
  }).done(function(data){
    // alert(data);
    var resp = JSON.parse(data);
    // alert(resp["respu"]);
    if(resp["respu"]==1)
    {
      // $.ajax({
      // url: "pedirAdmin",
      // type: "POST",
      // data: vx
      // }).done(function(data){
      //   alert(data)
      // });
      alert("admin");
      window.location.replace("pedirAdmin");
    }
    else if (resp["respu"]==2)
      window.location.replace("pedirCliente");
    else if (resp["respu"]==3)
      window.location.replace("pedirTecnico");
    else{
      alert("Usuario No encontrado");
    }
  });
}
