'use strict';
var reset = document.getElementById('reset');
var m_form = document.getElementById('m_form');
var main_btn = document.getElementById('main');
var t_result = document.getElementById('t_result');

var compute_data = 'a b c';

main_btn.onclick = Compute;

function Compute () {
	ClearTable();
	TableUpdate(compute_data);
}

function TableUpdate (m_data) {
	var t_data = m_data.split(' ');
	for (var i=0; i<t_data.length; i++) {
		var t_row = t_result.insertRow();
		for (var j=0; j<3; j++) {

			var date = new Date();//temp
			var t_st = date.getSeconds();//temp

			var data_cell = t_row.insertCell(j);
			var text_cell = document.createTextNode(
					t_st+t_data[j]+(i+1)//temp
				);
			data_cell.appendChild(text_cell);
		}
	}
}

function ClearTable () {
	for (var i=t_result.getElementsByTagName('tr').length -1; i; i--) {
		t_result.deleteRow(i);
	}
}
