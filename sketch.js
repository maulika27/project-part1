/*
level 0 = story & dialougeBox1
level 1 = maze challange
*/








var forestImg, firstBgImg, secondBgImg, thirdBgImg;
var wizardImg, princeImg, frogImg;
var spikeImg, birdImg, fireballImg;
var dialogBox1Img, dialogBox2Img;

var level=0;
var gameState = 1;

var wizard,prince,dialogBox1,dialogBox2;
var level0Sprites;
var level1Sprites;

function preload(){
	forestImg = loadImage("images/forest.jpg");
	firstBgImg = loadImage("images/maze.png");
	secondBgImg = loadImage("images/secondBackground.jpg");
	thirdBgImg = loadImage("images/thirdBackground.jpg");
	wizardImg = loadImage("images/wizard.png");
	princeImg = loadImage("images/prince.png");
	frogImg = loadImage("images/frog.png");
	spikeImg = loadImage("images/spikes.png");
	birdImg = loadImage("images/bird.png");
	fireballImg = loadImage("images/fireball.png");
	dialogBox1Img = loadImage("images/dialouge1.jpg");
	dialogBox2Img = loadImage("images/dialouge2.jpg");

}
function setup(){
	createCanvas(1000,600);

	level0Sprites = new Group();
	level1Sprites = new Group();

	wizard = createSprite(width-20,height/2);
	wizard.addImage(wizardImg);
	prince = createSprite(20,height/2);
	prince.addImage(princeImg);
	wizard.velocityX = -3;
	prince.velocityX = 3;
	

	dialogBox1 = createSprite(width/2,height/3);
	dialogBox1.addImage(dialogBox1Img);
	dialogBox1.scale = 0.5;



	dialogBox1.visible = false;
	level0Sprites.add(wizard);
	level0Sprites.add(prince);
	level0Sprites.add(dialogBox1);
	
}

function draw(){

	if(level === 0){
		background(forestImg);
		gameStory();
	}

	
	
	else if(level ===1){
		background(firstBgImg);
		level0Sprites.setVisibleEach(false);
		mazeChallenge();


	}


	drawSprites();
}

function gameStory(){
	if(wizard.x < (width*2/3) && prince.x > (width/3)){
		wizard.velocityX = 0;
		prince.velocityX = 0;
		prince.addImage(frogImg);
		//wait(5000);
		dialogBox1.visible = true;
		textSize(30);     
		fill("yellow");
		stroke("red");
		//text("Press Space to Enter the Game", width/2-100,height*3/4);
	
		if(keyDown("space")){
			level = 1;
		}
		
	}
}



function gameStateControl(){

}

function mazeChallenge(){
	var sprite1 = createSprite(42,202,40,307);
	var sprite2 = createSprite(500, 31, 950, 34.7);
	var sprite3 = createSprite(225,99, 40.5,150);
	var sprite4 = createSprite(250, 188, 270, 33);
	var sprite5 = createSprite(355, 110, 110, 35);
	var sprite6 = createSprite(404.4, 148, 37.5, 112.6);
	var sprite7 = createSprite(131, 150, 42, 109);
	var sprite8 = createSprite(954, 189, 40, 279);
	var sprite9 = createSprite(496, 89, 42.5, 80);
	var sprite10 = createSprite(580, 111, 200, 34.5);
	var sprite11 = createSprite(679, 150, 40, 111);
	var sprite12 = createSprite(619, 190, 106, 33);
	var sprite13 = createSprite(768.7, 160, 40, 230);
	var sprite14 = createSprite(676, 267, 223, 36);
	var sprite15 = createSprite(585, 347, 41, 180);
	var sprite16 = createSprite(867, 83, 39, 100);
	var sprite17 = createSprite(492, 569, 951, 35);
	var sprite18 = createSprite(37, 495, 40, 125);
	var sprite19 = createSprite(128, 415, 225, 38);
	var sprite20 = createSprite(948, 495, 39, 170);
	var sprite21 = createSprite(918, 400, 100, 35);
	var sprite22 = createSprite(865, 348, 39, 338);
	var sprite23 = createSprite(765, 441, 43, 225);
	var sprite24 = createSprite(698, 346, 90, 35);
	var sprite25 = createSprite(673, 421, 41, 180);
	var sprite26 = createSprite(580, 494, 220, 35);
	var sprite27 = createSprite(492, 340, 42, 342);
	var sprite28 = createSprite(400, 265, 200, 37);
	var sprite29 = createSprite(312, 362, 40, 230);
	var sprite30 = createSprite(202, 341, 180, 35);
	var sprite31 = createSprite(133, 295, 40, 100);
	var sprite32 = createSprite(192, 263, 100, 36);
	var sprite33 = createSprite(404.4, 455, 40, 260);
	var sprite34 = createSprite(250, 493, 300, 38);

	level1Sprites.add(sprite1);
	level1Sprites.add(sprite2);
	level1Sprites.add(sprite3);
	level1Sprites.add(sprite4);
	level1Sprites.add(sprite5);
	level1Sprites.add(sprite6);
	level1Sprites.add(sprite7);
	level1Sprites.add(sprite8);
	level1Sprites.add(sprite9);
	level1Sprites.add(sprite10);
	level1Sprites.add(sprite11);
	level1Sprites.add(sprite12);
	level1Sprites.add(sprite13);
	level1Sprites.add(sprite14);
	level1Sprites.add(sprite15);
	level1Sprites.add(sprite16);
	level1Sprites.add(sprite17);
	level1Sprites.add(sprite18);
	level1Sprites.add(sprite19);
	level1Sprites.add(sprite20);
	level1Sprites.add(sprite21);
	level1Sprites.add(sprite22);
	level1Sprites.add(sprite23);
	level1Sprites.add(sprite24);
	level1Sprites.add(sprite25);
	level1Sprites.add(sprite26);
	level1Sprites.add(sprite27);
	level1Sprites.add(sprite28);
	level1Sprites.add(sprite29);
	level1Sprites.add(sprite30);
	level1Sprites.add(sprite31);
	level1Sprites.add(sprite32);
	level1Sprites.add(sprite33);
	level1Sprites.add(sprite34);
	




	//level1Sprites.setVisibleEach(false);

}

function spikesChallenge(){

}


function fireBallChallenge(){

}

function gameStateControl(){

}

