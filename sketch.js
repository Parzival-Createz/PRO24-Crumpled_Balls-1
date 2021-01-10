const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, trash1, trash2, trash3, paper;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// ground = Bodies.rectangle(width / 2, 670, width, 10, { isStatic: true });
	// World.add(world, ground);

	trash1 = new Trash(690, 650, 110, 15);
	trash2 = new Trash(630, 630, 15, 65);
	trash3 = new Trash(750, 630, 15, 65);

	paper = new Paper(150, 600, 60, 60);

	ground = new Trash(width / 2, 660, width, 10);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	trash1.display();
	trash2.display();
	trash3.display();

	fill("white");
	ground.display();
	paper.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { y: 400, x: 690 });
	}
}
