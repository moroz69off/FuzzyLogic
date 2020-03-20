'use strict';
var reset_btn = document.getElementById('reset');
var m_form = document.getElementById('m_form');
var compute_btn = document.getElementById('compute');
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
var greasy_select = document.getElementById('greasy_select');

var greasy_range = document.createElement('input');
greasy_range.className = "custom-range";
greasy_range.setAttribute('min', '0.005');
greasy_range.setAttribute('max', '1');
greasy_range.setAttribute('step', '0.0001');
greasy_range.setAttribute('value', '0.2');
greasy_range.setAttribute('type', 'range');
greasy_range.setAttribute('id', 'greasy_range_input');
greasy_range.oninput = function () {
	greasy_option_span.innerText = 
		((parseFloat(greasy_range.value))*100)
			.toString().substring(0, 4) + " % greasy";
}

var dirt_range = document.createElement('input');
dirt_range.className = "custom-range";
dirt_range.setAttribute('min', '0.005');
dirt_range.setAttribute('max', '1');
dirt_range.setAttribute('step', '0.0001');
dirt_range.setAttribute('value', '0.2');
dirt_range.setAttribute('type', 'range');
dirt_range.setAttribute('id', 'dirt_range_input');
dirt_range.oninput = function () {
	quality_option_span.innerText = 
		((parseFloat(dirt_range.value))*100)
			.toString().substring(0, 4) + " % dirt";
}

var compute_method = 0;
var compute_data = 'a\tb\tc';

reset_btn.onclick = ResetApp;

compute_btn.onclick = Compute;

btn_Linear.onclick = function () {
	btn_Nonlinear.setAttribute("class","btn");
	btn_ImprovedAlgorithm.setAttribute("class","btn");
	this.setAttribute("class","btn btn-secondary");
	SetLinearMethod();
}

btn_Nonlinear.onclick = function () {
	btn_Linear.setAttribute("class","btn");
	btn_ImprovedAlgorithm.setAttribute("class","btn");
	this.setAttribute("class","btn btn-secondary");
	SetNonLinearMethod();
}

btn_ImprovedAlgorithm.onclick = function () {
	btn_Linear.setAttribute("class","btn");
	btn_Nonlinear.setAttribute("class","btn");
	this.setAttribute("class","btn btn-secondary");
	SetImprovedMethod();
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

function SetLinearMethod () {
	window.history.go(0);
	window.location.reload(true);
	compute_method = 0;
}

function SetNonLinearMethod () {
	wash_WeightRange.setAttribute('step', '0.001');
	greasy_OptionSelect.replaceWith(greasy_range);
	dirt_QualitySelect.replaceWith(dirt_range);
	compute_method = 1;
	SpansUpdate();
}

function SetImprovedMethod () {
	wash_WeightRange.setAttribute('step', '0.001');
	greasy_OptionSelect.replaceWith(greasy_range);
	dirt_QualitySelect.replaceWith(dirt_range);
	compute_method = 2;
	SpansUpdate();
}

function SpansUpdate () {
	InputWeightRange();
	quality_option_span.innerText = 
		((parseFloat(dirt_range.value))*100)
			.toString().substring(0, 4) + " % dirt";
	greasy_option_span.innerText = 
		((parseFloat(greasy_range.value))*100)
			.toString().substring(0, 4) + " % greasy";
}

function Compute () {
	if (compute_method == 0) {
		ConmputeLinearTimeWash();
	}
	else if (compute_method == 1) {
		ConmputeNoLinear();
	}
	else if (compute_method == 2) {
		ComputeImprovedAlgorithm();
	}
	else {
		return;
	}
}

function ResetApp () {
	window.history.go(0);
	window.location.reload(true);
}
