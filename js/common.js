var connectMatrix = [,]; //connection matrix (double)
var compoundListingMatrix = [,];// compound matrix for listing (double)
var learnParameterMatrix = [,]; // learning parameter matrix (double)
var T_LearnExamples = [,]; // learning examples matrix (3000, 31), (double)
var Tclone = [[5,6],[1,2]]; //public static double[,] Tclone; //вспомогательный набор

function Inicializacia () {
	//NacitajT();
	//InicializujE();
	//ExpertFCM();
	Tclone = T.Clone();
}

fetch('data/trenovacka.txt') // get trenovacka data
	.then(response => response.text())
	.then(m_text => Trenovacka(m_text));

function Trenovacka (text_arg) { //we a hepping get 3000 lines with training data
	var data_points = text_arg.split('\n');
	data_points.splice(0, 1);
	//console.log(data_points[0]);
}

class T {
	Clone(){
		console.log(Tclone);
	}
}

T = new T();

Inicializacia ();
