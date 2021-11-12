let count = 1;
function setup() {
  createCanvas(600, 600);
background(240);

}

function draw() {  
 
}

  function mousePressed(){
    stamp(mouseX,mouseY);
  }
    
function stamp(x, y) {
if (count % 3 ==0){
  strokeWeight(2)
  fill(100,30, 120)
    ellipse(x,y,100,100)

} else {
  strokeWeight(2)
  fill(200, 100, 20) 
  rect(x,y,60,60)

}
  count++; 
  if(count == 1000){ 
  clear();
  redraw;
  count = 1;} 
}