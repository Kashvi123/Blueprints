class Ground{
constructor(x,y,width,height){
    var options = {
        //gravity
         isStatic:true
       }
       //created ground from matter.bodies
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width
       this.height = height
       
       //added ground and it's world to matter.world
       World.add(world,this.body);
}

display(){
//to colour the objects
push();
fill("green")
 
//to change x and y position from top left corner to center of object
rectMode(CENTER)

// to display rectangles
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop();
}
}

//push adn pop stop the changes from leaking from one class to the other/