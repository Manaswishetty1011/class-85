rover_x=10
rover_y=10
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
backgroundImage= "mars.jpg"
roverImage="rover.png"
function add(){
    background_ImgTag= new Image();
    background_ImgTag=uploadbackground;
    background_ImgTag.src=backgroundImage
    
    rover_ImgTag= new Image();
    rover_ImgTag=uploadrover;
    rover_ImgTag.src=roverImage   
}
function uploadbackground(){
    ctx.drawImage(background_ImgTag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_ImgTag,0,0,30,30)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode
    console.log(keypressed)
if(keypressed="38"){
    up();
    console.log("up")
}
if(keypressed="40"){
    down();
    console.log("down")
}
if(keypressed="37"){
    left();
    console.log("left")
}
if(keypressed="39"){
    right();
    console.log("right")
}
}

function up(){
    if(rover_y>0){
        rover_y-=10
        
        uploadrover();
    }
}
function down(){
    if(rover_y<800){
        rover_y+=10
        uploadrover();
    }
}
