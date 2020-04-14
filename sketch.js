
let gravity;
let particles = [];
let song;
//let amp;
let playButton;
let resetButton;
let vol;
let fft;
let w;
let soundVel; //bass
let soundVel2; //mid
let soundVel3; //high

let bassBars = [];
let midBars = [];
let highBars = [];

let inc = 0.1;
let scl = 20;
let rows, cols;
let zoff = 0;
let fr;
let newParticles = [];
let flowField;



function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('sickelectronicsong2.mp3');
}

function setup() {
  createCanvas(600, 400);

  cols = floor(width / scl);
  rows = floor(height / scl);
  flowField = new Array(cols*rows);
  // for(var i = 0; i < 2000; i++){
  //   newParticles[i] = new NewParticle();
  //   }

//////////////////////////





  button = createButton('toggle');
  button.mousePressed(toggleSong);
  //song.play();
//background(0);
  
  //fft = new p5.FFT(0.90, 64);
  fft = new p5.FFT(0.99, 64);

  amp = new p5.Amplitude();
  
  resetCanvas();
  gravity = createVector(0,0.2);
  
  
  resetButton = createButton("reset");
  resetButton.mousePressed(resetCanvas);


 
}

function loaded(){
  playButton = createButton("play");
  playButton.mousePressed(togglePlaying);
}

function resetCanvas(){
  background(0); // only works if background is drawn in setup
  
}

function draw() {
  background(0)
  



  let spectrum = fft.analyze();
  let bassVal = fft.getEnergy('bass');
  soundVel= map(bassVal, 0, 240, 1, 2);
 


  let midVal = fft.getEnergy('highMid');
  soundVel2= map(midVal, 0, 240, 3, 12);

  let highVal = fft.getEnergy('treble');
  soundVel3 = map(highVal, 0, 240, 2, 20);
  let circleRad = map(highVal,0,440,0,80)
  console.log(highVal)



  let yoff = 0;
  for(let y = 0; y < rows; y++){
    let xoff = 0;
    for(let x = 0; x < cols; x++){
      let index = (x + y * cols);
      //let angle = noise(xoff, yoff, zoff) * TWO_PI*4;
      let angle = noise(xoff, yoff, soundVel3) * TWO_PI;
     // let angle = soundVel*TWO_PI*4;
     
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      xoff += inc;
      stroke(255);
      strokeWeight(1);
      push()
      translate(x * scl, y * scl)
      rotate(v.heading());
      
     line(0, 0, scl, 0)
     //ellipse(0,0,ampMap,ampMap)
     
      pop()
    }
    yoff += inc;
    zoff += 0.0004;
    
  }

  for(let j = 0; j < newParticles.length; j++){
    newParticles[j].follow(flowField);
    newParticles[j].edges();
    newParticles[j].show();
    newParticles[j].update();
  }



  if (random(1)<0.2){
    // bassBars.push(new Firework(-soundVel,random(100,255),0,random(100,255)));
   // bassBars.push(new NewParticle(soundVel,200,2,0))
   }
  for (let i = bassBars.length-1; i >=0; i --){
    if(bassVal>0 ){
    bassBars[i].follow(flowField)
    }
    bassBars[i].edges();
    bassBars[i].update();
    bassBars[i].show();
  }
 
  

 
  if (random(1)<0.1 && midVal>0){
   // midBars.push(new Firework(-soundVel2,0,random(100,255),random(100,255)));
   //midBars.push(new NewParticle(soundVel,0,200,0))
   }
  for (let i = midBars.length-1; i >=0; i --){
    midBars[i].follow(flowField);
    midBars[i].edges();
    midBars[i].update();
    midBars[i].show();
  }

  // if (random(1)<0.1){
  //   highBars.push(new Firework(-soundVel3,255,255,255));
  //  }
  // for (let i =  highBars.length-1; i >=0; i --){
  //   highBars[i].update();
  //   highBars[i].show();
  // }

  
  
}


function togglePlaying(){
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
  
}