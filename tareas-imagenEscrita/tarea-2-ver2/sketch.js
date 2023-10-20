class CircleElement {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
    noStroke();
  }
}

function moveStraight(element, speed) {
  element.x += speed;
  if (element.x > windowWidth) {
    element.x = 0;
  }
}

let circles = []; // An array to store the instances of CircleElement

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create 100 instances of CircleElement and store them in the 'circles' array
  for (let i = 0; i < 100; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    let radius = random(20, 50); // Random radius
    let col = color(random(255), random(255), random(255)); // Random color
    circles.push(new CircleElement(x, y, radius, col));
  }
}

function draw() {
  background(250, 2);

  // Display and apply behaviors to all the CircleElements in the 'circles' array
  for (let i = 0; i < circles.length; i++) {
    circles[i].display();
    moveStraight(circles[i], 1);
    // You can apply other behaviors here as needed
  }
}