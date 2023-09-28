

textSize = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
video = createCapture(VIDEO);
video.size(550, 550);

canvas = createCanvas(550, 500);
canvas.position(560, 80);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " +rightWristX + "difference = " + difference);

    }
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function draw()
{
    background('#6C91C2');
 document.getElementById("font_size").innerHTML = "Font Size is = " + difference + "px";
    textSize(difference)
    fill('#FFE787');
    text('Sarah', 50,400);
}

