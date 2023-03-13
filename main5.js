var img = ""
function preload()
{
img = loadImage("bottle.jpeg")
}
function setup()
{
canvas = createCanvas(700,400)
canvas.center()
}
function draw()
{
image(img,0,0,700,400)
noFill()
stroke("blue")
rect(70,150,600,190)
text("BOTTLES",85,215)
}
function back4(){
    window.location = "index1.html";
}