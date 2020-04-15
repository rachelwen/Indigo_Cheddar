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
let soundVel; //bass
let soundVel2; //mid
let soundVel3; //high

let bassBars = [];
let midBars = [];
let highBars = [];

let inc = 0.1;
let scl;
let rows, cols;
let zoff = 0;
let fr;
let newParticles = [];
let flowField;
let sliderR, sliderG, sliderB; //sliders for background
let sliderR2, sliderG2, sliderB2; //sldiers for foreground



function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('assets/option1.mp3');
}

function setup() {
    createCanvas(600, 400);
    sliderR = createSlider(0, 255, 3, 20); //slider values for background
    sliderG = createSlider(0, 255, 52, 20);
    sliderB = createSlider(0, 255, 115, 20);

    sliderR2 = createSlider(0, 255, 242, 20); //slider values for background
    sliderG2 = createSlider(0, 255, 162, 20);
    sliderB2 = createSlider(0, 255, 15, 20);
    

    w = width / 40;
    scl = 10;
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowField = new Array(cols * rows);

    button = createButton('play song');
    button.mousePressed(toggleSong);

    fft = new p5.FFT(0.95, 64); //fft for background
    fft2 = new p5.FFT(0.9, 64); // second fft for the foreground

    gravity = createVector(0, 0.2);

}

function loaded() {
    playButton = createButton("play");
    playButton.mousePressed(togglePlaying);
}



function draw() {
    background(sliderR.value(), sliderG.value(), sliderB.value())

    let spectrum = fft.analyze();
    
    let bassVal = fft.getEnergy('bass');
    soundVel = map(bassVal, 0, 240, 1, 2);

    let midVal = fft.getEnergy('highMid');
    soundVel2 = map(midVal, 0, 240, 3, 12);

    let highVal = fft.getEnergy('treble');
    soundVel3 = map(highVal, 0, 240, 2, 20);

    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);
            let angle = noise(xoff, yoff, soundVel3) * TWO_PI; // angle is based off the trebel
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowField[index] = v;
            xoff += inc;
            stroke(sliderR2.value(), sliderG2.value(), sliderB2.value());
            strokeWeight(2);
            push()
            translate(x * scl, y * scl)
            rotate(v.heading() / PI); // divide by PI make the X's

            line(0, 0, scl, 0)
            pop()
        }
        yoff += inc;
        zoff += 0.0004;
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