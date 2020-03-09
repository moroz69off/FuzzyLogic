var ns = 'http://www.w3.org/2000/svg';
var div = document.getElementById('drawing');
var svg = document.createElementNS(ns, 'svg');
svg.setAttributeNS(null, 'width', '100%');
svg.setAttributeNS(null, 'height', '256');
div.appendChild(svg);

var PointsTop = [];
var PointsBottom = [];
var radius = svg.clientWidth / 64;
var intervalOfPoints;

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
	intervalOfPoints = svgFrameWidth/40 + radius; // distance between points
	
	for (var i = 0; i < topPointsNumber; i++) { 
		var Point = new Object({x: intervalOfPoints * (i + 1), y: 18, name: 'top_point_' + (i + 1)});
		PointsTop.push(Point);
	}
	for (var i=0; i<bottomPointsNumber; i++) {
		var Point = new Object({x: intervalOfPoints * (i + 1), y:svgFrameHeigth - 18, name: 'bottom_point_' + (i + 1)});
		PointsBottom.push(Point);
	}
}

function OffsetRowPointsToCenter () {
	var rowSize = PointsTop[PointsTop.length - 1].x - PointsTop[0].x;
	var sizeATopRowOffset = (svg.clientWidth / 2) - (rowSize / 2 + intervalOfPoints);
	for (var i = 0; i < PointsTop.length; i++) {
		PointsTop[i].x += sizeATopRowOffset;
	}
}

function DrawPoints () {
	OffsetRowPointsToCenter();

	for (var i=0; i<PointsTop.length; i++) {
		DrawPoint(PointsTop[i].x, PointsTop[i].y);
	}

	for (var i=0; i<PointsBottom.length; i++) {
		DrawPoint(PointsBottom[i].x, PointsBottom[i].y);
	}
}

SetPointsCoordinates(9, 22);

DrawPoints();
