function setup() { 
  createCanvas(600, 600); 
  background("skyblue");
}
function draw() {
  //console.log(mouseIsPressed)
  if (mouseIsPressed || touches.lenght > 0) { 
    rect(mouseX, mouseY, 20, 10);
  } 
  fill("black");
  stroke("black");
}
