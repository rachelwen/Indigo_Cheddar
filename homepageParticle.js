function Particle(){
    this.pos = 
      createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    
    this.maxSpeed = 4;
    
    this.prevPos = this.pos.copy();
    
   this.colorNoise = random(10);
    this.colorFill = noise(this.colorNoise)*255;
    
     this.colorNoise2 = random(10);
    this.colorFill2 = noise(this.colorNoise2)*255;
    
     this.colorNoise3 = random(10);
    this.colorFill3 = noise(this.colorNoise3)*255;
   
    
    
  
    
    
    this.update = function(){
      this.vel.add(this.acc)
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel)
      this.acc.mult(0)
    }
    
    this.follow = function(vectors){
      var x = floor(this.pos.x/scl);
      var y = floor(this.pos.y/scl);
      var index = x + y * cols;
      var force = vectors[index];
      this.applyForce(force);
      
    }
    
    
    this.applyForce = function(force){
      this.acc.add(force);
    }
    
    
    
    this.show = function (){
      
    this.myColor = random(255);
      this.myColorValue = noise(this.myColor);
    //  var hue1 = map(10,0,width,)
      
      stroke(random(250),0,random(250),25)
     
      strokeWeight(random(50))
      
      
       line(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y)
      this.updatePrev();
   //   point(this.pos.x,this.pos.y);
   
    }
    
    this.updatePrev = function (){
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
    
    this.edges = function(){
      if (this.pos.x > width ) {
        this.pos.x = 0;
        this.updatePrev();
      }
      if (this.pos.x < 0 ) {
        this.pos.x = width;
         this.updatePrev();
      }
      if (this.pos.y > height ) {
        this.pos.y = 0;
         this.updatePrev();
      }
      if (this.pos.y < 0 ) {  
      this.pos.y = height;
         this.updatePrev();
    }
    }
    
    
  }