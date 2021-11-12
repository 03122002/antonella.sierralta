function setup() {
  createCanvas(480, 300);
  strokeWeight(6);
}

function draw() {
  background(255)
  for (var i = 80; i < 400; i +=15){
    line(i, 40, i + 200, 300);
    line(i, 40, i - 200, 300);
  }
}
