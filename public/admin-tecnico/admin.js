setInterval(EditTable,1000);
function EditTable(){

  $.ajax({
  url: "Tabla",
  type: "GET"
}).done(function(data){
  // alert(data);
  // var resp = JSON.parse(data);
  // alert(resp);

  // personas=resp["nombres"]
  // aliens=resp["vida"]
  //   puntos=resp["score"]
  // var per=personas.split("_")
  dataTable.innerHTML="<tr><td>"+"ID"+
    "</td><td>"+"Nombre"+
    "</td><td>"+"Contraseña"+
    "</td><td>"+"Tipo"+
    "</td><td>"+"Habilitado"+
    "</td><td>"+"Logueado"+
    "</td><td>"+"Fecha de Vinculación"+
    "</td></tr>";
    // alert(puntos+personas+aliens)
  for (var i = 0; i < (data.length-1); i++) {
    if(data[i]!=data[i+1])
    {
      dataTable.innerHTML+="<tr><td>"+data[i].Id+
        "</td><td>"+data[i].Nombre+
        "</td><td>"+data[i].Contraseña+
        "</td><td>"+data[i].Tipo+
        "</td><td>"+data[i].Habilitado+
        "</td><td>"+data[i].Logueado+
        "</td><td>"+data[i].FechaVinculacion+"</tr></td>";
      }
    }
  });
  // alert(puntos)
}
function showForm1() {
  form1.removeAttribute("hidden");
  form2.setAttribute("hidden","");
}
function hideForm() {
    form1.setAttribute("hidden","");
    form2.setAttribute("hidden","");
  }
  function showForm2() {
    form2.removeAttribute("hidden");
    form1.setAttribute("hidden","");
  }
