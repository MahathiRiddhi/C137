var img = ""
function preload()
{
img = loadImage("Tv and ac.jpeg")
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
rect(200,2,400,100)
rect(100,100,400,190)
text("TV",115,115)
text("AC",215,17)
}
function back2(){
    window.location = "index1.html";
}