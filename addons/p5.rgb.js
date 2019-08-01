(function() {
    
    p5.prototype.Rgb = function(rr,gg,bb){
	this.r = rr;
	this.g = gg;
	this.b = bb;
	
	this.lerp = function(b, n, ramp) {
	    var r2 = b.r;
	    var g2 = b.g;
	    var b2 = b.b;
	    
	    r2 = ramp(n, this.r, r2 - this.r);
	    g2 = ramp(n, this.g, g2 - this.g);
	    b2 = ramp(n, this.b, b2 - this.b);
	    
	    return new Rgb(r2,g2,b2);
	};

	this.toColor = function(a){
	    return color(this.r,this.g,this.b,a);
	};
	
	return this;
    };
    
})();
