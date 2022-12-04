
// Making box

var bomb = new Bomb(200,200);

var mouse={
    x:0,
    y:0
}

window.addEventListener('mousemove',(e)=>{
    mouse.x=e.clientX;
    mouse.y=e.clientY;
})
window.addEventListener('touchmove',(e)=>{
    mouse.x=e.targetTouches[0].clientX;
    mouse.y=e.targetTouches[0].clientY;
})

window.addEventListener('mousedown',()=>{
    bomb.isInside(mouse);
})
window.addEventListener('mouseup',()=>{
    bomb.drag=false;
})
window.addEventListener('touchmove',(e)=>{
    bomb.isInside(mouse);
})
window.addEventListener('touchend',()=>{
    bomb.drag=false;
})


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    bomb.update();
}

animate();