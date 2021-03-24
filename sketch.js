var canvas;
var music;
var sur1,sur2,sur3,sur4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    sur1 = createSprite(0,580,360,30);
    sur1.shapeColor = rgb(0,0,255);

    sur2 = createSprite(295,580,200,30);
    sur2.shapeColor = rgb(255,128,0);

    sur3 = createSprite(515,580,200,30);
    sur3.shapeColor = rgb(153,0,76);

    sur4 = createSprite(740,580,220,30);
    sur4.shapeColor = rgb(0,100,0);


    //create box sprite and give velocity

    box = createSprite(random(20,750),100, 40,40);
    box.shapeColor = rgb(255,255,255);
    box.velocityX = 4;
    box.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box


    if(sur1.isTouching(box) && box.bounceOff(sur1)){
        box.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(sur2.isTouching(box)){
        box.shapeColor = rgb(255,128,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(sur3.isTouching(box) && box.bounceOff(sur3)){
        box.shapeColor = rgb(153,0,76);
    }

    if(sur4.isTouching(box) && box.bounceOff(sur4)){
        box.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}

