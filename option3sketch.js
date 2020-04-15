var song; 
var fft;
var button;
var w
var q;
var amp;
var xoff =0 
var highMids= [];
var ampLev = 256;
var ampStart = 0;
var numLines = 25;
function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('assets/option3.mp3');
}

function setup() {
  createCanvas(600, 600);
  button = createButton('play song');
  button.mousePressed(toggleSong);
 // song.play();
colorMode(RGB);
  fft = new p5.FFT(0.95, 64);
  w = width / 40;
  q = random(width);
 
  
   strokeWeight(2);
      //stroke(242, 230, 208);
    
 
    noFill()
  
  
}

function draw() {
 //background(217, 163, 163);
  background(137, 140, 48)

 
  var spectrum = fft.analyze();  
  stroke(255);
  var hmVal= fft.getEnergy('highMid');


 /// horiz/ norm 
for(var z = 0; z < numLines; z++){
  beginShape();
  stroke( 242, 107, 107)
    for (var i = 0; i < spectrum.length; i++){
      amp = spectrum[i];
      var y = map(amp,  ampStart,ampLev, height/numLines,10);
      vertex(i*w-50,-y*(z)+height);
       }
    
  endShape(); 
}

  

   
  
   
}

