class Hammer {
    constructor(x, y) {
      var options = {
        'density':2,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 70;
      this.height = 150;
      this.image = loadImage("hammer.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      imageMode(CENTER);
      //strokeWeight(4);
			//stroke("black");
			//fill("red");
      image(this.image,0,0,this.width,this.height);
      //rect(0,0,this.width,this.height)
      pop();
    };
  };
  