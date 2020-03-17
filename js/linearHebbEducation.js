function ComputeWater () {
	let water = parseInt(wash_WeightRange.value, 10) * 1.23 + 2.2;
	water_result_span.innerText = water.toString().substring(0, 3) + ' liters';
}

function ConmputeLinearTimeWash () {
	let wash_time = ["Very Short", "Short", "Medium", "Long", "Very Long"];

	let VeryShort = 
		greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Not Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Small";
	let Short =
		greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Medium" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Small";
	let Medium =
		greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Medium" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Medium";


	if (VeryShort) {time_result_span.innerText = wash_time[0];}
	if (Short) {time_result_span.innerText = wash_time[1];}
	if (Medium) {time_result_span.innerText = wash_time[2];}
}
