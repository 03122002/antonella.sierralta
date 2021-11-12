var angle;
var gen = 100;

function setup() {
createCanvas(2000, 2000);
  stroke(200, 150, 10, 100);
  strokeWeight(0.8);
  fill(255, 255, 0, 10);
}

function draw() {
 // background(255, 255, 255);
  
  flower(width/2, height/2);
}

function flower(originX, originY){
    angle = sin(gen*50)*50;
    background(100, 200, 250,100);
      push();
        translate(originX, originY);
        rotate(gen*2);
        for(var i = 0; i < 180; i++){
          rotate(6 / gen*44);
          curve(i, i, 0, angle+i, 133, angle-i, i+133, i);
        }
      pop();

      gen += 0.00009;

}