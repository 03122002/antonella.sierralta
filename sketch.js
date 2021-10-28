
let frames; 
let span, current;

function setup() {
  frames = [];
  span = 8;
  current = 0;

  createCanvas(600, 600);
  background(250, 100, 120);
  strokeWeight(8);

for (let i = 0; i < span; i++) {
    let img = get();
    frames.push(img);
  }
}


function draw() {
   background(frames[current]);

  if (mouseIsPressed) {
    point(pmouseX, pmouseY, mouseX, mouseY);
  }

  frames[current] = get();
  current++;
  current %= span;
}


 

function clearScreen() {
  background(250);
  frames = [];
  span = 8;
  current = 0;

  stroke(0);
  strokeWeight(5);

  for (let i = 0; i < span; i++) {
    let img = get();
    frames.push(img);
  }
}
