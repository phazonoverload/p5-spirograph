function setup() {
  
  // Canvas will be size of window
  createCanvas(windowWidth, windowHeight);
  
  // HSB colorMode so we can more easily select a range of colors later
  colorMode(HSB);
  radians(DEGREES);
}

function draw() {
  background('slategrey');
  
  // Length of slider at bottom of canvas
  var sliderLength = 400;
  
  // map() is used to remap one value to another
  // The first value is the value on which the conversion will take place
  // The second and third values give the upper and lower bounds of the incoming value
  // The fourth and fifth values give the upper and lower bounds of the remapped value so a conversion can take place
  // Here we're remapping the mouse position on the x axis to the slider at the bottom
  var sliderPos = map(mouseX, 0, width, ((width / 2) - sliderLength / 2), ((width / 2) + sliderLength / 2));
  
  // Maps the width of the circle relative to the mouse position on the x axis
  // Maximum circle size is 500px
  var circleSize = map(mouseX, 0, width, 0, 500);

  // This generates the slider at the bottom of the canvas
  // First we generate the line at the size stores in sliderLength
  // We then generate the sectangle toggle
  line(((width / 2) - sliderLength / 2), (height - 40), ((width / 2) + sliderLength / 2), (height - 40));
  rect(sliderPos, (height - 55), 10, 30);

  // Iterate over this entire block 4 times
  for (var i = 0; i < 4; i++) {
    
    // Generate each circle with a different HSB angle
    for (var angle = 0; angle < 255; angle += 60) {
      
      // Start new drawing state
      // This is reset with pop()
      push();
      
      // Center circles
      translate(width / 2, height / 2);
      
      // Rotate off-axis
      rotate(frameCount * 0.05);
      
      // Rotate around center
      rotate(angle + 20 * i);
      
      // Separate each circle by transforming them 30px away from each other
      translate(30, 30);
      
      // Don't fill the ellipse ahead so it is transparent
      noFill();
      
      // Stroke the ellipse with the current angle value in HSB
      stroke(angle, 100, 100);
      
      // Offset by i, and a size set by circleSize
      ellipse(i, i, circleSize, circleSize);
      
      // Reset drawing state
      pop();

    }
    
  }

}