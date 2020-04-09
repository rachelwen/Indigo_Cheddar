class Particle{
  constructor(x,y,soundVel,R,G,B){
  this.pos = createVector(x,y);
  this.vel = createVector(0,soundVel);
  this.acc = createVector(0,0);
  this.R = R;
  this.G = G;
  this.B = B;
  
  }
  
  applyForce(force){
    this.acc.add(force);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0)
  
}

  getRandomColor(){
    // this.randomCol = random(255);
    }

  show = function(colorVal){
    //fill(random(100,200),random(100,200),random(100,200));
    //stroke(colorVal,colorVal,colorVal);
  //strokeWeight(5)
    //point(this.pos.x, this.pos.y);
    fill(this.R,this.G,this.B,2);
    noStroke();
    rect(this.pos.x,this.pos.y,15,40);
    //circle(this.pos.x,this.pos.y,20,20);
  }
}