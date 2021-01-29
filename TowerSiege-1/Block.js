class Box extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height);
    this.Visiblity = 255;
  }

 display(){
  
   if(this.body.speed < 5){
    
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     
     stroke(48,22,8);
     strokeWeight(1)
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);

     pop();
   }
   
 }



};