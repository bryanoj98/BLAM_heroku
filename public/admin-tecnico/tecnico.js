var deta=0;
var datos=[];
function showSensores(i) {
  // alert(deta);
  // alert(datos);

  Sensores.removeAttribute("hidden");
  Actuadores.setAttribute("hidden","");
  Sensores.innerHTML=
  "<h1>"+"Información Sensores Sistema "+ (i+1)+
  "</h1><p>"+"Ultrasonido: "+datos[i].listaClientes[i].SensoresActivos[0]+
  "</p><p>"+"Fotoresistencia: "+ datos[i].listaClientes[i].SensoresActivos[1]+
  "</p><p>"+"Sensor de presencia: "+datos[i].listaClientes[i].SensoresActivos[2]+
  "</p><p>"+"Fin de carrera: "+ datos[i].listaClientes[i].SensoresActivos[3]+
  "</p><nav><input type="+'"button"'+ "value="+'"Atras"'+"onclick="+'"hideForm()">'+
  "<input type="+'"button"'+"value ="+ '"Escuchar Información"'+"onclick="+'"speak1()">'+
  "<input type="+'"button"'+"value ="+"'Dar ordenes por voz'"+"onclick="+'"listen()"></p></nav>'+
  "<div id="+'"texto"'+'></div>';
  "</nav>";
}
function speak1(){
 speechSynthesis.speak(new SpeechSynthesisUtterance(Sensores.textContent));
}
function hideForms() {
    Sensores.setAttribute("hidden","");
    Actuadores.setAttribute("hidden","");
  }
  function showActuadores(i) {
    Actuadores.removeAttribute("hidden");
    Sensores.setAttribute("hidden","");
    Actuadores.innerHTML=
    "<h1>"+"Información Actuadores Sistema "+ (i+1)+
    "</h1><p>"+"Velocidad Motor: "+datos[i].listaClientes[i].ActuadoresActivos[0]+
    "</p><p>"+"Leds: "+ datos[i].listaClientes[i].ActuadoresActivos[1]+
    "</p><p>"+"Alarma: "+datos[i].listaClientes[i].ActuadoresActivos[2]+
    "</p><p>"+"Relé: "+ datos[i].listaClientes[i].ActuadoresActivos[3]+
    "</p><nav><p><input type="+'"button"'+ "value="+'"Atras"'+"onclick="+'"hideForms()">'+
    "<input type="+'"button"'+"value ="+ '"Escuchar Información"'+"onclick="+'"speak2()">'+
    "<input type="+'"button"'+"value ="+"'Dar ordenes por voz'"+"onclick="+'"listen()"'+'></p></nav>'+
    "<div id="+'"texto"'+'></div>';


   }
   function speak2(){
     speechSynthesis.speak(new SpeechSynthesisUtterance(Actuadores.textContent));
    }

  setInterval(EditTable,1000);
  function EditTable(){
    $.ajax({
    url: "DatosTec",
    type: "GET"
  }).done(function(data){
    deta=2;
    datos=data;
    // var resp = JSON.parse(data);
    dataTable.innerHTML="<thead>"+
      "<tr>"+
        "<th>"+"Nombre Sistema"+"</th>"+
        "<th>"+"Cliente"+"</th>"+
        "<th>"+"Sensores"+"</th>"+
        "<th>"+"Actuadores"+"</th>"+
      "</tr>"+
    "</thead>";
    for (var i = 0; i < (data.length); i++) {
      if(data[i]!=data[i+1])
      {
        dataTable.innerHTML+=
        "<tr><td>"+data[i].listaClientes[i].Sistema+
        "</td><td>"+data[i].Nombre+
        "</td><td>"+"<input type="+'"button" '+"Id="+i+" "+" value ="+data[i].listaClientes[i].SensoresActivos.length+" "+
            "onclick="+"showSensores("+i+")>"+
            "</td>"+"<td>"+"<input type="+'"button" '+"Id="+i+" value ="+data[i].listaClientes[i].ActuadoresActivos.length+" "+
            " onclick=" + "showActuadores(" +i+ ")" +"></td></tr>";
          }
        }

});


}
  let rec;
    if(!("webkitSpeechRecognition" in window)){
        alert("No puedes usar la API")
    }
    else{
        rec= new webkitSpeechRecognition();
    }
    function listen() {
        rec.lang="es-CO";
        rec.continuous=true;
        rec. interim= true;
        rec.addEventListener("result",iniciar);
        rec.start();
    }
    function iniciar(event){
        for (i=event.resultIndex; i<event.results.length;i++){
            document.getElementById('texto').innerHTML=event.results[i][0].transcript;
            cadena=event.results[i][0].transcript
            if(cadena=="información"){speak1();
            speak2();}
            if(cadena=="atrás"){hideForms();}
        }
    }
