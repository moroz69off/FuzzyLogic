'use strict';

function ComputeImprovedAlgorithm () {

	let quotient = 0.07;
	let greasy_init = Math.random();
	let dirt_init = Math.random();
	//let strengths = 0.111;
	let iteration = 100;
	let Wtmp = 0.0;
	let Wout = 0.0;
	let minWashTime = 21; 

	let greasy_out = parseFloat(greasy_range.value.substring(0, 4));
	let dirt_out = parseFloat(dirt_range.value.substring(0, 4));

	Wout = quotient * greasy_init * dirt_init;

	for (var i = 0; i < iteration; i++) {
		Wtmp = quotient * ((2 * (greasy_init + quotient * 2)) - 1) * (dirt_init + quotient * 2);
		Wout = Wtmp;
		greasy_init = (greasy_init + greasy_out) / 2;
		dirt_init = (dirt_init + dirt_out) / 2;
		ViewResult();
	}
	function ViewResult () {
		let result_string_variant = ["Very Short ", "Short ", "Medium ", "Long ", "Very Long "];
		let result_string = ((Wout * 1000) + minWashTime).toString().substring(0, 4);
		let result_string_concat = "";

		if (((Wout * 1000) + minWashTime) < 30) {
			result_string_concat = result_string_variant[0] + result_string;
		}
		if (((Wout * 1000) + minWashTime) >= 30 && ((Wout * 1000) + minWashTime) < 45) {
			result_string_concat = result_string_variant[1] + result_string;
		}
		if (((Wout * 1000) + minWashTime) >= 45 && ((Wout * 1000) + minWashTime) < 60) {
			result_string_concat = result_string_variant[2] + result_string;
		}
		if (((Wout * 1000) + minWashTime) >= 60 && ((Wout * 1000) + minWashTime) < 80) {
			result_string_concat = result_string_variant[3] + result_string;
		}
		if (((Wout * 1000) + minWashTime) >= 80) {
			result_string_concat = result_string_variant[4] + result_string;
		}

		setTimeout(() => time_result_span.innerText = result_string_concat + ' minutes', 777);
	}
}
