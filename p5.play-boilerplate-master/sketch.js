let hr, mn , sec
let weirdarry = []
let ha,ma,sa


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-90);

  hr = hour()
  mn = minute()
  sec = second()

  weirdarry.push([hr,mn,sec])

  ha = map(hr%12,0,12,0,360)
  ma = map(mn,0,60,0,360)
  sa = map(sec,0,60,0,360)

  //drawing seconds hand 
  push(); rotate(sa); //rotate the hand based on angle calculated 
  stroke("blue"); strokeWeight(7); line(0,0,100,0); pop()
    //drawing seconds hand 
    push(); rotate(ma); //rotate the hand based on angle calculated 
    stroke("green"); strokeWeight(7); line(0,0,100,0); pop()
      //drawing seconds hand 
  push(); rotate(ha); //rotate the hand based on angle calculated 
  stroke("red"); strokeWeight(7); line(0,0,100,0); pop()
  drawSprites();
}