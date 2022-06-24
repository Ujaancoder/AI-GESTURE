function setup(){
    video=createCapture(VIDEO);
    video.size(550,600);

    canvas=createCanvas(550,500);
    canvas.position(560,115);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#ADD8E6');
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}