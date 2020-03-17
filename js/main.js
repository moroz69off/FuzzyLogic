'use strict';
var reset = document.getElementById('reset');
var m_form = document.getElementById('m_form');
var compute_btn = document.getElementById('compute');
var result = document.getElementById('result');
var option_learn_select = document.getElementById('learn_OptionSelect');
var wash_WeightRange = document.getElementById('wash_Weight');
var wash_Weight_span = document.getElementById('weight_option');
var compute_data = 'a b c';

compute_btn.onclick = Compute;

wash_WeightRange.oninput = function () {
	wash_Weight_span.innerText = wash_WeightRange.value;
	ComputeWater();
}

function Compute () {
	
}


