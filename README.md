# Indigo_Cheddar
creators: Rachel Wen and Gabriel Chi
live site: 

https://indigo-cheddar.now.sh/index.html

Description: Welcome to Indigo Cheddar, a virtural music visualizer gallery.

Upon opening the link, you will see a home page with floating bokeh in the background,
made with a perlin noise flowfield. There are also links to three rooms, each with a p5 sketch at the center.

Room 1 uses a flowfield to create lines that are either slanted one way or the other. the flowfield is essentially an array
of x and y cordinates, and a for-loop is used to dashed-lines in a grid. The angle of rotation is determined by the level
of the treble in the mp3 file, which is called using fft.getEnergy(). Furthermore, this sketch uses 2-D perlin  noise, so that each
line rotates based on the lines both to the left and right, and up and down. The result is sometimes the lines will overlap to create an X,
wich creates a 3D terrain illusion.

Room 2 uses a simple particle system that also uses vectors to create bouncing balls that range in velocity depending on the 
bass, mid, and treble levels of the mp3 file.

Room 3 uses fft.ananlyze() in an array to graph the spectrum values of an mp3 file with beginShape() to create horizontal lines 
that move to the beat of the music.

message for questions. Thank you and enjoy!
-Rachel and Gabriel

References: 
p5 sketch as background: https://www.youtube.com/watch?v=OIfEHD3KqCg
styling buttons: https://www.w3schools.com/css/css3_buttons.asp
styling sliders: https://p5js.org/examples/dom-slider.html
simple particle system: https://www.youtube.com/watch?v=UcdigVaIYAk
particle system firework: https://www.youtube.com/watch?v=CKeyIbT3vXI&t=89s
intro to perlin noise: https://www.youtube.com/watch?v=Qf4dIN99e2w&t=1s
graphing perlin noise: https://www.youtube.com/watch?v=y7sgcFhk6ZM&t=511s
perlin noise flow flield: https://www.youtube.com/watch?v=BjoM9oKOAKY&t=15s
frequency analysis with FFT: https://www.youtube.com/watch?v=2O3nm0Nvbi4&t=29s



