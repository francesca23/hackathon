var mic;
var redjumper;
var lefthorn;
var righthorn;
var wardrobe;
var hanger;

function preload() {
    redjumper = loadImage("./assets/redjumper.png");
    lefthorn = loadImage("./assets/lefthorn.png");
    righthorn = loadImage("./assets/righthorn.png");
    wardrobe = loadImage("./assets/wardrobe.jpg");
    hanger = loadImage("./assets/hanger.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	var volume = mic.getLevel();
    background(0);
    
	push();
	translate(width/2, height/2);
    image(wardrobe,0-wardrobe.width/2, 0-wardrobe.height/2, wardrobe.width, wardrobe.height);
    
    image(redjumper, -250, -250, redjumper.width/2, redjumper.height/2);
    image(hanger, -180, -355, hanger.width/4, hanger.height/4);
    
    fill('#412000');
    ellipse(3,-340,15);
    
    //horns
    var rot = map(volume, 0, 1, 0, -50);
    
    push();
    rotate(rot);
    image(lefthorn, -110, -120, lefthorn.width/3, lefthorn.height/3);
    pop();
    
    push();
    rotate(-rot);
    image(righthorn, -110, -120, righthorn.width/3, righthorn.height/3);
    pop();
    
    //eyes
    noStroke();
    fill(255);
    ellipse(-15, -20, 18);
    ellipse(15, -20, 18);
    
    fill(0);
    var trany = map(volume, 0, 1, 0, -15);
    
    push();
    translate(0, trany);
    ellipse(-15, -15, 8);
    ellipse(15, -15, 8);
    pop();
    
    //mouth
    stroke(0);
    fill('#600000');
    var x = map(volume,0, 1, 40, 80);
    var y = map(volume, 0, 1, 15, 50);
    ellipse(0, 60, x, y);
    
    //nose
	var minSize = width/30;
	var maxSize = width/10;
	var size = map(volume, 0, 1, minSize, maxSize);
    
    fill(255,0,0);
	ellipse(0, 22, size);
    
	pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}