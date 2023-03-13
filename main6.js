var img = ""
function preload()
{
img = loadImage("basket.jpeg")
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
rect(30,50,650,350)
text("BASKET",85,215)
}
function back5(){
    window.location = "index1.html";
}