class Paper{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:false, restitution:0.1, density:1.2, friction:1.5})
        this.radius=radius
        World.add(world, this.body)

    }
    display(){
        ellipseMode(CENTER)
        fill("white")
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)

    }

}