var narutoAni, naruto;
var kakashiAni, kakashi;
var sasuke , sasukeAni;
var minato , minatoAni;
var sakura,sakuraAni;
var madara , madaraAni;
var bg;
var database;
var playerCount , gameState = 0;


function preload(){
  narutoAni = loadAnimation("images/Naruto/1.png", "images/Naruto/2.png","images/Naruto/3.png",
                            "images/Naruto/4.png","images/Naruto/5.png" ,"images/Naruto/6.png");

  kakashiAni = loadAnimation("images/Kakashi/11.png","images/Kakashi/22.png","images/Kakashi/33.png",
                              "images/Kakashi/44.png","images/Kakashi/55.png","images/Kakashi/66.png")

  sasukeAni = loadAnimation("images/Sasuke/111.png","images/Sasuke/222.png","images/Sasuke/333.png","images/Sasuke/444.png",
                            "images/Sasuke/555.png","images/Sasuke/666.png","images/Sasuke/777.png","images/Sasuke/888.png")
  
   minatoAni = loadAnimation("images/Minato/1111.png","images/Minato/2222.png","images/Minato/3333.png");        
   
   sakuraAni = loadAnimation("images/Sakura/11111.png","images/Sakura/22222.png","images/Sakura/33333.png",
                              "images/Sakura/44444.png","images/Sakura/55555.png","images/Sakura/66666.png")

    madaraAni = loadAnimation("images/Madara/111111.png","images/Madara/222222.png","images/Madara/333333.png",
                                "images/Madara/444444.png","images/Madara/555555.png","images/Madara/666666.png")

    bg = loadImage("images/background.jpg");
}

function setup(){
  createCanvas(1500, 700);
  database = firebase.database();

  naruto = createSprite(250,400);
  naruto.addAnimation("naruto" , narutoAni);
  naruto.scale = 2;

  kakashi = createSprite(550,400);
  kakashi.addAnimation("kakashi",kakashiAni);
  kakashi.scale = 2;

  sasuke = createSprite(400,400);
  sasuke.addAnimation("sasuke",sasukeAni);
  sasuke.scale=2.5;

  minato = createSprite(850,400);
  minato.addAnimation("minato",minatoAni);
  minato.scale = 2;

  sakura = createSprite(100,400);
  sakura.addAnimation("sakura",sakuraAni);
  sakura.scale = 2;

  madara = createSprite(700,400);
  madara.addAnimation("madara",madaraAni);
  madara.scale = 2;
}

function draw(){
  background(bg);

  drawSprites();
} 

