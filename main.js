noseX=0;
noseY=0;
clown_hatX=0
clown_hatY=0
function preload(){
clown_nose=loadImage('https://i.postimg.cc/mDfnk443/unnamed-removebg-preview-1.png');
clown_hat=loadImage('https://i.postimg.cc/2ywvvQZj/305b8de098c5f975cc24eb33b0dd2380-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet =ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotPoses);
}

function draw() {
image (video,0,0,300,300 );
image(clown_hat , clown_hatX, clown_hatY,130,130)
image(clown_nose , noseX,noseY,45,45);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    console.log(results)
  noseX=results[0].pose.nose.x-22; 
  noseY=results[0].pose.nose.y; 
  clown_hatX=results[0].pose.nose.x-75;
  clown_hatY=results[0].pose.nose.y-200;


  console.log("nose x =" + noseX)
  console.log("nose y =" + noseY)
}
