function setup() {
  createCanvas(400,400);
  
  background(200);
}

function draw() {
  
background("pink");
 
  let l = round(map(mouseX, 0, width, 2, 10));
  Serpinski(0,400,100, 200, 200, 400,l);
  Serpinski(100,200,200,0,300,200,l);
  Serpinski(200,400,300,200,400,400,l)
  text(l, width - 15, 27);
  
  
}
function Serpinski(x1, y1, x2, y2, x3, y3, l) {
 
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  endShape(CLOSE);
 
  
  
    if (l > 1) {
    Serpinski((x1+x2)/2, (y1+y2)/2, (x2+x3)/2, (y2+y3)/2, (x1+x3)/2, (y1+y3)/2, l-1)
  }
  


}