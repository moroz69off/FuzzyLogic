/*use strict*/
var eE =   []; //connection matrix (double) матрица связей
var nE =   []; // compound matrix for listing (double) матрица соединений для перечисления в listView public static double[,] NE;
var Eij = []; // learning parameter matrix (double) матрица параметров обучения
var tT = []; // public static double[,] T; (3000, 31), //матрица обучающих примеров

var pocVystupUzlov = 0; //public static int pocVystupUzlov; //пакет выходных узлов
var pocVstupUzlov = 0;  //public static int pocVstupUzlov;  //пакет входных узлов
var pocUzlov = 0;   //public static int pocUzlov = 0;   //количество всех узлов


var eXpert = [];
var Tclone = []; //public static double[,] Tclone; //вспомогательный набор

function Inicializacia () {
	NacitajT(); //функция для чтения входного обучающего набора T
	InicializujE();
	//ExpertFCM();
	Tclone = Train.Clone();
}

function NacitajT () { //функция для чтения входного обучающего набора T
	fetch('data/trenovacka.txt')
	.then(response => response.text())
	.then(m_text => getTrenovacka(m_text));

	function getTrenovacka (text_arg) { //we a hepping get 3000 lines with training data
		var data_points = text_arg.split('\n');

		pocVystupUzlov = parseInt(data_points[0].split('\t')[0]);
		pocVstupUzlov = parseInt(data_points[0].split('\t')[1]);
		pocUzlov = pocVystupUzlov + pocVstupUzlov;

		data_points.splice(0, 1); // delete first line with data info

		if (data_points[data_points.length-1]=="") { // delete last empty line (if this is)
			data_points.splice(data_points.length-1, 1);
		}

		for (var i = 0; i < data_points.length; i++) {
			var tmp_tT = data_points[i].split('\t');
			tT[i] = [];
			for (var j = 0; j < tmp_tT.length; j++) {
				tT[i][j] = parseFloat(tmp_tT[j]);
			}
		}
	}
}

function InicializujE () {
	setTimeout(()=> {
		console.log(tT);
	}, 111)
}

class Train {
	Clone(){
		
	}
}

Train = new Train();

Inicializacia ();
