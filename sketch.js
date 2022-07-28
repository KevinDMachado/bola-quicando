let x = 50;
let y = 50;
let velX = 3;
let velY = 2;
let cor = 0;


function setup() {
  createCanvas(500, 300);
  colorMode (HSB, 100);
}

function draw() {
  x += velX;
  y += velY;
  background(20);
  
  if (x + 25 > width || x - 25 < 0 ) {
    velX = velX * -1;
    cor += 17
    if(cor > 100){
      cor = 0;
    }
  }
  if (y + 25 > height || y - 25 < 0 ) {
    velY = velY * -1; 
    cor += 17
    if(cor > 100){
      cor = 0;
    }
  }
  
  
  noStroke()
  fill(cor, 255, 255, 255)
  ellipse(x ,y , 50,50)
}
