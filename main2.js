var img = ""
function preload()
{
img = loadImage("bedroom.jpeg")
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
rect(70,200,400,190)
text("BED",85,215)
}
function back(){
    window.location = "index1.html";
}