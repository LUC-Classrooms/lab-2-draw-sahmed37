var y=150
var x= 300;
function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  // add your drawing code here ...
 fill(260, 280, 150)
 strokeWeight(3)
 line(x,y,x-10,y-35)
 line(x,y,x+20,y-30)
  ellipse(x, y, 50 ,50)
fill("green")
ellipse(x-50,y,50)
ellipse(x-100, y, 50)
ellipse(x-150, y, 50)
ellipse(x-200, y, 50)
strokeWeight(5)
point(x-10,y-5)
point(x+10,y+5)

  
}