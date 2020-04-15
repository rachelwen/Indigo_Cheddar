
var inc = 0.1;
var scl = 15;
var rows, cols;
var zoff = 0;
var fr;
var particles = [];
var flowField;

function setup() {
  //noprotect
  var cnv = createCanvas(windowWidth, windowHeight);
  // var x = (windowWidth - width) / 2;
  //  var y = ((windowHeight - height) - 70) / 2;
   cnv.position(0,0);
   cnv.style('z-index','-1');
  
  cols = floor(width / scl);
  rows = floor(height / scl)
 
  
  flowField = new Array(cols*rows);
  for (var i = 0; i < 2000; i++){
  particles[i] = new Particle();
    }
}

function draw() {
  background(2);
  var yoff = 0;
  //randomSeed(10);
  noFill()

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      
      var angle = noise(xoff, yoff,zoff) * TWO_PI*4;
     
      var v = p5.Vector.fromAngle(angle);
       v.setMag(1);
      flowField[index] = v;
      
      xoff += inc;
//       stroke(0,50);
//       push()
//       translate(x * scl, y * scl)
//       rotate(v.heading());
      
//      line(0, 0, scl, 0)
     
//       pop()
      
    }
    yoff += inc;
    zoff += 0.0004;
  
  }
  
  for (var i = 0; i < particles.length; i++){
    particles[i].follow(flowField);
     particles[i].edges();
  particles[i].show();
  particles[i].update();
 
    
    
  }
  

 // noLoop();
}