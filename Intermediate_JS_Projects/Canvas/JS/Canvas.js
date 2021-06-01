var c = document.getElementById("Color_Canvas");
var ctx = c.getContext("2d");
// create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");
// fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

var c = document.getElementById("Text_Canvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);