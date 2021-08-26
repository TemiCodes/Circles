canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", downmouse);
function downmouse(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop ;
    console.log("X =" + mousex + "Y=" + mousey)
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mousex, mousey, 50, 0, 2*Math.PI);
ctx.stroke();
}
