export default function sketch (p,value) {

		console.log(value);
	var amt = 0;
	p.setup = ()=> {
	
	}

	p.draw = ()=> {
		monteCarlo(amt,1);	
	}

	class point {
		constructor(otherX,otherY){
			this.x = otherX;
			this.y = otherY;
		}
	}

	function getRndDot(lengthOfSquare) {
		var rnd = Math.random();
		var x = lengthOfSquare * rnd;
		var y = lengthOfSquare * rnd;
		return new point(x,y);
	}

	function monteCarlo(numberOfDots,len) {
		var numberOfDotsInCircle = 0;
		var piEstimate = 0;	
		var inCircle=[];
		var notInCircle=[];
		var rndDot = new point(0,0);
		for(let i=0;i<numberOfDots;i++) {
			rndDot = getRndDot(len);	
			console.log(rndDot.x,rndDot.y);
		}
	}
}
