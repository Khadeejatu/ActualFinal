
let s6image1;
let s6image2;
let s6image3;
let s6image4;

 function preload() 
 {
  s6image1 = loadImage('media/Story 3 details/details1.png'); 
  s6image2 = loadImage('media/Story 3 details/details2.png');  
  s6image3 = loadImage('media/Story 3 details/details3.png'); 
  s6image4 = loadImage('media/Story 3 details/details4.png'); 
}

  //-------------------------------------------------------------------------------
  function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    background(10, 10, 10);
    imageMode(CENTER);
  

   

  }
  //-----------------------------------------------------------------------------------

  function draw() 
{
  background(10, 10, 10);

  // Display all images
  image(s6image1, 160, 171, 200, 200);
  image(s6image2, 1232, 185, 200, 200);
  image(s6image4, 375, 650, 300, 270);
  image(s6image3, 914, 667, 300, 270);

  // Set text styles
  textFont('Pacifico');
  textSize(20);
  textStyle(BOLD); 
  textAlign(CENTER);
  fill(255);

  // --- Image 1 ---
  if (mouseX > 160 - 150 && mouseX < 160 + 150 &&
      mouseY > 171 - 150 && mouseY < 171 + 150) {
        image(s6image1, 160, 171, 300, 300);
    text("1. Aicha's audience also saw very little.", 356, 350);
  }

  // --- Image 2 ---
  if (mouseX > 1232 - 150 && mouseX < 1232 + 150 &&
      mouseY > 185 - 150 && mouseY < 185 + 150) {
        image(s6image2, 1232, 185, 300, 300);
    text("2. They saw anxiety and confusion.", 1102, 359);
    text("Most could only see fear and incompetence.", 1102, 384);
  }

  // --- Image 3 ---
  if (mouseX > 375 - 200 && mouseX < 375 + 200 &&
      mouseY > 650 - 185 && mouseY < 650 + 185) {
        image(s6image4, 375, 650, 400, 370);
    text("3. But Modou heard the whispers of his hair.", 290, 764);
  }

  // --- Image 4 ---
  if (mouseX > 914 - 200 && mouseX < 914 + 200 &&
      mouseY > 667 - 185 && mouseY < 667 + 185) {
        image(s6image3, 914, 667, 400, 370);
    text("4. As he saw beyond the surface.", 1300, 627);
    text("He saw courage and the desire to grow.", 1300, 652);
  }
}
    
  //------------------------------------------------------------------------------------
  function mousePressed()
  
  { 
    print("mouseX is: ");
    print(mouseX);
    print(", mouseY is: ");
    print(mouseY);
  
  }
  //--------------------------------------------------------------------
  

