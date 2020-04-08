class Particle{
  constructor(x,y,soundVel){
  this.pos = createVector(x,y);
  this.vel = createVector(0,soundVel);
  this.acc = createVector(0,0);
  }
  
  applyForce(force){
    this.acc.add(force);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0)
}

  show = function(){
    point(this.pos.x, this.pos.y);
  }
}