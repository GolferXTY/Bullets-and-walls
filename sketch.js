var wall, thickness;
var bullet, speed, weight;

thickness = random(22,8);

function setup(){
    createCanvas(1600, 400);
wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor("green");

speed = random(223, 321);
weight = random(30, 52);

}

function draw(){
    background(250, 250, 250);

bullet.collide(wall);

    drawSprites();
}