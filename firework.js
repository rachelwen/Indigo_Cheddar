function Firework(soundVel) {
  this.firework = new Particle(random(width), height,soundVel);

  this.update = function() {
    this.firework.applyForce(gravity)
    this.firework.update()
  }

this.show = function(){
  this.firework.show();
}

}