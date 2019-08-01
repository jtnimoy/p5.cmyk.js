
function setup() {
    createCanvas(windowWidth , windowHeight);
}

function draw() {
    for(let z=0;z<5;z++){
	for(let y=0;y<5;y++){
	    for(let x=0;x<5;x++){
		//make a new Cmyk color object
		let n = noise(x * 0.1,y * 0.2,z * 0.3 + frameCount * 0.01);
		let c = new Cmyk(x * 0.1,0.1 * y, z * 0.1, n );
		
		//convert it to RGB
		let d = c.toRgb();
		noStroke();
		//use the color data
		fill(d.r , d.g , d.b);
		rect(z*100 + x * 10,y*100 + x * 10,(5-x) * 10 + (5-x) * 10 , (5-x) * 10 + (5-x) * 10);
	    }
	}
    }
}
