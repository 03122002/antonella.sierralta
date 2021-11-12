let m, mSlider;
let e, eSlider;

function setup() {
  createCanvas(2500, 2000- 100);
  
  mSlider = createSlider(0, 100, 20, 1);
  eSlider = createSlider(0, 100, 20, 1)
}

function draw() {
m = mSlider.value();
e = eSlider.value();
background("pink");
                 
  for(let y = m; y < height - m; y +=e){
    for(let x = m; x < height - m; x +=e){
      let d = dist(x, y, mouseX, mouseY);
      let m =map(d, 0, 800, 20, 3);
      circulo(x, y, 10);
    }
    }
                }

function circulo(x, y, t){
  push();
  translate(x, y);
  // line(x1, y1, x2, y2);

  line(-t / 2, -t / 2, t / 2, t / 2);
  line(-t / 2, t / 2, t / 2, -t / 2);
  pop();
}
  

