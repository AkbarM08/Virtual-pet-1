//Create variables here
  var dogSprite, dogImage, happyDog, database, foodStock, foodS;
function preload(){
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup(){
	createCanvas(500, 500);
  dogSprite = createSprite(250, 250, 10, 10);
  dogSprite.addImage(dogImage);
  dogSprite.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw(){  
  background(46, 139, 87);
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dogSprite.addImage(happyDog);
      drawSprite();
    }
  drawSprites();
  textSize(15);
  fill("White"); 
  text("Note : Press up arrow to feed Drago milk", 130, 100)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}