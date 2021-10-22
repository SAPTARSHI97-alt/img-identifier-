img = "";
status = "";
objects = [];
function preload() {
img = loadImage('pepsi bottle.jpeg');
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";


}

function draw(){
    image(img, 0, 0, 600, 400);
    if(status != ""){
        for(i = 0; i <objects.length; i++){
            document.getElementById("status").innerHTML = "status: object detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+ ""+ percent+ "%",objects[i].x+15 + objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    fill("#00FF00");
    text("Bottle", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350);
    

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }

}


function addUserback3() {

    window.location = "index.html";
}
