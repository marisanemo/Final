var gif1;
var gif2;
var gif3;
var gif4;
var gif5;
var gif6;
var gif7;
var gif8;




var box1Alpha;
var box2Alpha;
var box3Alpha;



var Option1 = 50;
var Option2 = 230;
var Option3 = 410;



var topBoundary = 220;
var midBoundary = 420;
var bottomBoundary = 620;
var bottom2Boundary = 820;

var buttonSize = 150;

var choiceAreaA = "";
var choiceAreaB = "";
var choiceAreaC = "";
var choiceAreaD = "";


var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8
var img9;
var img10;
var img11;
var img12;


var choices1 = false;
var choices2 = false;
var choices3 = false;
var choices4 = false;
var choices5 = false;
var choices6 = false;
var choices7 = false;
var choices8 = false;



function preload(){
  gif1 = loadGif('assets/gifs/giphy (3).gif');
  gif2 = loadGif('assets/gifs/giphy (4).gif');
  gif3 = loadGif('assets/gifs/giphy (5).gif');
  gif4 = loadGif('assets/gifs/giphy (6).gif');
  gif5 = loadGif('assets/gifs/giphy (7).gif');
  gif6 = loadGif('assets/gifs/giphy (8).gif');
  gif7 = loadGif('assets/gifs/giphy (9).gif');
  
}

function setup() {
  createCanvas(600, 1500);

  background("green");



  //row1
  img1 = loadImage('assets/images/dessert5.jpg');
 
  img2 = loadImage('assets/images/imgres.jpg');
  
  img3 = loadImage('assets/images/dessert4.jpg');

   //row2
  img4 = loadImage('assets/images/elf1.png');
  
  img5 = loadImage('assets/images/elf2.gif');
  
  img6 = loadImage('assets/images/elf3.jpg');

   //row3;
   img7 = loadImage('assets/images/drink1.jpg');
  
   img8 = loadImage('assets/images/drink2.jpg');
  
   img9 = loadImage('assets/images/drink3.jpg');

   //row4
 
   img10 = loadImage('assets/images/music4.png');
  
   img11 = loadImage('assets/images/music1.jpg');
  
   img12 = loadImage('assets/images/music3.jpg');

}


function draw() {

  background("green");

 //image(img1, Option1, topBoundary, buttonSize, buttonSize);

  stroke(5);
  fill("white");
  rect(0, 0, 600, 150);

  fill("blue");
  textSize(40);
  text("Which Chistmas Movie", 90, 60);
  text("Should You Watch?", 105, 110)


  fill("white");
  textSize(22);
  text("Choose a dessert", 30, 205);
  //choiceA
image(img1, Option1, topBoundary, buttonSize, buttonSize);
image(img2, Option2, topBoundary, buttonSize, buttonSize); 
image(img3, Option3, topBoundary, buttonSize, buttonSize);


  fill("white")
  textSize(22)
  text("Who's your favorite elf?", 30, 405)
    //choiceB
image(img4, Option1, midBoundary, buttonSize, buttonSize);
image(img5, Option2, midBoundary, buttonSize, buttonSize); 
image(img6, Option3, midBoundary, buttonSize, buttonSize);
 
    
    
  fill("white")
  textSize(22)
  text("Choose a Christmas drink", 30, 605)
    //choiceC
image(img7, Option1, bottomBoundary, buttonSize, buttonSize);
image(img8, Option2, bottomBoundary, buttonSize, buttonSize); 
image(img9, Option3, bottomBoundary, buttonSize, buttonSize);


  //choiceD
  fill("white")
  textSize(22)
  text("Pick out some Christmas music", 30, 805)
image(img10, Option1, bottom2Boundary, buttonSize, buttonSize);
image(img11, Option2, bottom2Boundary, buttonSize, buttonSize); 
image(img12, Option3, bottom2Boundary, buttonSize, buttonSize);




  //choiceA 
  if (mouseY > topBoundary && mouseY < topBoundary + 150) {
    if (mouseX > Option1 && mouseX < Option1 + 150) {
      console.log("1a");
      choiceAreaA = "1a";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option1 + -10, topBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);

    }
  }
  if (mouseY > topBoundary && mouseY < topBoundary + 150) {
    if (mouseX > Option2 && mouseX < Option2 + 150) {
      console.log("2a");
      choiceAreaA = "2a";
      box2Alpha = fill(255, 70);
      noStroke();
      rect(Option2 + -10, topBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box2Alpha = fill(0);
    }
  }
  if (mouseY > topBoundary && mouseY < topBoundary + 150) {
    if (mouseX > Option3 && mouseX < Option3 + 150) {
      console.log("3a");
      choiceAreaA = "3a";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option3 + -10, topBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box3Alpha = fill(0);
    }
  }
  //choiceb
  if (mouseY > midBoundary && mouseY < midBoundary + 150) {
    if (mouseX > Option1 && mouseX < Option1 + 150) {
      console.log("1b");
      choiceAreaB = "1b";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option1 + -10, midBoundary + -10, buttonSize + 20, buttonSize + 20);
       }else{
       box1Alpha= fill(0);
    }
  }
  if (mouseY > midBoundary && mouseY < midBoundary + 150) {
    if (mouseX > Option2 && mouseX < Option2 + 150) {
      console.log("2b");
      choiceAreaB = "2b";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option2 + -10, midBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);

    }
  }
  if (mouseY > midBoundary && mouseY < midBoundary + 150) {
    if (mouseX > Option3 && mouseX < Option3 + 150) {
      console.log("3b");
      choiceAreaB = "3b";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option3 + -10, midBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);
    }
  }
  //choicec
  if (mouseY > bottomBoundary && mouseY < bottomBoundary + 150) {
    if (mouseX > Option1 && mouseX < Option1 + 150) {
      console.log("1c");
      choiceAreaC = "1c";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option1 + -10, bottomBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);
    }
  }
  if (mouseY > bottomBoundary && mouseY < bottomBoundary + 150) {
    if (mouseX > Option2 && mouseX < Option2 + 150) {
      console.log("2c");
      choiceAreaC = "2c";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option2 + -10, bottomBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);
    }
  }
  if (mouseY > bottomBoundary && mouseY < bottomBoundary + 150) {
    if (mouseX > Option3 && mouseX < Option3 + 150) {
      console.log("3c");
      choiceAreaC = "3c";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option3 + -10, bottomBoundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);

    }
  }
  //choiceD
  if (mouseY > bottom2Boundary && mouseY < bottom2Boundary + 100) {
    if (mouseX > Option1 && mouseX < Option1 + 100) {
      console.log("1d");
      choiceAreaD = "1d";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option1 + -10, bottom2Boundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);
    }
  }
  if (mouseY > bottom2Boundary && mouseY < bottom2Boundary + 150) {
    if (mouseX > Option2 && mouseX < Option2 + 150) {
      console.log("2d");
      choiceAreaC = "2d";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option2 + -10, bottom2Boundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);
    }
  }
  if (mouseY > bottom2Boundary && mouseY < bottom2Boundary + 150) {
    if (mouseX > Option3 && mouseX < Option3 + 150) {
      console.log("3d");
      choiceAreaC = "3d";
      box1Alpha = fill(255, 70);
      noStroke();
      rect(Option3 + -10, bottom2Boundary + -10, buttonSize + 20, buttonSize + 20);
    } else {
      box1Alpha = fill(0);
    }
  } else {
    choiceAreaD = "";
    box1alpha = 0;
  }
  
 if(choices1 == true){
   if (gif1.loaded()){
    image(gif1, 70, 1050);
    }
    fill("white");
    textSize(30);
    text("You should watch elf!", 120, 1340);
  }
  
  if(choices2 == true){
     if (gif2.loaded()) {
        image(gif2, 50, 1050);
     }
    fill("white");
    textSize(30);
    text("You should watch the Polar Express!", 60, 1300);
  }
  if(choices3 ==true){
     if (gif3.loaded()) {
        image(gif3, 20, 1000);
     }
    fill("white");
    textSize(30);
    text("You should watch It's a Wonderful Life!", 60, 1400);
  }
   if(choices4 ==true){
     if (gif4.loaded()) {
        image(gif4, 150, 1050);
     }
    fill("white");
    textSize(30);
    text("You should watch the The Grinch!", 60, 1300);
  }
   if(choices5 ==true){
     if (gif5.loaded()) {
        image(gif5, 60, 1050);
     }
    fill("white");
    textSize(30);
    text("You should watch Rudolph!", 80, 1400);
  }
   if(choices6 ==true){
     if (gif6.loaded()) {
        image(gif6, 60, 1050);
     }
    fill("white");
    textSize(30);
    text("You should watch Frosty the Snowman!", 60, 1300);
  }
   if(choices7 ==true){
     if (gif7.loaded()) {
        image(gif7, 30, 1050);
     }
    fill("white");
    textSize(30);
    text("You should watch Home Alone!", 60, 1300);
  }
}



  function mousePressed() {
    if ((choiceAreaA == "1a") && (choiceAreaB == "1b") && (choiceAreaC == "1c") && (choiceAreaD == "1d")) {
        choices1 = true;
        choices2 = false;
        choices3 = false;
        choices4 = false;
        choices5 = false;
        choices6 = false;
        choices7 = false;
    }

    if ((choiceAreaA == "2a") && (choiceAreaB == "1b") && (choiceAreaC == "1c") && (choiceAreaD == "1d")) {
     choices1 = false;
     choices2 = true;
     choices3 = false;
     choices4 = false;
     choices5 = false;
     choices6 = false;
     choices7 = false;
    }
    
    if ((choiceAreaA == "3a") && (choiceAreaB == "1b") && (choiceAreaC == "1c") && (choiceAreaD == "1d")) {
    choices1 = false;
     choices2 = false;
     choices3 = true;
     choices4 = false;
     choices5 = false;
    choices6 = false;
    choices7 = false;
    }
    
    if ((choiceAreaA == "1a") && (choiceAreaB == "2b") && (choiceAreaC == "1c") && (choiceAreaD == "1d")) {
    choices1 = false;
     choices2 = false;
     choices3 = false;
     choices4 = true;
     choices5 = false;
      choices6 = false;
    choices7 = false;
      
    }
    if ((choiceAreaA == "1a") && (choiceAreaB == "2b") && (choiceAreaC == "2c") && (choiceAreaD == "1d")) {
     choices1 = false;
     choices2 = false;
     choices3 = false;
     choices4 = false;
    choices5 = true;
    choices6 = false;
    choices7 = false;
    }
    if ((choiceAreaA == "1a") && (choiceAreaB == "2b") && (choiceAreaC == "2c") && (choiceAreaD == "2d")) {
    choices1 = false;
     choices2 = false;
     choices3 = false;
     choices4 = false;
    choices5 = false;
    choices6 = true;
    choices7 = false;
    }
    if ((choiceAreaA == "2a") && (choiceAreaB == "2b") && (choiceAreaC == "2c") && (choiceAreaD == "2d")) {
   choices1 = false;
    choices2 = false;
     choices3 = false;
     choices4 = false;
    choices5 = false;
    choices6 = false;
    choices7 = true;
    }

  }