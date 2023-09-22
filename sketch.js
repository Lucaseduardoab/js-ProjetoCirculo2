let cor;

let posicaoHorizontal; // x let posicaoVertical; // y

function setup() {

background("white");

createCanvas(600, 600); cor color = (random(0, 255), random(0, 255), random(0, 255)); posicaoVertical = 300;

posicaoHorizontal = 300;

function draw() { if (mouseIsPressed) circle(posicaoHorizontal, posicaoVertical, 50);

if (mousex < posicaoHorizontal) { posicaoHorizontal = posicaoHorizontal random(-2, 4);

}

if (mousex> posicaoHorizontal) { posicaoHorizontal =

posicaoHorizontal + random(-2, 4); }

if (mousey < posicaoVertical) { posicaoVertical = posicaoVertical random(-2, 4);

}

if (mouseY> posicaoVertical) { posicaoVertical = posicaoVertical + random(-2, 4);

}

fill(cor); stroke(cor);

cor color(random(0, 255), random(0, 255), random(0, 255));

                }
