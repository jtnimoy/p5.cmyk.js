/**
   this example demonstrates the basic slider bars controlling the
   components of the CMYK class.  text will translate it from (0-100)
   CMYK space to (0-255) RGBA space.

   @author jtnimoy
   
*/
let gui;//make gui

//make slider globals
var cyan = 0.0;
var magenta = 0.5;
var yellow = 0.75;
var black = 0.8;

function setup() {
    createCanvas(windowWidth , windowHeight);//make a new canvas
    gui = createGui('color channel adjust');//make a gui
    gui.addGlobals('cyan' , 'magenta' , 'yellow' , 'black');//add globals to gui
}

function draw() {
    //create cmyk color from sliders
    let c = new Cmyk(cyan/100.0, magenta/100.0,
		     yellow/100.0, black/100.0);
    //store the p5 color
    let e = c.toColor();
    
    noStroke();
    fill(e);
    rect(0,0,width,height);//fill the entire browser
    fill(c.inverse().toColor());//fill with inverse color for text.
    textSize(50);//make the text bigger
    text(e , 300,100);//draw the text
}

