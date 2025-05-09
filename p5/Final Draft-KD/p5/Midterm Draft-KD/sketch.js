  //global variables
  let positives=[];
  let negatives=[];
  let circlesF=[];
  let circlesB=[];
  let bigCircles=[];
  let pos1=[];
  let pos2=[];
  let POS=[];
  let xoutF;
  let xoutB;
  let velocity;
  let widthvel;
  let heightvel;
  let ellipserad;
  let lamp;
  

  // function preload ()
  // {

  // }

  //-------------------------------------------------------------------------------
  function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    background(255,0,0);
//     //define variables here
//   xoutF= width+100;
//   xoutB=-100;
//   ellipserad=50;
//   for (var i=0; i<11; i++)
//     {
//       var hasard=random(width);
//       pos1[i]= createVector (hasard, i *50); 
//     }

// //try it here
//     for (var i=0; i<11; i++)
//       {
//         var hasard3=random(width);
//         pos2[i]= createVector (hasard3, i *100); 
//       }
// //initialize the big circles as well
//       for (var i=0; i<11; i++)
//         {
//           var hasard4=random(width);
//           POS[i]= createVector (hasard4, i *100); 
//         }
//   lamp=false;



  }
  //-----------------------------------------------------------------------------------

  function draw() 
  {
    

    background(255,0,0);
//     noStroke();
//     fill(0);
//     for (var i=0; i<11; i++)
//       {
//         hasard2=random (10);
//         velocity= createVector(hasard2,0);
      
//       ellipse(pos1[i].x, pos1[i].y,ellipserad,ellipserad);
//       //pos1[i].x+=5;
//       pos1[i].add(velocity);

//       if (pos1[i].x >= width)
//       {
//         pos1[i].x= 0; 
//       }

//       }
// //trying it here

//       for (var i=0; i<11; i++)
//         {
//           hasard2=random (20);
//          var velocity2= createVector(-hasard2,0);
//         noStroke();
//         fill(255);
//         ellipse(pos2[i].x, pos2[i].y,ellipserad,ellipserad);
//         //pos1[i].x+=5;
//         pos2[i].add(velocity2);
  
//         if (pos2[i].x <= -10)
//         {
//           pos2[i].x= width; 
//         }
  
//         }
// // if they collapse, become bigger, move away
//         for (var i=0; i<11; i++)
//           {
//             if (pos1[i].x == pos2[i].x ) //this seems to never occur
//             {
//               // lamp=true;
//               // pos1[i].x= -10;
//               // pos2[i].x= -10;
//               POS[i]=createVector(pos1[i].x, pos1[i].y);
//               noStroke();
//               fill(200);
//               ellipse(POS[i].x, POS[i].y,2*ellipserad,2*ellipserad);
//             }
//           }

// // // if the lamp is on, create a bigger circle 
// //           if (lamp==true)
// //           {
// //             for (var i=0; i<11; i++)
// //               {
// //                 var hasard4=random(width);
// //                 POS[i]= createVector (hasard4, i *100); 
// //               }
        
// //           }
    
     
  lamp= new 
  


  }


    
  //------------------------------------------------------------------------------------
  function mousePressed()
  
  { 
    

    print("mouseX is: ");
    print(mouseX);
    print(", mouseY is: ");
    print(mouseY);
    print (timing);

  }
  //--------------------------------------------------------------------
  //My separate classes
class circlesf
{ 

 constructor(x, y)
{
  this.x=x;
  this.y=y;
}

 display() // this method will just display the little circles
  {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, ellipserad,ellipserad);
  }

  move()
  {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, ellipserad,ellipserad);
    this.x+=3;
    if (this.x== width+50)
    {
      this.x=-10;
    }
  }

increase ()
{
  noStroke();
  fill(255);
  ellipse(this.x, this.y, 2*ellipserad,2*ellipserad);
}

 disappear()
 {
  noStroke();
  fill(255, 0,0 );// the same color as the background
  ellipse(this.x, this.y, ellipserad,ellipserad);
 }

}

// class circlesb
// {

  
// }

// class Circles
// {

  
// }



  