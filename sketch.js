//Create variables here

var dog
var happyDog
var database
var foodS
var foodStock
var dog1
var dog2

function preload()
{
dog1=loadImage("Dog.png")
dog2=loadImage("happydog.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dog1)
  dog.scale=0.15
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  textSize(20)
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dog2)
}
  drawSprites();
fill(255,255,254)
stroke("black")
text("Food Remaining:"+foodS,170,200)
textSize(13)
text("Note:Press Up Arrow Key to Feed Drago Milk",130,10,300,20)

}

function readStock(data){
foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


