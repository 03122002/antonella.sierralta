var num = 60;
var x =[];
var y = [];

function setup() {
  createCanvas(800, 800);
  noStroke();
  
  for (var i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw(){
  background(0);
  for (var i = num-1; i > 0; i--){
  x[i] = x[i-1];
  y[i] = y[i-1];
}

x[0] = mouseX;
y[0] = mouseY;
for (var i = 0; i < num; i++){
  fill(random(255),random(255),random(255),random(255), 10) 
  ellipse(x[i], y[i], 40, 40);
}
}