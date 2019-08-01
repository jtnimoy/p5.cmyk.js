
function setup() {
    createCanvas(windowWidth , windowHeight);
}

function draw() {
    for(let i=0;i<5;i++){
	for(let j=0;j<5;j++){
	    //make a new Cmyk color object
	    let c = new Cmyk(i * 0.1,0.1 * j,0.1,0.1);
	    
	    //convert it to RGB
	    let d = c.toRgb();
	    noStroke();
	    //use the color data
	    fill(d.r , d.g , d.b);
	    ellipse(-25+i*100,-25+j*100,100,100);

	    //make another CMYK color object
	    c = new Cmyk(0,0,i*0.1,j*0.1);
	    
	    //convert it to RGB
	    d = c.toRgb();
	    noStroke();
	    //use the color data
	    fill(d.r , d.g , d.b);
	    ellipse(-25+i*100,-25+j*100,50,50);
	}
    }
}
