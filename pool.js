model_status="";

function preload(){
    img=loadImage("IMG_2228.jpg");
}



function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
model_status=true;
object_detector.detect(img,gotResults);

}


function draw(){
    image(img,0,0,640,420);
}




function gotResults(error,results){
if(error){
    console.error(error);
    
}else{
    console.log(results);

}
}
