class Log extends BaseClass {

    constructor (x ,y, h,a ) {

        
        super (x , y , 20 , h);

        Matter.Body.setAngle (this.body , a );

        this.image = loadImage ("sprites/wood2.png");

       
    }

      
}