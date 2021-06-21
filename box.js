class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            density:1,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }


    display(){
         var pos = this.body.position
         var angle = this.body.angle
         push();
        //translate translates the x and y position so that the object can turn.
         translate(pos.x,pos.y)
        //rotate decides the angle in which the object will turn. 
         rotate(angle)
        //to colour the objects
       fill("blue");
       stroke("white");
       strokeWeight(5);
        
        //to change x and y position from top left corner to center of object
        rectMode(CENTER)

        // to display rectangles
        rect(0,0,this.width,this.height);
        pop();

    }
}