var img = ""
function preload()
{
img = loadImage("desk.jpeg")
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
rect(100,100,400,190)
text("DESK",115,115)
}
function back3(){
    window.location = "index1.html";
}