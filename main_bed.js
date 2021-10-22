img = "";

function preload() {
img = loadImage('bed.jpeg');
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

   
}
function draw(){
    image(img, 0, 0, 400, 400);
    fill("#00FF00");
    text("Bed", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 350, 350);

}


function addUserback4() {

    window.location = "index.html";
}
