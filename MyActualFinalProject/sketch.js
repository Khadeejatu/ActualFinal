// Declaring all my global variables for each scene
//Scene01
let ellipserad= 50;
let mycircle=[]; 
let mycircle2=[];
let hasard0;
let velocity;
let pos;
let rad;
let mycount;
let csound;

//Scene02
let myimages = [];
let numberimage = 4;
let myimage1;
let myimage2;
let myimage3;
let myimage4;

//Scene031
let s3image1=[];
let s3image2=[];
let s3image3=[];
let raindropX = [];
let raindropY = [];
let myrain;
let plusobjects = [];
let plusobjects1 = [];
let plusobjects2 = [];
let rain=false;
let w;
let h;

//Scene032
let minusobjects = [];

//Scene04
let s4image1;
let s4image2;
let s4image3;
let s4image4;
let t=0;

//Scene05
let s5image1;
let s5image2;
let s5image3;
let s5image4;
let s5image5;
let s5image6;

//Scene06
let s6image1;
let s6image2;
let s6image3;
let s6image4;
let mypiano;

let mycurrentscene=1;
let button1;
let button2;

//The preload function will load all my necessary data from my project folder
 function preload() 
 {

  //Please note that all of my images are AI-generated based on a specific story and the detailed instructions I provide.
  //This method is to ensure specificity and alignment of the pictures with the ideas I would like to portray.

  //Scene01
  csound = loadSound('media/Sounds/popsound.mp3'); //This sound is used in scene 1 and causes the two different "balloons" to pop once they meet and merge
  //Scene02
  myimage1 = loadImage('media/Story 1 power of unity/unityscene1.png'); 
  myimage2 = loadImage('media/Story 1 power of unity/unityscene2.png'); 
  myimage3 = loadImage('media/Story 1 power of unity/unityscene3.png'); 
  myimage4 = loadImage('media/Story 1 power of unity/unityscene4.png'); 
  //Scene031
  myrain= loadSound ('media/Sounds/rainsound.mp3'); //This sound is meant to be displayed in scene 2 to portray rain

  for (let i=0; i<=15; i++) //This loop creates 15 images of minus and plus signs each and store them into an array for ease of handling in scenes 31 and 32
    {
      s3image1[i] = loadImage('media/Story 2 power of sharing/minus.png');
      s3image2[i] = loadImage('media/Story 2 power of sharing/plus.png');
    }

  for (let i=0; i<=10; i++) //same for the raindrop images in scenes 31 and 32
  {
    s3image3[i] = loadImage('media/Story 2 power of sharing/raindrop.png'); 
  }
  //Scene04
  s4image1 = loadImage('media/Story 2 power of sharing/scene1.png'); //loads scene 4 images
  s4image2 = loadImage('media/Story 2 power of sharing/scene2.png'); 
  s4image3 = loadImage('media/Story 2 power of sharing/scene3.png'); 
  s4image4 = loadImage('media/Story 2 power of sharing/scene4.png'); 

  //Scene05
  s5image1 = loadImage('media/Story 3 details/hair1.png'); //loads scene 5 images
  s5image2 = loadImage('media/Story 3 details/hair2.png');  
  s5image3 = loadImage('media/Story 3 details/hair3.png'); 
  s5image4 = loadImage('media/Story 3 details/hair4.png'); 
  s5image5 = loadImage('media/Story 3 details/hair5.png'); 
  s5image6 = loadImage('media/Story 3 details/hair6.png'); 

  //Scene 06
  s6image1 = loadImage('media/Story 3 details/details1.png'); //loads scene 6 images
  s6image2 = loadImage('media/Story 3 details/details2.png');  
  s6image3 = loadImage('media/Story 3 details/details3.png'); 
  s6image4 = loadImage('media/Story 3 details/details4.png'); 
  mypiano=loadSound('media/Sounds/piano.mp3'); // This sound is loaded so as to be played throughout the story 
}

  //-------------------------------------------------------------------------------
  function setup() //This block only runs once. The setup function will mainly be used to initialize some relevant variables
  {
    createCanvas(windowWidth, windowHeight);
     background(255,0,0);
    mycount=0;
     //Scene 01
     for (let i=0;i<=20; i++) //This loop creates 2 arrays of 20 objects made of images
     {  
        var hasard1= random (height); //this is to randomize the y position of one image-object in the array for each i instance
        var hasard2=random (width); // same but for the x-position 
        mycircle [i]= new circlesf(hasard2, hasard1, 189, 234, 200, 2);// creates an image object stored in an array at index i with its position randomized

        //This follows a similar parallel logic 
        var hasard3=random(height); 
        var hasard4=random(0, width);
        mycircle2[i]= new circlesb(hasard4, hasard3, 104, 59, 37, -2); // note that this array will move backward
      
     }

     //Scene031
     for (let i = 0; i <= 10; i++) // for loop that initializes an array for a randomized positions of the 10 raindrops
      {
        raindropX[i] = random(width); // the x positions can be anywhere from 0 to the value of the width of the canvas
        raindropY[i] = random(-height, 0); // the minus sign will make the raindrops start above the screen
      }
       w= width/15; //initializing useful variable for ease of change
       h= height/15;
  
    
  
      for (let i = 0; i <= 15; i++) //this loops initiliazes two array of image objects made of 15 elements 
        {
          let y = i * h;
          plusobjects[i] = new PLUS(s3image2[i], 0, y, 1);  //the  plus objects start at x position=0 and all have the same y value so they can move synchronously. Their speed is 1 to align with the tone of the story
          plusobjects1[i] = new MINUS(s3image2[i], width, y, 1); // same for this other plus object that will be moving in an opposite direction (see class definition)
        }

        //Scene032

        for (let i = 0; i <= 15; i++) //same logic as previous for loop
        {
          let y = i * h;
          plusobjects2[i] = new PLUS(s3image2[i], 0, y, 1);  
          minusobjects[i] = new MINUS2(s3image1[i], width, y, 1); // note that the image stored at the i position will be a minus sign image rather than a plus sign 
        }
        

     //Scene 06
    imageMode(CENTER); //This makes sure that the x and y positions of the image referred to in this code are that of its center
    mypiano.loop(); //This ensures my calming piano sound keeps playing as long as my code is running

   

  }
  //-----------------------------------------------------------------------------------

  function draw() 
  {
    if (mycurrentscene === 1) // The scene on display will always start with the first scene. Depending on which scene is active, the buttons displayed will be adapted
    {
      SCENE1(); //displays scene 1
      Boutons('POWER OF UNITY 1', 'POWER OF UNITY 2', 1, 2); // show buttons that can either stay on scene 1 or lead to next scene 2
    } 
    else if (mycurrentscene === 2) // if the scene displayed is scene 2, 
    {
      SCENE2(); //keep displaying scene 2
      Boutons('POWER OF UNITY 1', 'POWER OF SHARING 1', 1, 31); //show buttons that can either go back to scene 1 or lead to next scene 3
    } 

    else if (mycurrentscene === 31) //same logic applies to the next lines respectively
    {
      SCENE31();
      Boutons('POWER OF UNITY 2', 'P0WER OF SHARING 2', 2, 32);
    } 
    else if (mycurrentscene === 32) {
      SCENE32();
      Boutons('POWER OF SHARING 1', 'POWER OF SHARING 3', 31, 4);
    } 
    else if (mycurrentscene === 4) {
      SCENE4();
      Boutons('P0WER OF SHARING 2', 'POWER OF EMPATHY 1', 32, 5);
    } 
    else if (mycurrentscene === 5) {
      SCENE5();
      Boutons('POWER OF SHARING 3', 'POWER OF EMPATHY 2', 4, 6);
    } 
    else if (mycurrentscene === 6) {
      SCENE6();
      Boutons('POWER OF EMPATHY 1', 'POWER OF UNITY 1', 5, 1); // this button either takes you to the previous button or leads you to the scene 1
    }
  }
  
    
  //------------------------------------------------------------------------------------
  function mousePressed()
  
  { 
    userStartAudio(); // this command is necessary to start the audio when the mouse is pressed
    print("mouseX is: "); //this prints the x position of the mouse
    print(mouseX);
    print(", mouseY is: "); //this prints the y position of the mouse
    print(mouseY);

    //Scene031
    if (rain == true && !myrain.isPlaying()) // this applies to scene 31. It ensures that the rainsound keeps looping throughout the scenes 31 and 32
    {
      myrain.loop(); // if the rain boolean is true but the sound is not playing, this function call will play the sound throughtout the scenes
    }

  
  }
  //--------------------------------------------------------------------
  //My main functions
  
  function SCENE1()
  {
    background(246, 236, 195); // sets the backround color to a specified one.
    
      for (let i = 0; i < mycircle.length; i++)  //loop goes through all the elements in the array
        {
        if (!mycircle[i].met) //this checks whether the two moving balloons have not met in their opposite direction  
          
        {
          mycircle[i].move(); // if they have not met yet, they will keep moving accordingly
        } 
        else // but if they have met
        {
          mycircle[i].increase();// one of the circles will increase in size and change color (see class functions)
        }
        }
    
      for (let j = 0; j < mycircle2.length; j++) 
      {
        if (!mycircle2[j].met) 
        {
          mycircle2[j].move();
        } 
      else 
        {
          mycircle2[j].disappear(); // and the other circle will disappear
        }
      }
    
      // Check for collisions (only if not already met)
      for (let i = 0; i < mycircle.length; i++) //loop goes through all the elements in the forward moving array
      {
        for (let j = 0; j < mycircle2.length; j++) // and check whether one item in that array has not met with any of the backwards moving array elements 
        {
          if (!mycircle[i].met && !mycircle2[j].met) //if they have not met yet
          {
            let rad = p5.Vector.dist(mycircle[i].pos, mycircle2[j].pos); //record the distance between the two elements
            if (rad <= ellipserad) // if this distance is less than or equal to the radius of the balloons
            {
              mycount++; // increase the value of the counter by one

              csound.play();// play the popsound that shows that the two ballons have merged
              mycircle[i].met = true; // confirm that they met
              mycircle2[j].met = true;
            }
          }
        }
      }
      
      let numstr=mycount; // this stores the current counter value in numstr variable
      textFont('Pacifico'); // sets the font ofthe text to pacifico
      textSize(50); // sets the font of the text to pacifico
      textStyle(BOLD); // boldens the text font.
      textAlign(CENTER);
      fill(0); // sets the text color to black
      text(numstr + " UNIONS!", width/2, 100); // display UNIONS ! every time two balloons merge and become bigger

  }

  function SCENE2()
  {
    background(254, 251, 250);// sets the background to an appropriate colour 

    // Wobble offsets using sine waves
    let wobbleX = sin(frameCount * 0.05) * 5;  // these will cause the x and y positions to not be static
    let wobbleY = cos(frameCount * 0.05) * 5;  

    image(myimage1, 365+wobbleX, 163+wobbleY, 300, 300); // displays these images at the specified location and make them dynamic
    image(myimage2, 1079+wobbleX, 164+wobbleY, 300, 300);
    image(myimage4, 1298+wobbleX, 642+wobbleY, 400, 300);
    image(myimage3, 155+wobbleX, 603+wobbleY, 300, 300);

    textFont('Pacifico');
    textSize(20);
    textStyle(BOLD); 
    textAlign(CENTER);
    fill(0); 

    text("The job was hard to do alone.",356+wobbleX, 350+wobbleY); // displays these text lines at the specified location and make them dynamic
    text("So they chose union.", 1102+wobbleX, 359+wobbleY);
    text("They united to build something stronger.", 290+wobbleX, 764+wobbleY);
    text("But ended up building something much bigger.", 800+wobbleX, 627+wobbleY);

  }

  function SCENE31()
  {
    background(228, 225, 224);
    rain=true;
    for (let i = 0; i <= 10; i++)  // updates the positions of the 10 rain drops images in the array
    {

      image(s3image3[i], raindropX[i], raindropY[i], 50, 50);
      raindropY[i] += 2; // their y positions are increased by 2 each time draw loop runs. This causes them to fall slowly
  
      if (raindropY[i] > height + 50) // if the raindrop gets off the canvas
      {
        raindropY[i] = random(-100, 0); // restart the falling
        raindropX[i] = random(width); // randomize its x position
      }
    }

  
    for (let i = 0; i < plusobjects.length; i++) //go through each array of the moving objects. Note that the arrays have the same number of elements for this to be in one for loop
    {
      
      if (!plusobjects[i].wobble && abs(plusobjects[i].x - plusobjects1[i].x) < 400) // if the wobble boolean in the class is false and the ojects distance is less than 400
      {
        plusobjects[i].wobble = true; // set the wooble booleans of each objects as true
        plusobjects1[i].wobble = true;
      }

   
      plusobjects[i].move(); // cause each of the objects to move accordingly
      plusobjects1[i].move();

    }
  }

  function SCENE32() // this scenes follow a similar logic as the previous scene
  {
    background(228, 225, 224);
    rain=true;
    for (let i = 0; i <= 10; i++) 
    {

      image(s3image3[i], raindropX[i], raindropY[i], 50, 50);
      raindropY[i] += 2; 
  
      if (raindropY[i] > height + 50) 
      {
        raindropY[i] = random(-100, 0);
        raindropX[i] = random(width);
      }
    }

  
    for (let i = 0; i < plusobjects2.length; i++) 
      
    {
      if (abs(plusobjects2[i].x - minusobjects[i].x) < 50)
      {
        minusobjects[i].arrival = true;
      }
      
      plusobjects2[i].move();
      minusobjects[i].move();

    }
  }

  function SCENE4()
  {
    background(254, 251, 250);

    image(s4image1, 147, 171, 300, 300); //set the images positions respectively and set the height and width to 300
    image(s4image2, 1232, 185, 300, 300);
    image(s4image3, 375, 555, 400, 300); // the width and height for these two images are slightly different due to difference in size
    image(s4image4, 984, 550, 400, 300);

    
    let offset = sin(t) * 5; //this variables helps cause wobbling of the text lines
    t += 0.02; // increment t to cause slow movement with use of sin
    textFont('Pacifico');
    textSize(20);
    textStyle(BOLD); 
    textAlign(CENTER);
    fill(0); // sets the text color to black

    text("He understood he had something to share,",356, 350-offset); // minus sign is for the movement to be towards the negative (down) direction
    text("So he stepped forward and opened the arms of his generosity.", 1102, 359+offset);
    text("He felt drawn to help his fellow,", 290, 764+offset);
    text("Like a cation pulled toward an anion.", 800, 700-offset);
  }

  function SCENE5()
  {
    background(10, 10, 10);
   

    let center= createVector(width/2, height/2); //create a vector out of the central point of the canvas
    let ecart= height/6; // set the variable ecart to the sixth of the height length 



    imageMode(CENTER);
    textFont('Pacifico');
    textSize(20);
    textStyle(BOLD); 
    textAlign(CENTER);
    fill(0); // sets the text color to black


    if (mouseY < ecart) // if the mouse y position is less than the sixth of the height
    {
      background(255, 227, 187);
      image(s5image1, center.x, center.y, 400, 400); // show the image of human hair 
      text("What do you see, hair?",width/2, 150); // display relevant line of poem
// So as the user moves down the screen, the story of the levels of complexity of human hair will be displayed to invite them to reflect on what is beyond the surface level
    } else if (mouseY >= ecart && mouseY < 2 * ecart) // the following lines show the same logic as previously, respectively
                                                        // this checks if the mouse y position is between the sixth of the height from the top and the third of the height from the top of the canvas
    {
      background(236, 210, 178);
      image(s5image2, center.x, center.y, 400, 400);
      text("Or maybe just a single strand?",width/2, 150);

    } else if (mouseY >= 2 * ecart && mouseY < 3 * ecart) 
    {
      background(250, 235, 220);
      image(s5image3, center.x, center.y, 400, 400);
      text("Do you see the cuticle, the cortex, or the medulla?",width/2, 150);

    } else if (mouseY >= 3 * ecart && mouseY < 4 * ecart) 
      
    {
      background(243, 218, 188);
      image(s5image4, center.x, center.y, 400, 400);
      text("Of course you do not. But maybe you wish to see the keratin polypeptides, the macrofibrils,",width/2, 150);

    } else if (mouseY >= 4 * ecart && mouseY < 5 * ecart) 
    {
      background(249, 233, 207);
      image(s5image5, center.x, center.y, 400, 400);
      text("Or even the infamous atoms that make up your hair!",width/2, 150);

    } else if (mouseY >= 5 * ecart && mouseY < 6 * ecart) 
      
    {
      background(238, 226, 212);
      image(s5image6, center.x, center.y, 400, 400);
      text("Alas, you cannot see those; not even the electrons. But they are there. They are the building blocks of your hair.",width/2, 150);

    }
  }

  function SCENE6()
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

 
  if (mouseX > 160 - 150 && mouseX < 160 + 150 &&
      mouseY > 171 - 150 && mouseY < 171 + 150)  // checks the mouse x and y positions and compare them to the given values
  {
        image(s6image1, 160, 171, 300, 300); // if the mouse is located in the specified range, the picture associated with this range will increase its size (width, and heigth) by 100
    text("1. Aicha's audience also saw very little.", 356, 350); // and the lines of a poem will reveal speaking about the image shown
  }

  
  if (mouseX > 1232 - 150 && mouseX < 1232 + 150 &&
      mouseY > 185 - 150 && mouseY < 185 + 150) 
  {
        image(s6image2, 1232, 185, 300, 300);
    text("2. They saw anxiety and confusion.", 1102, 359);
    text("Most could only see fear and incompetence.", 1102, 384);
  }

 
  if (mouseX > 375 - 200 && mouseX < 375 + 200 &&
      mouseY > 650 - 185 && mouseY < 650 + 185) 
      
  {
        image(s6image4, 375, 650, 400, 370);
    text("3. But Modou heard the whispers of his hair.", 290, 764);
  }

  
  if (mouseX > 914 - 200 && mouseX < 914 + 200 &&
      mouseY > 667 - 185 && mouseY < 667 + 185) {
        image(s6image3, 914, 667, 400, 370);
    text("4. As he saw beyond the surface.", 1300, 627);
    text("He saw courage and the desire to grow.", 1300, 652);
  }
  }
  //--------------------------------------------------------------------------
  //Other useful functions

  function Boutons(text1, text2, sceneNum1, sceneNum2) {
    // this removes the existing buttons if they exist
    if (button1) button1.remove();
    if (button2) button2.remove();
  
    // creates buttons
    button1 = createButton(text1);
    button2 = createButton(text2);
  
    //sets the positions of the bottom accordingly 
    button1.position(width / 8, height - height / 8);
    button2.position(width - width / 8, height - height / 8);
  
    
    function goToScene1() // this function will allow the user to switch between the current scene to the first scene specified in the parameters
    {
      mycurrentscene = sceneNum1;
    }
  
    function goToScene2() 
    {
      mycurrentscene = sceneNum2;
    }
  
   
    button1.mousePressed(goToScene1); //if the button is cliked, switch to the first specified scene
    button2.mousePressed(goToScene2); // likewise for the second specified scene
  }
  
  
  
  
  




  //---------------------------------------------------------------------------
     //My separate classes
 class circlesf
 { 
 
   constructor(x, y, r, b, g, veloc) // class takes the positin, color and velocity parameters of the objects for ease of control
   {
     this.x = x; // assign the specified x to this.x
     this.y = y;
     this.r = r;
     this.b = b;
     this.g = g;
     this.veloc = veloc;
     
     let hasard0 = random(this.veloc); // local variable to randomize the velocity of the object
     this.velocity = createVector(hasard0, 0); // the velocity is made as a vector for smoothness of movement. The y value is zero to keep the movement along the x axis alone
     this.pos = createVector(this.x, this.y);  // this makes a vector out of the position of the objects for ease of handling

     this.met=false; // declares that the object has not met with another one yet
 
   }
 
  display() // this method will just display the little circles
   {
     noStroke();
     fill(this.r,this.g,this.b); //colors the object with the specified color values
     ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad); // turn the object into a circle (balloon) with its positions as the x and y values of the pos vector created.
   }
 
   move()
   {
 
     noStroke();
     fill(this.r,this.g,this.b);
     
     ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad);
     this.pos.add(this.velocity); // add velocity to the position of the ballon to cause it to move
     if (this.pos.x >= width+50) // if the x position is far away from the canvas
     {
       this.pos.x=-10; // restart its movement from before the canvas
     }
   }
 
 increase ()
 {
 
   noStroke();
   fill(286,191,208); // gray colour to portray merging of colors
   ellipse(this.pos.x, this.pos.y, 2*ellipserad,2*ellipserad); // increse the size of the baloon by 2
   this.pos.add(this.velocity); // move the new balloon
   if (this.pos.x >= width+50) // if far from the canvas
   {
     this.pos.x=-10; // restart movement
   }

 }
 
  disappear()
  {
   noStroke();
   fill(255, 0,0 );// sets the same color as the background
   ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad);
   this.pos.x=-50;

  }
 
 }
 //---------------------------------
 
 class circlesb
 {
   constructor(x, y, r, b, g, veloc) 
   {
     this.x = x;
     this.y = y;
     this.r = r;
     this.b = b;
     this.g = g;
     this.veloc = veloc;
     
     let hasard0 = random(this.veloc); // local variable
     this.velocity = createVector(hasard0, 0); // class property
     this.pos = createVector(this.x, this.y);  // class property
     this.met=false;
 
   }
 
  display() // this method will just display the little circles
   {
     noStroke();
     fill(this.r,this.g,this.b);
     ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad);
   }
 
   move()
   {
 
     noStroke();
     fill(this.r,this.g,this.b);
     
     ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad);
     this.pos.add(this.velocity);
     if (this.pos.x <= -50)
       {
         this.pos.x=width+50;
       }
 
   }
 
  disappear()
  {
   noStroke();
   fill(246, 236, 195);// sets the color of the balloon as the same color as the background
   ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad); // display the ballon
   this.pos.x=-50; // send the balloon off the screen
  
  }
   
 }
 
//Scene03
class PLUS 
  
{
  constructor (img, x, y, speed) // this function receives an image, the position and speed of the object as parameters
  {
    this.img=img;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.wobble=false;
    this.counter=0;
    this.finished=false;
  }

  display()
  {
    image(this.img, this.x, this.y, 50, 50); // displays the image object at the specified location

  }
  
  move() 
  {

    if (this.finished) return; // if the boolean finised is true, remove object from the screen
    if (this.wobble) 
    {
      // wobbles horizontally using the sine function
      this.x += sin(frameCount * 0.1) * 1.5; // small side-to-side shake
      this.counter++; //increment the counter
      if (this.counter >=200) // if the counter is lage enough, wobbling haopens for a few seconds
      {
        this.wobble=false; // stop wobbling
        this.finished=true; //set finished to true
        this.x=0; // set the x position of the object to zero
      }

    } else 
    {
      this.x += this.speed; //otherwise move the image with the given speed
      if (this.x >= width + 50) //if the image goes off the screen
      {
        this.x = 0; // initialize its x poisition to zero
      }
    }
    image(this.img, this.x, this.y, 50, 50); // display the image
  }
  
}


class MINUS // follow the same logic as the previous class
{
  constructor (img, x, y, speed)
  {
    this.img=img;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.wobble=false;
    this.counter=0;
    this.finished=false;
  }

  display()
  {
    image(this.img, this.x, this.y, 50, 50);
  }
  
  move() 
  {
    if (this.finished) return;
    if (this.wobble) 
    {
      this.x += sin(frameCount * 0.1 + PI) * 1.5; // wobble opposite direction
      this.counter++;
      
      if (this.counter>=200)
        {
          this.wobble=false;
          this.finished=true;
          this.x=width;
        }

    } 
    else 
    {
      this.x -= this.speed; // but it will move backwards rather
      if (this.x <= -50) 
      {
        this.x = width;
      }
    }
    image(this.img, this.x, this.y, 50, 50);
  }
}
class MINUS2 // same class as the previous one
{
  constructor (img, x, y, speed)
  {
    this.img=img;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.arrival=false; // with an additional variable for ease of handling between scenes 31 and 32

  }

  display()
  {
    image(this.img, this.x, this.y, 50, 50);
  }
  
  move() 
  {
    image(this.img, this.x, this.y, 50, 50);

    if (this.arrival) // iff arrival is true
    {
      this.x += this.speed; // this one will move forward 
      if (this.x >= width+50) 
      {
        this.x = 0;
      }
    }
    else 
    {
      this.x -= this.speed; // if arrival is not true, this object will move backwards
      if (this.x <= -10) // if oject is off the screen
      {
        this.x = width; // bring it back to screen by setting its x position as equal to the width
      }
    }
}
}


