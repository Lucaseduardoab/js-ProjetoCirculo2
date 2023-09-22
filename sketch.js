function setup() { 
  createCanvas(600, 600); 
  background("skyblue");
}
//console.log(mouseIsPressed)
function draw() {
  if (mouseIsPressed){ 
  rect(mouseX, mouseY, 20, 10)
} 
  fill("black")
  stroke("black")
}
