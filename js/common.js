var eE =     [];     //connection matrix (double) матрица связей
var nE =     [];     // compound matrix for listing (double) матрица соединений для перечисления в listView public static double[,] NE;
var Eij =    [];     // learning parameter matrix (double) матрица параметров обучения
var tT =     [];     // public static double[,] T; (3000, 31), //матрица обучающих примеров
var eXpert = [];
var Tclone = [];     //public static double[,] Tclone; //вспомогательный набор

function Inicializacia () {
	NacitajT(); //функция для чтения входного обучающего набора T
	//InicializujE();
	//ExpertFCM();
	Tclone = T.Clone();
}

function NacitajT () { //функция для чтения входного обучающего набора T
	fetch('data/trenovacka.txt')
	.then(response => response.text())
	.then(m_text => getTrenovacka(m_text));
}


function getTrenovacka (text_arg) { //we a hepping get 3000 lines with training data
	var data_points = text_arg.split('\n');
	data_points.splice(0, 1); // delete first line with data info

	if (data_points[data_points.length-1]=="") { // delete last empty line (if this is)
		data_points.splice(data_points.length-1, 1);
	}

	for (var i = 0; i < data_points.length; i++) {
		tT[i] = data_points[i].split('\t');
	}
}

class T {
	Clone(){
		//console.log(Tclone);
	}
}

T = new T();

Inicializacia ();
