class Firework{
  constructor(soundVel) {
  this.firework = new Particle(random(width), height,soundVel);
  }

  update() {
    this.firework.applyForce(gravity)
    this.firework.update()
  }

show(){
  this.firework.show();
}

}