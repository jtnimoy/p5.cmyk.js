(function() {
    
    p5.prototype.Cmyk = function(cc, mm, yy, kk){
	this.c = cc;
	this.m = mm;
	this.y = yy;
	this.k = kk;
	
	this.inverse = function() {
	    return new Cmyk(1-this.c , 1-this.m , 1-this.y, 1-this.k);
	}


	this.toColor = function(a) {
	    var nc = (this.c * (1-this.k) + this.k);
	    var nm = (this.m * (1-this.k) + this.k);
	    var ny = (this.y * (1-this.k) + this.k);
	    
	    var r = (1-nc) * 255;
	    var g = (1-nm) * 255;
	    var b = (1-ny) * 255;
	    
	    return color(r, g, b,a);
	}

	this.toRgb = function() {
	    var nc = (this.c * (1-this.k) + this.k);
	    var nm = (this.m * (1-this.k) + this.k);
	    var ny = (this.y * (1-this.k) + this.k);
	    
	    var r = (1-nc) * 255;
	    var g = (1-nm) * 255;
	    var b = (1-ny) * 255;
	    
	    return new Rgb(r, g, b);
	}

	
	this.lerp = function(b, n, ramp) {
	    var c2 = b.c;
	    var m2 = b.m;
	    var y2 = b.y;
	    var k2 = b.k;
	    
	    c2 = ramp(n, this.c, c2 - this.c);
	    m2 = ramp(n, this.m, m2 - this.m);
	    y2 = ramp(n, this.y, y2 - this.y);
	    k2 = ramp(n, this.k, k2 - this.k);
	    
	    return new Cmyk(c2, m2, y2, k2);
	}
	
	return this;
    };
    
})();
