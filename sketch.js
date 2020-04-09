let fireworks = [];
let gravity;

let song;
let amp;
let playButton;
let resetButton;
let vol;



function setup() {
  createCanvas(600, 400);
  song = loadSound("jordan.mp3",loaded());
  amp = new p5.Amplitude();
  
  resetCanvas();
  gravity = createVector(0,0.2);
  background(0);
  
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
 
  vol= amp.getLevel();
  console.log(vol);
  
 
  let soundVel =  map(vol,0,0.5,3,15);

 
  if (random(1)<0.1){
    fireworks.push(new Firework(-soundVel));
   }
  for (let i = fireworks.length-1; i >=0; i --){
    fireworks[i].update();
    //setTimeout(fireworks[i].show(),2000);
    fireworks[i].show();
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