
let sStars = [];
let canvas;

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    let gradient = drawingContext.createLinearGradient(
      this.x,
      this.y,
      this.x - 90,
      this.y - 90
    );
    gradient.addColorStop(0, color(255, 255, 255, 150));
    gradient.addColorStop(1, color(255, 255, 255, 0));
    drawingContext.fillStyle = gradient;

    strokeWeight(5);
    stroke(0, 0, 0, 3);
    triangle(
      this.x,
      this.y,
      this.x - 90,
      this.y - 60,
      this.x - 60,
      this.y - 90
    );
    pop();

    strokeWeight(4);
    stroke(0, 0, 0, 10);
    fill(255, 255, 255);
    circle(this.x, this.y, 10);
  }
}

function fallDiagonal(element, speed) {
  element.x += speed;
  element.y += speed;
  if (element.x > width+100) {
    element.x = 0;
  }
  if (element.y > height+100) {
    element.y = 0;
  }
}

function setup() {
createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 12; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height);
    sStars.push(new Star(x, y));
  }
}

function draw() {
  background(0, 63, 89);

  circle(width-150, 150, 200)
  
  for (let i = 0; i < sStars.length; i++) {
    sStars[i].display();
    fallDiagonal(sStars[i], 0.5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

