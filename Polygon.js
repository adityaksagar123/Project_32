class Polygon 
{
    constructor(x,y)
    {
        var options= 
        { 
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.radius = 20;
        this.body = Bodies.circle(x,y, 20, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display()
    {
       imageMode(CENTER);
       image(this.image, this.body.position.x,this.body.position.y, this.radius,this.radius);
       
    }
}