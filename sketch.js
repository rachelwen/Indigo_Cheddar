let fireworks = [];
let gravity;

function setup() {
  createCanvas(400, 400);
  
  gravity = createVector(0,0.2);
  
 
  
  
  stroke(255)
  strokeWeight(4)
 
}

function draw() {
  background(0);
  if (random(1)<0.1){
   fireworks.push(new Firework());
  }
  for (let i = 0; i < fireworks.length; i ++){
    fireworks[i].update();
    fireworks[i].show();
  }
  
 
 
}