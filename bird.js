class Bird extends Baseclass
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.image=loadImage("sprites/bird.png")
    }

    display()
    {
        super.display();
        fill("red")
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
    }

}
