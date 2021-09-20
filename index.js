let windowSize = 400;
let step = 0.001;
let iterations = 0;
let a, b;

let reset = (range = 10) => {
  b = Math.floor(Math.random() * range + 1) * 4;
  a = Math.floor(Math.random() * range + 1) * 2;
  iterations = 0

  updateButtonText()
}



function setup() {
  windowSize = (windowWidth - 16 < windowHeight - 40) ? windowWidth - 16 : windowHeight - 40;
  console.log(windowWidth < windowHeight)
  let canvas = createCanvas(windowSize, windowSize);
  canvas.parent("canvas")

  reset()
}

function draw() {
  translate(windowSize / 2, windowSize / 2)
  background(0);
  stroke(200)
  noFill()
  iterations += 2;

  beginShape()
  for (let i = 0; i < iterations * step; i += step) {
    let x = (windowSize - 4) / 2 * sin(a * i)
    let y = (windowSize - 4) / 2 * sin(b * i)

    vertex(x, y)
  }
  endShape()
}

function keyPressed() {
  reset()
}