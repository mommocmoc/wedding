var s ;
var shapeColor ;
var preS = 0 ;
var curS ;
var input ;
function setup() {
  createElement('h1',"비글이 두마리에게 보내는 메시지");
input = createInput('비글이 두마리를 축하해주세요.');
 createCanvas(windowWidth,windowHeight);

 shapeColor = color(200,0,0);
	//createCanvas(windowWith, 500);
}

function draw() {
  clear();
	//background(0,126,255);
	s=50+second()*10;
  text(input.value(),100,100,32);
  curS = millis();
	noStroke();
  fill(shapeColor)
	ellipse(windowWidth/2,windowHeight/2,10+s,10+s);
  if(curS-preS > 1000){
    preS = curS ;
    colorChange();
  }
}

function mousePressed(){
  colorChange();
}

function colorChange(){
  shapeColor = color(random(255),random(255),random(255))
}

var circle = {
	x : 30,
	y : 200,
	diameter :50
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
