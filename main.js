song1 = "";
song2 = "";

leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized...');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
    song1 = loadSound("harry_potter.mp3");
    song2 = loadSound("peter_pan.mp3");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
    }
}