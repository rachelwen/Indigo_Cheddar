
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

let sliderR, sliderG, sliderB; //sliders for background
let sliderR2, sliderG2, sliderB2; //sldiers for foreground


l


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
    createCanvas(600, 400);
    sliderR = createSlider(0, 255, 120, 20);
    sliderG = createSlider(0, 255, 52, 20);
    sliderB = createSlider(0, 255, 115, 20);



    button = createButton('play song');
    button.mousePressed(toggleSong);

    fft = new p5.FFT(0.95, 64); //fft for background
    fft2 = new p5.FFT(0.9, 64); // second fft for the foreground

    amp = new p5.Amplitude();


    gravity = createVector(0, 0.2);
}

function loaded() {
    playButton = createButton("play");
    playButton.mousePressed(togglePlaying);
}



function draw() {
    background(sliderR.value(), sliderG.value(), sliderB.value())


    let spectrum = fft.analyze();
    let spectrum2 = fft2.analyze();

    let bassVal = fft.getEnergy('bass');
    soundVel = map(bassVal, 0, 240, 3, 12);



    let midVal = fft.getEnergy('highMid');
    soundVel2 = map(midVal, 0, 240, 3, 12);

    let highVal = fft.getEnergy('treble');
    soundVel3 = map(highVal, 0, 240, 3, 12);







    if (random(1) < 0.2) {
        bassBars.push(new Firework(-soundVel, random(100, 255), 0, random(100, 255)));
    }
    for (let i = bassBars.length - 1; i >= 0; i--) {
        bassBars[i].update();
        bassBars[i].show();
    }




    if (random(1) < 0.1 && midVal > 0) {
        midBars.push(new Firework(-soundVel2, 0, random(100, 255), random(100, 255)));
    }
    for (let i = midBars.length - 1; i >= 0; i--) {
        midBars[i].update();
        midBars[i].show();
    }

    if (random(1) < 0.1) {
        highBars.push(new Firework(-soundVel3, 255, 255, 255));
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