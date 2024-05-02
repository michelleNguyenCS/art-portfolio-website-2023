/*
  Culminating: Art Portfolio Website - Short Animation
  Michelle Nguyen
  IDC4U1
  J. Cordiner
  23/01/23
*/


var time1 = 0;   // tracks time elasped since first ran for background movement
var time2 = 0;  // tracks time elapsed since first ran for ghost movement


function preload() {
  // each image is 300px by 321px
  pic1 = loadImage("sprites/sprite1.png");
  pic2 = loadImage("sprites/sprite2.png");
  pic3 = loadImage("sprites/sprite3.png");
  // font src: https://fonts.google.com/specimen/Silkscreen
  font = loadFont("./silkscreen-font/Silkscreen-Regular.ttf");
}


function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent('sketch-holder');
  textFont(font);
  // GHOST INITIALIZATION
  pic = pic1;
  isMoving = false;
}


function draw() {
  // SKY BACKGROUND
  background(155, 200, 255);
  strokeWeight(0);

  // CLOUD & SUN LOCATION INITIALIZATION
  changeY = 0;
  
  // GRASS COLOURS INITIALIZATION
  lightGrass = color(155, 225, 155);
  medGrass = color(160, 210, 160);
  darkGrass = color(140, 175, 140);  

  // TEXT INITIALIZATION
  words = "a good day";
  chat = "a nice breeze today";

  // BUTTONS
  play = createButton("start");
    play.position(700, 1000, 'sketch-holder');
    play.mousePressed(start); // if start is pressed
  end = createButton("stop");
    end.position(1150, 1000, 'sketch-holder'); 
    end.mousePressed(stop);   // if stop is pressed
  
  if (isMoving) {
    // GRASS SHADOWS & CLOUD + SUN MOVEMENT
    if (millis() - time1 > 1800) {           // start
      lightGrass = color(175, 235, 175);
      medGrass = color(155, 225, 155);
      darkGrass = color(160, 210, 160);
      changeY += -25;
    }
    if (millis() - time1 > 3600) {
      lightGrass = color(185, 240, 185);
      medGrass = color(175, 235, 175);
      darkGrass = color(155, 225, 155);
      changeY += -25;
    }
    if (millis() - time1 > 5400) {           // reverse Shadows
      lightGrass = color(195, 245, 195);
      medGrass = color(185, 240, 185);
      darkGrass = color(175, 235, 175);
      changeY += -25;
    }
    if (millis() - time1 > 7200) {
      lightGrass = color(185, 240, 185);
      medGrass = color(175, 235, 175);
      darkGrass = color(155, 225, 155);
      changeY += 25;
    }
    if (millis() - time1 > 9000) {
      lightGrass = color(175, 235, 175);
      medGrass = color(155, 225, 155);
      darkGrass = color(160, 210, 160);
      changeY += 25;
    }
    if (millis() - time1 > 10800) {          // end
      time1 = millis();
    }
  }

  // DRAW CLOUDS
  fill(195, 220, 255, 100);
  circle(0, 300 + changeY, 300);
  circle(450, 300 + changeY, 500);
  fill(200, 226, 255);
  circle(175, 350 + changeY, 300);
  circle(600, 450 + changeY, 600);
  fill(220, 235, 255);
  circle(300, 550 + changeY, 600);

  // DRAW SUN
  fill(255);
  circle(420, 355 + changeY, 25);

  // DRAW GRASS
  fill(lightGrass);
  triangle(300, 300, 600, 250, 600, 300);
  fill(medGrass);
  triangle(0, 300, 0, 225, 600, 300);
  fill(darkGrass);
  rect(0, 300, 600, 300);

  // GHOST MOVEMENT
  if (isMoving) {
    if (millis() - time2 > 1800) {          // start
      pic = pic2;
      chat = "oh no";
    }
    if (millis() - time2 > 3600) {
      pic = pic2;
      chat = "it's too windy";
    }
    if (millis() - time2 > 5400) {
      pic = pic3;
    }
    if (millis() - time2 > 7200) {
      strokeWeight(4);
      stroke(255);
      line(100, 115, 500, 115);
      strokeWeight(0);
      words = "not a good day";
      chat = "my sheets are slipping";
    }
    if (millis() - time2 > 10800) {         // end
      pic = pic1;
      time2 = millis();
    }
  }

  // DRAWS GHOST 
  image(pic, 150, 200);

  // WRITES TITLE
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(words, 300, 100);

  // WRITES GHOST DIALOGUE
  textAlign(LEFT);
  textSize(24);
  text("ghost: " + chat + "..", 25, 550);
}


// START BUTTON
function start () {
  if (isMoving == false) {
    isMoving = true;
    time1 = millis();
    time2 = millis();
  }
}


// STOP BUTTON
function stop () {
  if (isMoving) {
    isMoving = false;
    time1 = millis();
    time2 = millis();
    pic = pic1;
  }
}