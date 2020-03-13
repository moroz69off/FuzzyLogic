var connectMatrix = [,]; //connection matrix (double)
var compoundListingMatrix = [,];// compound matrix for listing (double)
var learnParameterMatrix = [,]; // learning parameter matrix (double)
var learnExamples = [,]; // learning examples matrix (3000, 31), (double)

fetch('data/trenovacka.txt')
	.then(response => response.text())
	.then(m_text => Trenovacka(m_text));

function Trenovacka (text_arg) {
	var data_points = text_arg.split('\n');
	data_points.splice(0, 1);
	alert(data_points[0]);
}
