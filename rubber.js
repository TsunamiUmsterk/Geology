class Rubber {
     constructor(x, y, radius) {
       var options = {
           'restitution':0.8,
           'friction':1.0,
           'density':1.5
       }
       this.body = Bodies.circle(x, y, radius, options);
       this.radius = radius;
       
       World.add(world, this.body);
     }
     display(){
       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill("blue");
       strokeWeight(3);
       stroke("black");
       ellipse(0, 0, this.radius, this.radius);
       pop();
     }
   };