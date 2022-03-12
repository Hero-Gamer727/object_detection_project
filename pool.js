model_status = "";
objects = [];
3

function preload() {
    img = loadImage("IMG_2228.jpg");
}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    model_status = true;
    object_detector.detect(img, gotResults);

}


function draw() {
    image(img, 0, 0, 640, 420);
    if (model_status != "") {
        for (i=0; i<objects.length; i++) {
            noFill();
            stroke("red");
            strokeWeight(2);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
fill("blue");
stroke("blue");
strokeWeight(1);
text(objects[i].label, objects[i].x, objects[i].y-10);
text(floor(objects[i].confidence * 100),objects[i].x+20, objects[i].y-10);


        }
    }
}




function gotResults(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        objects = results;

    }
}