function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(215, 154, 37);
    
    noStroke();
    
    fill(99, 99, 0);
    rect(0, height/2, 300, height-150);
    fill(0, 99, 99);
    rect(width-400, 25, 400, height-25);
    fill(0, 130, 130);
    rect(width/2-350, height-150, 700, 150);

    fill(245, 245, 245, 75);
    ellipse(width/2, 130, 80, 130);
    fill(245, 245, 245);
    ellipse(width/2, 130, 60, 110);
    
    fill(130, 0, 0);
    triangle(width/2, 0, width/2-130, 130, width/2+130, 130);
  }