  //global variables
 let ellipserad= 50;
 let mycircle;
 let mycircle2;
 let hasard0;
 let velocity;
 let pos;
 let rad;

  // function preload ()
  // {

  // }

  //-------------------------------------------------------------------------------
  function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    background(255,0,0);
    mycircle= new circlesf(0, height/2, 255, 255, 255, 10);
    mycircle2= new circlesb(width, height/2, 0, 0, 0, -10);



  }
  //-----------------------------------------------------------------------------------

  function draw() 
  {
    background(255,0,0);
  

  mycircle.move();
  mycircle2.move();
  var X= abs((mycircle.x - mycircle2.x))* abs((mycircle.x - mycircle2.x));
  var Y= abs((mycircle.y - mycircle2.y))*abs((mycircle.y - mycircle2.y));
  rad= Math.sqrt(X+Y);
  
  
  if (rad<=2*ellipserad)
  {
    mycircle2.disappear();
    mycircle.increase();
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
  //My separate classes
class circlesf
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

  }

 display() // this method will just display the little circles
  {
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, ellipserad,ellipserad);
  }

  move()
  {

    noStroke();
    fill(this.r,this.g,this.b);
    
    ellipse(this.pos.x, this.pos.y, ellipserad,ellipserad);
    this.pos.add(this.velocity);
    if (this.pos.x >= width+50)
    {
      this.pos.x=-10;
    }
  }

increase ()
{
  noStroke();
  fill(200); // gray colour to portray merging of colors
  ellipse(this.x, this.y, 2*ellipserad,2*ellipserad);
  this.pos.add(this.velocity);
  if (this.pos.x >= width+50 || this.pos.x <= -50)
  {
    this.pos.x=-10;
  }

}

 disappear()
 {
  noStroke();
  fill(255, 0,0 );// the same color as the background
  ellipse(this.x, this.y, ellipserad,ellipserad);
 }

}
//-------------------------------------------------------------------------------------------------

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

  }

 display() // this method will just display the little circles
  {
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, ellipserad,ellipserad);
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

// increase ()
// {
//   noStroke();
//   fill(200); // gray colour to portray merging of colors
//   ellipse(this.x, this.y, 2*ellipserad,2*ellipserad);
//   this.pos.add(this.velocity);
//   if (this.pos.x >= width+50 || this.pos.x <= -50)
//   {
//     this.pos.x=-10;
//   }

// }

 disappear()
 {
  noStroke();
  fill(255, 0,0 );// the same color as the background
  ellipse(this.x, this.y, ellipserad,ellipserad);
 }
  
}




// class Circles
// {

  
// }



  