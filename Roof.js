class Roof{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        world.add(world,this.body);
    }


    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.body.position.xthis.body.posiion.y,this.width,this.height);
        pop();
    }
}