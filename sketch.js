var river, riverImg, road, roadImg, frog, frogImg;
var car, carImg, cycle, cycleImg, bus, busImg, log, logImg, log2, log2Img, car2, car2Img, home, homeImg;
var home, home2Img, cycleGroup, car34, car35, car1Group, car2Group, busesGroup, logGroup;
var gameState=0;
var lives=3;
var life, life2, life3,  lifeImg;
var box1, box2, box3, box4, box5;
var chances=5;
var score=0;
var frogImg2;
var frog2, frog3, frog4, frog5, frog6;
var gameOver, gameOver_Img, youWin, youWin_Img;
function preload()
{
  riverImg=loadImage("images/river.jpg");
  roadImg= loadImage("images/road.jpg");
  frogImg= loadImage("images/Frog_Img.png");
  carImg= loadImage("images/car.png");
  cycleImg=loadImage("images/cycle.png");
  busImg= loadImage("images/bus.png");
  logImg= loadImage("images/log2.png");
  log2Img= loadImage("images/log3.png");
  car2Img= loadImage("images/car2.png");
  homeImg= loadImage("images/home.png");
  home2Img=loadImage("images/home.png");
  car34= loadImage("images/car32.png");
  car35= loadImage("images/car3.png");
  lifeImg= loadImage("images/heart_1.png");
  frogImg2= loadImage("images/frog2.png");
  gameOver_Img= loadImage("images/gameend.jpg");
  youWin_Img= loadImage("images/youwon.png");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  river= createSprite(displayWidth/2, displayHeight/2-200, 50, 50);
  river.addImage(riverImg);
  river.scale=1.5;
  road= createSprite(displayWidth/2, displayHeight/2+500, 50,50);
  road.addImage(roadImg);
  road.scale=1.5;
  frog= createSprite(displayWidth/2-235, displayHeight/2+320, 50, 50);
  frog.addImage(frogImg);
  frog.scale=0.42;
  
  life= createSprite(1042,136, 20,20 );
  life.addImage(lifeImg);
  life.scale=0.5
  life2= createSprite(1160,136, 20,20 );
  life2.addImage(lifeImg);
  life2.scale=0.5
  life3= createSprite(1278,136, 20,20 );
  life3.addImage(lifeImg);
  life3.scale=0.5
  
  

  
  home= createSprite(displayWidth/2-200, displayHeight/17-10, 50, 50);
  home.addImage(homeImg);
  home.scale=2;
  home2= createSprite(displayWidth/2+619, displayHeight/17-10, 50, 50);
  home2.addImage(homeImg);
  home2.scale=2;

  
  

  cycleGroup= new Group();
  car1Group= new Group();
  car2Group= new Group();
  busesGroup= new Group();
  logGroup= new Group();

  frog2= createSprite(495, 45, 50, 50);
  frog2.addImage(frogImg2);
  frog2.scale=0.24;
  frog2.visible=false;

  frog3= createSprite(211, 45, 50, 50);
  frog3.addImage(frogImg2);
  frog3.scale=0.24;
  frog3.visible=false;

  frog4= createSprite(748, 45, 50, 50);
  frog4.addImage(frogImg2);
  frog4.scale=0.24;
  frog4.visible=false;

  frog5= createSprite(1040, 45, 50, 50);
  frog5.addImage(frogImg2);
  frog5.scale=0.24;
  frog5.visible=false;

  frog6= createSprite(1309, 45, 50, 50);
  frog6.addImage(frogImg2);
  frog6.scale=0.24;
  frog6.visible=false;

  

}

function draw() 
{
  background(51);
  box1= createSprite(73,20, 150,150 );
  box1.visible=false;
  box2= createSprite(357,20, 150,150 );
  box2.visible=false;
  box3= createSprite(625,20, 150,150 );
  box3.visible=false;
  box4= createSprite(892,20, 170,150 );
  box4.visible=false;
  box5= createSprite(1175,20, 150,150 );
  box5.visible=false;
  if(gameState===0){
    //end State
    if(frog.isTouching(car1Group)|| frog.isTouching(car2Group)||frog.isTouching(busesGroup)||frog.isTouching(cycleGroup)){
      //gameState=1;
      frog.x= displayWidth/2-235; 
      frog.y=displayHeight/2+320;
      lives= lives-1;
      console.log(lives);
    }
    //frog movements
    if(keyDown(LEFT_ARROW)){
      frog.x= frog.x-10;
      
    }
    else if(keyDown(RIGHT_ARROW)){
      frog.x= frog.x+10;
    }
    else if(keyDown(UP_ARROW)){
      frog.y=frog.y-10;
    }
    else{
      frog.y=frog.y+10;
    }


    //reduce lives
    if(lives===2){
      life3.destroy();
    }
    if(lives===1){
      life2.destroy();
    }
    if(lives===0){
      life.destroy();
      //gameState=1;
    }

    //chances
    if(frog.y<88 && frog.x>=431 && frog.x<=552){
      //display frog 2
      frog.x= displayWidth/2-235; 
      frog.y=displayHeight/2+320;
      score= score+100;
      chances= chances-1;
      frog2.visible= true;

      
     }

     if(frog.y<88 && frog.x>=160 && frog.x<=262){
      //display frog 2
      frog.x= displayWidth/2-235; 
      frog.y=displayHeight/2+320;
      score= score+100;
      chances= chances-1;
      frog3.visible= true;

    
      }
     if(frog.y<88 && frog.x>=707 && frog.x<=788){
      //display frog 2
      frog.x= displayWidth/2-235; 
      frog.y=displayHeight/2+320;
      score= score+100;
      chances= chances-1;
      frog4.visible= true;

      
     }
     if(frog.y<88 && frog.x>=988 && frog.x<=1091){
      //display frog 2
      frog.x= displayWidth/2-235; 
      frog.y=displayHeight/2+320;
      score= score+100;
      chances= chances-1;
      frog5.visible= true;

      
     }
     
     if(frog.y<88 && frog.x>=1258 && frog.x<=1360){
      //display frog 2
      frog.x= displayWidth/2-235; 
      frog.y=displayHeight/2+320;
      score= score+100;
      chances= chances-1;
      frog6.visible= true;

      
     }

     if(chances===0 || lives===0){
       gameState=1; 
     }
     

    //spawning Objects;
  cars();
  cars2();
  cycles();
  buses();
  logs();
  
  drawSprites();

  fill(255)
  textSize(25);
  text("Chances: "+ chances, 1200,200);
  text("Lives: "+ lives, 1200,250);
}
  
  if(gameState===1){
   if(score===500){
     text("You Win", displayWidth/2, displayHeight/2);
     image(youWin_Img, 0,0, width, height);
     textSize(32);
     fill(255);
     text("Press r to restart", displayWidth/2-50, displayHeight/2 );
     if(keyDown("r")){
      restart();
     }
    
   }  
   else if(lives===0){
     text("You Lose", displayWidth/2, displayHeight/2);
     image(gameOver_Img, 0, 0, width, height);
     textSize(32);
     fill(255);
     text("Press r to restart", displayWidth/2-50, displayHeight/2 );
     if(keyDown("r")){
      restart();
     }
   }
   
   
  }

  frog.debug=true;
  frog.setCollider("rectangle", 0, 0, 30, 30)
  home.depth= frog.depth;
  frog.depth= frog.depth+1;
  home2.depth= frog.depth;
  frog.depth= frog.depth+1;
  
  console.log(mouseX, mouseY);


  
}



function restart(){
  gameState=0;
  lives=3;
  score=0;
  chances=5;
  frog2.visible=false;
  frog3.visible=false;
  frog4.visible=false;
  frog5.visible=false;
  frog6.visible=false;

  life= createSprite(1042,136, 20,20 );
  life.addImage(lifeImg);
  life.scale=0.5
  life2= createSprite(1160,136, 20,20 );
  life2.addImage(lifeImg);
  life2.scale=0.5
  life3= createSprite(1278,136, 20,20 );
  life3.addImage(lifeImg);
  life3.scale=0.5
}
