const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const gravity = 0.5;
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
window.addEventListener('resize',()=>{
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
})


class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dx=0;
        this.dy=0;
        this.width=50;
        this.height=100;
        this.drag=false;
    }
    draw(){
        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.fillStyle="darkgreen";
        c.fill();
    }
    isInside(mouse){
        if(mouse.x > this.x && mouse.x < this.x+this.width && mouse.y > this.y && mouse.y < this.y + this.height){
            this.drag=true;
        }
    }
    update(){
        //drag
        if(this.drag){
            this.x=mouse.x;
            this.y=mouse.y;
        }
        else{
            //gravity
            if(this.y + this.height + this.dy < canvas.height){
                this.dy+=gravity;
            }
            else{
                this.dy=0;
            }   
        }
        this.y+=this.dy;
        this.draw();
    }
}

class Bomb extends Box{
    constructor(x,y){
        super(x,y);
        this.img= new Image;
        this.img.src = './bomb.png';
    }
    draw(){
        c.drawImage(this.img,this.x,this.y,100,100);
    }
}