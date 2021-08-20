var dog,happyDog,database,foodS,foodStock,dog1;

function preload(){
	
  dog1 = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage("dog12",dog1);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);


  if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS);
  dog.addImage("hDog",happyDog);
  }

  drawSprites();
  textSize(20);
  fill("red");
  text("foodStock");
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



