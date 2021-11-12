let N;        //numero de puntos
let puntos;  //vectores
let m;      //  margen

function setup() {
  createCanvas(800, 650);
  
  puntos =[];
  N = 50;
  m = 10;
   
creaPuntosAlAzar();
}

function draw() {
 background(255);
  stroke(200, 50, 150, 30);
  strokeWeight(1);
  conectaPuntos();
  stroke("black");
  strokeWeight(5);
  pintaPuntos();
  muevePuntos();
  if(mouseIsPressed){
    
    sigue(mouseX, mouseY);
  }
}
  function creaPuntosAlAzar(){
    for(let i = 0; i < N; i ++){
      let p = createVector(random(m, width-m), random(m, height-m));
      puntos.push(p);
    }
  }
  
  function conectaPuntos(){
    for(let i = 0; i < N; i++){
      for(let j = 0; j < N; j++){
        line(puntos[i].x, puntos[i].y, puntos[j].x, puntos[j].y)
      }
    }
  }
 
  function pintaPuntos(){
    for(let i = 0; i < N; i++){
      point(puntos[i].x, puntos[i].y);
    }
  }
  
  function muevePuntos(){
    for(let i = 0; i < N; i++){
      puntos[i].x += random(-2, 2);
      puntos[i].y += random(-2, 2);
    }
  }
  
function sigue(x, y){
  for(let i = 0; i < N; i++){
    
    let difx = x - puntos[i].x;
    let dify = y - puntos[i].y;
    
    puntos[i].x + difx * 0.01;
    puntos[i].y + dify * 0.01;
  }
}
 