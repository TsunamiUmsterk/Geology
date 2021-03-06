class Ground {
     constructor(x, y, width, height, options) {
       var options = {
           'restitution':0.5,
           'friction':1.0,
           'density':2,
           'isStatic':true
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       
       World.add(world, this.body);
     }
     display(){
      var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("yellow");
       strokeWeight(6);
       stroke("orange");
       rect(0, 0, this.width, this.height);
       pop();
     }
   };