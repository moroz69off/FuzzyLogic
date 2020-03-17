'use strict';
var reset = document.getElementById('reset');
var m_form = document.getElementById('m_form');
var compute_btn = document.getElementById('compute');
var result = document.getElementById('result');
var option_learn_select = document.getElementById('learn_OptionSelect');
var wash_WeightRange = document.getElementById('wash_Weight');
var wash_Weight_span = document.getElementById('weight_option');
var water_result_span = document.getElementById('water_result');
var greasy_OptionSelect = document.getElementById('greasy_OptionSelect');
var greasy_option_span = document.getElementById('greasy_option');
var dirt_QualitySelect = document.getElementById('dirt_QualitySelect');
var quality_option_span = document.getElementById('quality_option');
var btn_Linear = document.getElementById('btn_Linear');
var btn_Nonlinear = document.getElementById('btn_Nonlinear');
var btn_ImprovedAlgorithm = document.getElementById('btn_ImprovedAlgorithm');
var time_result_span = document.getElementById('time_result');

var compute_data = 'a b c';

compute_btn.onclick = Compute;

btn_Linear.onclick = function () {
	btn_Nonlinear.setAttribute("class","btn btn-primary");
	btn_ImprovedAlgorithm.setAttribute("class","btn btn-primary");
	this.setAttribute("class","btn btn-secondary");
}

btn_Nonlinear.onclick = function () {
	btn_Linear.setAttribute("class","btn btn-primary");
	btn_ImprovedAlgorithm.setAttribute("class","btn btn-primary");
	this.setAttribute("class","btn btn-secondary");
}

btn_ImprovedAlgorithm.onclick = function () {
	btn_Linear.setAttribute("class","btn btn-primary");
	btn_Nonlinear.setAttribute("class","btn btn-primary");
	this.setAttribute("class","btn btn-secondary");
}

greasy_OptionSelect.onchange = GreasyOptionSelect;
dirt_QualitySelect.onchange = DirtQualitySelect;

wash_WeightRange.oninput = InputWeightRange;

function InputWeightRange() {
	wash_Weight_span.innerText = wash_WeightRange.value;
	ComputeWater();
}

function DirtQualitySelect () {
	quality_option_span.innerText = dirt_QualitySelect.value;
}

function GreasyOptionSelect () {
	greasy_option_span.innerText = greasy_OptionSelect.value;
}

function Compute () {
	ConmputeLinearTimeWash();
}


