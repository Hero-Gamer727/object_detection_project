model_status = "";
objects = [];


function preload() {
    img = loadImage("IMG_2227.jpg");
}



function setup() {
    canvas = createCanvas(480,640);
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
    image(img, 0, 0, 450,640);
    if (model_status != "") {
        for (var i=0; i<objects.length; i++) {
            stroke("red");
            strokeWeight(1);
            fill("red");
            text(objects[i].label, objects[i].x, objects[i].y - 10);
            stroke("red");
            strokeWeight(1);
            fill("red");
            text(floor(objects[i].confidence * 100) + "%", objects[i].x + 30, objects[i].y - 10);


            noFill();
            stroke("red");
            strokeWeight(2);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);



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