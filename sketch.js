
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

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('test.mp3');
}

function setup() {
  createCanvas(600, 400);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
 // song.play();
 background(0);
  
  fft = new p5.FFT(0.90, 64);

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
  
  let spectrum = fft.analyze();
  let bassVal = fft.getEnergy('bass');
  soundVel= map(bassVal, 0, 240, 3, 12);

  let midVal = fft.getEnergy('highMid');
  soundVel2= map(midVal, 0, 240, 3, 12);

  let highVal = fft.getEnergy('treble');
  soundVel3 = map(highVal, 0, 240, 3, 12);
  







  if (random(1)<0.1){
    bassBars.push(new Firework(-soundVel,random(100,255),0,random(100,255)));
   }
  for (let i = bassBars.length-1; i >=0; i --){
    bassBars[i].update();
    bassBars[i].show();
  }
 
  

 
  if (random(1)<0.1){
    midBars.push(new Firework(-soundVel2,0,random(100,255),random(100,255)));
   }
  for (let i = midBars.length-1; i >=0; i --){
    midBars[i].update();
    midBars[i].show();
  }

  if (random(1)<0.1){
    highBars.push(new Firework(-soundVel3,255,255,255));
   }
  for (let i =  highBars.length-1; i >=0; i --){
    highBars[i].update();
    highBars[i].show();
  }

  
  
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