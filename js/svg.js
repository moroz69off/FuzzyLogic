var ns = 'http://www.w3.org/2000/svg';
var div = document.getElementById('drawing');
var svg = document.createElementNS(ns, 'svg');
svg.setAttributeNS(null, 'width', '100%');
svg.setAttributeNS(null, 'height', '100%');
div.appendChild(svg);

var PointsTopper = [];
var PointsBottom = [];
var radius;
//if (svg.clientWidth > 888) {radius = 8;} else {radius = svg.clientWidth / 60;}
radius = svg.clientWidth / 64;
console.log('svg.clientWidth: '+svg.clientWidth+', compute radius: '+(svg.clientWidth/64) +', radius: '+radius);                       //DEBUG
function DrawPoint (x, y) {
	var circle = document.createElementNS(ns, 'circle');
	circle.setAttributeNS(null, 'cx', x);
	circle.setAttributeNS(null, 'cy', y);
	circle.setAttributeNS(null, 'r', radius);
	circle.setAttributeNS(null, 'fill', '#777');
	svg.appendChild(circle);
}

function SetPointsCoordinates (topPointsNumber, bottomPointsNumber) { // params: how many points in the top row, how many points in the bottom row
	var svgFrameWidth = svg.clientWidth;
	var svgFrameHeigth = svg.clientHeight;
	var intervalOfPoints = svgFrameWidth/40 + radius; // distance between points
	console.log('interval '+intervalOfPoints)                                // debug
	for (var i = 0; i < topPointsNumber; i++) { 
		var Point = new Object({x: intervalOfPoints * (i + 1), y: 20, name: 'top_point_' + (i + 1)});
		PointsTopper.push(Point);
	}
	for (var i=0; i<bottomPointsNumber; i++) {
		var Point = new Object({x: intervalOfPoints * (i + 1), y:svgFrameHeigth - 20, name: 'bottom_point_' + (i + 1)});
		PointsBottom.push(Point);
	}
}

function DrawPoints () {
	for (var i=0; i<PointsTopper.length; i++) {
		DrawPoint(PointsTopper[i].x, PointsTopper[i].y);
	}

	for (var i=0; i<PointsBottom.length; i++) {
		DrawPoint(PointsBottom[i].x, PointsBottom[i].y);
	}

	//Ofset(); // ofset row-points to center
}

SetPointsCoordinates(9, 22);

DrawPoints();
