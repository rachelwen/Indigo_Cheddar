let fireworks = [];
let gravity;

let song;
let amp;
let button;
let vol;

function setup() {
  createCanvas(600, 400);
  song = loadSound("jordan.mp3",loaded());
  amp = new p5.Amplitude();
  
  
  gravity = createVector(0,0.2);
  
  
 
}

function loaded(){
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function createNewParticle(){
 
}
function draw() {
  background(0);
  vol= amp.getLevel();
  console.log(vol);
  
 
  let soundVel =  map(vol,0,0.5,2,10);

 
  if (random(1)<0.9){
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