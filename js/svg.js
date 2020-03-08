var ns = 'http://www.w3.org/2000/svg';
var div = document.getElementById('drawing');
var svg = document.createElementNS(ns, 'svg');
svg.setAttributeNS(null, 'width', '100%');
svg.setAttributeNS(null, 'height', '100%');
div.appendChild(svg);

var Points = [];


function DrawPoint (x, y) {
	var circ = document.createElementNS(ns, 'circle');
	circ.setAttributeNS(null, 'cx', x);
	circ.setAttributeNS(null, 'cy', y);
	circ.setAttributeNS(null, 'r', 10);
	circ.setAttributeNS(null, 'fill', '#777');
	svg.appendChild(circ);
}

function SetPointsCoordinates () {
	var svgFrameWidth = svg.clientWidth;
	var svgFrameHeigth = svg.clientHeight;
	var intervalPoint = svgFrameWidth/23;
	for (var i = 0; i < 9; i++) {
		var Point = new Object({x: 20 * (i + 1), y:20});
		Points.push(Point);
	}
	console.log(Points);
}

SetPointsCoordinates();

for (var i=0; i<Points.length; i++) {
	DrawPoint(Points[i].x, Points[i].y);
}


