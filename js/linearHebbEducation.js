'use strict';
function ComputeWater () {
	let water = parseFloat(wash_WeightRange.value, 10) * 1.23 + 2.2;
	water_result_span.innerText = water.toString().substring(0, 4) + ' liters';
}

function ConmputeLinearTimeWash () {
	let wash_time = ["Very Short (20 min.)", "Short (30 min.)", "Medium (40 min.)", "Long (50 min.)", "Very Long (60 min.)"];

	let VeryShort = 
		greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Not Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Small";
	let Short =
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Medium" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Small") ||
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Not Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Medium");
	let Medium =
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Medium" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Medium") ||
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Not Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Large") ||
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Small");
	let Long =
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Medium") ||
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Medium" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Large") ;
	let VeryLong =
		(greasy_OptionSelect.options[greasy_OptionSelect.selectedIndex].value == "Greasy" &&
		dirt_QualitySelect.options[dirt_QualitySelect.selectedIndex].value == "Large");


	if (VeryShort) {time_result_span.innerText = wash_time[0];}
	if (Short)     {time_result_span.innerText = wash_time[1];}
	if (Medium)    {time_result_span.innerText = wash_time[2];}
	if (Long)      {time_result_span.innerText = wash_time[3];}
	if (VeryLong)  {time_result_span.innerText = wash_time[4];}
}
//linearHebbEducation.js
