'use strict';

var result = document.getElementById('result');
var form = document.getElementById('form');
// var resetButton = document.getElementById('sumbit');

function onSubmit(event) {
  event.preventDefault();
  // todo

  const value = 14.3;
  result.innerText = value + ' min';
}

form.addEventListener('submit', onSubmit);


function onReset() {
  result.innerText = '-- min';
}



// sigmoid
function stf(num) {
  return 1 / (1 + Math.exp(-num));
}


// inputs: [1, 0, 0, 1, ...]
// net: NHL
function calc(inputs, net) {
  const matrix = getWeightMatrix(net);
  const result = [];

  let sum = 0;

  for (let i = 0; i < inputs.length; i++) {
    inputs[i]
    const row = matrix[i];
    const rowResult = [];

    for (let j = 0; j < row.length; j++) {
      const value = inputs[i] * row[j];
      rowResult.push(value);

      sum += value;
    }

    result.push(rowResult);
  }

  console.log(sum);

  return result;
}

// 0.000000	0.700000	0.000000	0.000000	0.000000	0.888000	0.000000	0.583063	0.000000	0.000000

calc([0, 0.7, 0, 0, 0, 0.888, 0, 0.583063, 0], 'NHL')
