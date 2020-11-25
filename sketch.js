var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  
 fixedRect=createSprite(200,200,30,80);
 fixedRect.shapeColor="blue";

 movingRect=createSprite(400,80,50,50);
 movingRect.shapeColor="green";

 movingRect.debug=true;
 fixedRect.debug=true;
}

function draw() {
  background(0);  
 
 movingRect.x=mouseX;
 movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2  ){
  movingRect.shapeColor="purple";
  
}
 else{
   movingRect.shapeColor="green";
 }

 
 
  drawSprites();
}