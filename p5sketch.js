function setup() {
    createCanvas(300, 300);
    createCanvas.parent("p5");
}
function draw() {
    background(255);
    ellipseMode(CENTER);
    noFill();
    strokeWeight(mouseY / 2);
    ellipse(width / 2, height / 2, mouseX / 2, mouseX / 2);
}
