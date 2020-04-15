
let gravity;
let particles = [];
let song;
//let amp;
let amp2;
let playButton;
let resetButton;
let vol;
let fft;
let fft2;
let w;
let col;
let soundVel; //bass
let soundVel2; //mid
let soundVel3; //high

let bassBars = [];
let midBars = [];
let highBars = [];

let sliderBackground; //sliders for background
let sliderBass, sliderMid, sliderHiBass; //sldiers for foreground


function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('assets/option2.mp3');
}

function setup() {
    var cnv = createCanvas(400, 400);
    var x = (windowWidth - width) / 2;
    var y = ((windowHeight - height) - 70) / 2;
    cnv.position(x, y);
    colorMode(HSB)
    sliderBackground = createSlider(0, 360, 200, 1); //slider values for background (left)
    sliderBackground.position(sliderBackground.x+(windowWidth / 2), 300 + windowHeight/2);

   
    sliderBass = createSlider(0, 255, 300, 1); //slider for bass color( top right)
    sliderMid = createSlider(0, 255, 20, 1); // slider for mid color (middle right)
    sliderHigh = createSlider(0, 255, 60, 1); // treble color, bottom right

    sliderBass.position((windowWidth / 2)-sliderBass.width,300 + windowHeight/2);
    sliderMid.position((windowWidth / 2)-sliderMid.width,325 + windowHeight/2);
    sliderHigh.position((windowWidth / 2)-sliderHigh.width,350 + windowHeight/2);

    button = createButton('pause or play');
    col = color(25, 23, 200, 50);
    button.style('background-color', col);
    button.position(windowWidth/2-button.width/2, windowHeight/2+200);
    button.mousePressed(toggleSong);

    fft = new p5.FFT(0.95, 64); //fft for background
    fft2 = new p5.FFT(0.9, 64); // second fft for the foreground

    amp = new p5.Amplitude();


    gravity = createVector(0, 0.2);
}

function windowResized(){
    centerCanvas();
}

function loaded() {
    playButton = createButton("pause or play");
    playButton.mousePressed(togglePlaying);
}



function draw() {
    background(sliderBackground.value(), 100,80)


    let spectrum = fft.analyze();
    let spectrum2 = fft2.analyze();

    let bassVal = fft.getEnergy('bass');
    soundVel = map(bassVal, 0, 240, 3, 12);



    let midVal = fft.getEnergy('highMid');
    soundVel2 = map(midVal, 0, 240, 3, 12);

    let highVal = fft.getEnergy('treble');
    soundVel3 = map(highVal, 0, 240, 3, 12);



    if (random(1) < 0.05) {
        bassBars.push(new Firework(-soundVel, sliderBass.value(), 100,100));
    }
    for (let i = bassBars.length - 1; i >= 0; i--) {
        bassBars[i].update();
        bassBars[i].show();
    }

    if (random(1) < 0.05 ) {
        midBars.push(new Firework(-soundVel2, sliderMid.value(),100,100));
    }
    for (let i = midBars.length - 1; i >= 0; i--) {
        midBars[i].update();
        midBars[i].show();
    }

    if (random(1) < 0.05) {
        highBars.push(new Firework(-soundVel3, sliderHigh.value(),100,100));
    }
    for (let i = highBars.length - 1; i >= 0; i--) {
        highBars[i].update();
        highBars[i].show();
    }

}


function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html("pause");
    } else {
        song.pause();
        button.html("play");
    }

}