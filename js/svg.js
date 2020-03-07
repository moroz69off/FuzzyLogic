var ns = 'http://www.w3.org/2000/svg';
var div = document.getElementById('drawing');
var svg = document.createElementNS(ns, 'svg');
svg.setAttributeNS(null, 'width', '100%');
svg.setAttributeNS(null, 'height', '100%');
div.appendChild(svg);

var circ = document.createElementNS(ns, 'circle');
circ.setAttributeNS(null, 'cx', 50);
circ.setAttributeNS(null, 'cy', 30);
circ.setAttributeNS(null, 'r', 10);
circ.setAttributeNS(null, 'fill', '#0ff');
svg.appendChild(circ);


function CreatePoint (x, y) {
	var circ = document.createElementNS(ns, 'circle');
	circ.setAttributeNS(null, 'cx', x);
	circ.setAttributeNS(null, 'cy', y);
	circ.setAttributeNS(null, 'r', 10);
	circ.setAttributeNS(null, 'fill', '#0ff');
	svg.appendChild(circ);
}

CreatePoint(100,70);
