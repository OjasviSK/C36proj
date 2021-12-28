var foodStock = 0;
var fedStock = 0;
var dog,sadDog,happyDog;
var add, feed;
function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  bottle = loadImage("Milk.png");
  emptyBottle = loadImage("milkImage.png");
}

function setup() {
  createCanvas(800,400);
  
  // database = firebase.database();
  // console.log(database);

  // foodClass = new FoodClass(bottle);

  dog=createSprite(700,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  add = createButton("addFood");
  add.position(300,100);
  add.mousePressed(addFood);
  reduct = createButton("reductFood");
  reduct.position(400,100);
  reduct.mousePressed(reductFood);

  feed = createButton("feedFood");
  feed.position(500,100);
  feed.mousePressed(feedDog);

}

function draw() {
  background(46,139,87);
  // foodClass.display();

  var feedx = 80;
  var feedy = 100;

  imageMode(CENTER);

  if(foodStock != 0){
    for(var i = 0; i < foodStock; i = i + 1){
      if(i%10 == 0){
        feedx = 80;
        feedy = feedy + 50;
      }     
      image(bottle, feedx, feedy, 50, 50);
      feedx=feedx+30;       
    }
  }


  var fedx = 600;
  var fedy = 200;

  imageMode(CENTER);

  if(fedStock != 0){
    for(var o = 0; o < fedStock; o = o + 1){
      if(o%2 == 0){
        fedx = 600;
        fedy = fedy + 50;
      }     
      image(bottle, fedx, fedy, 50, 50);
      fedx=fedx+30;       

    }
  }
  

  drawSprites();
}



//function to read food Stock
function addFood(){
  foodStock = foodStock+1;
}
function reductFood(){
  if(foodStock!=0){
    foodStock = foodStock-1;
  }
}


//function to update food stock and last fed time
function feedDog(){
  if(foodStock != 0){
    foodStock = foodStock-1;
    dog.addImage(happyDog);
    fedStock=fedStock+1;
  }
}

//function to add food in stock
