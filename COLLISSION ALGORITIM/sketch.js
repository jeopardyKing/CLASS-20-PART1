var fixedrec,movingrec;

function setup() {
  createCanvas(1200,1200);

  //creating sprite
  fixedrec=createSprite(400, 200, 200, 100);
  fixedrec.shapeColor="red";
  
  //creating sprite
  movingrec=createSprite(100,200,200,100);
  movingrec.shapeColor="red";
}

function draw() {
  background(0);
  
  //controls to moning rec
  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;
  
  //algorithim code 
  if(movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2 && 
    fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2 &&
    fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2 &&
    movingrec.y-fixedrec.y<fixedrec.height/2+movingrec.height/2  ){
    movingrec.shapeColor="cyan";
    fixedrec.shapeColor="cyan";
  }
  //if not then color should remain same 
  else{
    fixedrec.shapeColor="red";
    movingrec.shapeColor="red";
  }

  drawSprites();
}