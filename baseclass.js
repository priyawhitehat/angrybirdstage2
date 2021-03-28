class Baseclass
{
    constructor(x,y,width,height)
    {
        var options={restitution:0.8,friction:2.0,density:1.0}
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/base.png");
    
        World.add(world,this.body);
        this.w=width;
        this.h=height;
    }
    
    display()
    {
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        image(this.image,0,0,this.w,this.h);
        pop();
    }

}