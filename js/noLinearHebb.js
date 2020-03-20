'use strict';
function ConmputeNoLinear() {
	var quotient = 0.07;
	var greasy_init = Math.random();
	var dirt_init = Math.random();
	var strengths = 0.111;
	var iteration = 10;
	var Wtmp = 0.0;
	var Wout = 0.0;
	var minWashTime = 24; 

	var greasy_out = parseFloat(greasy_range.value.substring(0, 4));
	var dirt_out = parseFloat(dirt_range.value.substring(0, 4));

	Wout = quotient * greasy_init * dirt_init;

	for (var i = 0; i < iteration; i++) {
		Wtmp = quotient * (greasy_init + quotient * 2) * (dirt_init + quotient * 2);
		Wout = Wtmp;
		greasy_init = (greasy_init + greasy_out) / 2;
		dirt_init = (dirt_init + dirt_out) / 2;
		ViewResult();
	}

	function ViewResult () {
		setTimeout(() => time_result_span.innerText = ((Wout * 1000) + minWashTime).toString().substring(0, 4) + ' minutes', 777);
	}
}
