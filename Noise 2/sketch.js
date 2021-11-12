let xpos = 0;
let ypos = 0;
let sample = 0;

function setup() {
  createCanvas(400, 400);
  background(220, 80, 200);
}

function draw() {
  sample += 0.01;
  ypos = noise(sample) * 200 + height/2;
  
  xpos ++;
  ellipse(xpos, ypos, 30, 30);
}