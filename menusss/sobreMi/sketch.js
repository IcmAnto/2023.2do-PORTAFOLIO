function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(215, 154, 37);
    
    noStroke();

    fill(245, 245, 245, 75);
    ellipse(width/2, 130, 80, 130);
    fill(245, 245, 245);
    ellipse(width/2, 130, 60, 110);
    
    fill(130, 0, 0);
    triangle(width/2, 0, width/2-130, 130, width/2+130, 130);
  }

  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}