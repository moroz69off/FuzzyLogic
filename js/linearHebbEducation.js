function ComputeWater () {
	let water = parseInt(wash_WeightRange.value, 10) * 0.74 + 2.2;
	water_result_span.innerText = water.toString().substring(0, 3) + ' liters';
}

function ConmputeLinearTimeWash () {
	let wash_time = ["Short", "Very Short", "Long", "Medium", "Very Long"];

}
