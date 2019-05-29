
window.onload=function(){
  FinCarrera=0;
  // const cliente = require('../../negocio/Cliente')
  var canvas=document.getElementById("canvas");
  var ctx=canvas.getContext("2d");
  var mute="red";
  var rele="black"
  var NLeds=1,t=-20;
  var paso=1,taco=0,paso2=1;
  var Alarma=0;
  var Rele=0;
  canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    // alert(mousePos.x + ',' + mousePos.y);
    if(mousePos.x>810& mousePos.y>20&mousePos.x<1044&mousePos.y<160){
      if(mute=="red"){mute="green";
          Alarma=0;}
      else if(mute=="green"){mute="red";
          Alarma=1;}
      var r={quien:"Alarma",valor:Alarma.toString()};
      var vx = JSON.stringify(r);
      alert(vx);

      $.ajax({
      url: "ClienteDa",
      type: "POST",
      data: vx
      }).done(function(data){});
    }
    else if(mousePos.x>280& mousePos.y>420&mousePos.x<850&mousePos.y<550){
      if(rele=="black"){rele="red";
              Rele=1;}
      else if(rele=="red"){rele="black";
              Rele=0;}
      var r={quien:"Rele",valor:Rele.toString()};
      var vx = JSON.stringify(r);
      alert(vx);

      $.ajax({
      url: "ClienteDa",
      type: "POST",
      data: vx
      }).done(function(data){});
    }
    else if(mousePos.x>345& mousePos.y>20&mousePos.x<770&mousePos.y<80){
      if(NLeds>=7)paso=0;
      else if(NLeds<=0)paso=1;
      if(paso==1)NLeds++;
      else NLeds--;

      var r={quien:"Leds",valor:NLeds.toString()};
      var vx = JSON.stringify(r);
      alert(vx);

      $.ajax({
      url: "ClienteDa",
      type: "POST",
      data: vx
      }).done(function(data){});
    }
    else if(mousePos.x>880& mousePos.y>338&mousePos.x<1050&mousePos.y<435){
      if(taco>3)paso2=0;
      else if(taco<=0)paso2=1;
      if(paso2==1)taco++;
      else taco--;
      var r={quien:"Motor",valor:taco.toString()};
      var vx = JSON.stringify(r);
      alert(vx);

      $.ajax({
      url: "ClienteDa",
      type: "POST",
      data: vx
      }).done(function(data){});
    }
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
  var myVar = setInterval(myTimer, 1000);
  function myTimer() {
    pintar();
    $.get("Componentes", function(data){
      componentes=data[0];
    });
  }
  function pintar(){
    var x=830,y=60;
    var p=83,z=116;
    canvas.width=canvas.width;
    persona();
    //CAra feliz
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "pink";
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    //MUTE
    ctx.beginPath();
    ctx.strokeStyle = mute;
    ctx.moveTo(x, y+115);
    ctx.lineTo(x+5, y);
    ctx.lineTo(x+60, y+55);
    ctx.lineTo(x+115, y);
    ctx.lineTo(x+120, y+115);
    ctx.lineWidth = 15;
    ctx.stroke();

    //BANDA
    ctx.beginPath();
    ctx.fillStyle = rele;
    ctx.fillRect(280, 400, 500, 100);
    ctx.fillRect(480, 290, 100, 100);
    // ctx.fillRect(810, 20, 812, 160);
    //Leds
    for (var i = 0; i <= NLeds; i++) {
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.strokeStyle = "yellow";
      ctx.moveTo(350+(i*60), 20);
      ctx.lineTo(350+(i*60), 80);
      ctx.stroke();
    }

    //Tacometro
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "orange";
    ctx.lineCap = "round";
    ctx.arc(900, 400, 80, 1.2 * Math.PI, 1.8 * Math.PI, false);
    ctx.moveTo(900, 400);
    if(taco<=2)t=-20;
    else t=20;
    ctx.lineTo(820+(taco*40), 330+t);
    ctx.stroke();

    //fin de carrera
    if(FinCarrera==1){
    ctx.beginPath();
    ctx.fillRect(145,125,190,190);
    ctx.clearRect(165,145,150,150);
    ctx.strokeRect(170,150,140,140);
  }}
//sensor de presencia
  function persona(){
    var x=20,y=400;
    var acDegToRad = function(deg){
    			return deg* (-(Math.PI / 180.0));
    		}

    	ctx.fillStyle = "rgb(0,0,0)";
    	//save current state of canvas
    	ctx.save();
    	//draw long dividing rectangle
    	ctx.fillRect(x,y-190,8,300);
    	//draw player head circle
    	ctx.beginPath();
    	ctx.arc(x+63,y-130,35,acDegToRad(0),acDegToRad(360));
    	ctx.fill();

    	//start new path for tummy :)
    	ctx.beginPath();
    	ctx.moveTo(x+8,y-120);
    	ctx.lineTo(x+68,y-70);
    	ctx.lineTo(x+8,y);
    	ctx.fill();

    	//start new path for hand
    	//set lineCap and lineJoin to "round", blue color
    	//for stroke, and width of 25px
    	ctx.lineWidth = 25;
    	ctx.lineCap = "round";
    	ctx.strokeStyle = "rgb(0,0,0)";
    	ctx.lineJoin = "round";
    	ctx.beginPath();
    	ctx.moveTo(x+60,y-60);
    	ctx.lineTo(x+68,y-20);
    	ctx.lineTo(x+108,y+10);
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.moveTo(x+8, y-10);
    	ctx.lineTo(x+88,y+50);
    	ctx.lineTo(x+8,y+110);
    	ctx.clip();

    	//begin new path for drawing leg
    	ctx.beginPath();
    	ctx.moveTo(x-2,y);
    	ctx.lineTo(x+33,y+50);
    	ctx.lineTo(x-2,y+80);
    	ctx.stroke();

    	ctx.restore();
  }
}
