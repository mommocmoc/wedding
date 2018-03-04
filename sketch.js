var s ;
function setup() {
 createCanvas(displayWidth,displayHeight);
	//createCanvas(windowWith, 500);
}

function draw() {
	background(0,126,255);
	s=50+second()*10;
	noStroke();
	ellipse(s,circle.y,circle.diameter,circle.diameter);
}

var circle = {
	x : 30,
	y : 200,
	diameter :50
};
