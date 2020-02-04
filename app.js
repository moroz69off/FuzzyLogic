'use strict';

var result = document.getElementById('result');
var form = document.getElementById('form');
var vahaInput = document.getElementById('vaha');
var algoInput = document.getElementById('algo');
var mastnotaInput = document.getElementById('mastnota');
var znecistenieInput = document.getElementById('znecistenie');



function valueFromInputs() {
  const inputValues = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const vaha = inputValues[vahaInput.value];
  const mastnota = inputValues[mastnotaInput.value];
  const znecistenie = inputValues[znecistenieInput.value];

  const inputs = [...vaha, ...mastnota, ...znecistenie];

  return inputs;
}



function onSubmit(event) {
  event.preventDefault();
  const algo = algoInput.value;

  const value = calc(valueFromInputs(), algo);
  result.innerText = value.toFixed(4) + ' min';
}

form.addEventListener('submit', onSubmit);


function onReset() {
  result.innerText = '-- min';
}



// sigmoid
function stf(num) {
  return 1 / (1 + Math.exp(-num));
}


// inputs: [1, 0, 0, 1, 0, 0, 1, 0, 0]
function calc(inputs, netId) {
  const W = getWeightMatrix(netId);
  inputs = new Array(22).fill(0).concat(inputs);
  const o = [0, 1.8, 0, 20, 0, 15, 0, 0, 0, 15, 0, 1, 0, 0, 4.5, 0, 0, 15, 0, 0, 12.5, 0];
  const outputs = o.concat(new Array(9).fill(0));
  // const outputs = new Array(22).fill(stf(0)).concat(new Array(9).fill(0));


  let sum = 0;

  for (let j = 0; j < inputs.length; j++) {
    let s = 0;
    for (let i = 0; i < inputs.length; i++) {
      if (i === j) continue;

      const w = W[i][j];
      const ci = inputs[i];
      s += w * ci;
    }

    outputs[j] = stf(s + outputs[j]);
  }

  sum = outputs.slice(0, 22).reduce((a, b) => a + b);

  return sum;
}


function test() {
  // calc([0, 0.7, 0, 0, 0, 0.888, 0, 0.583063, 0], 'NHL')
  calc([0, 0, 1, 0, 0, 1, 0, 0, 1], 'NHL')
  // calc([0.3, 0, 0, 0.115, 0, 0, 0, 0.33293, 0], 'NHL')
}

test();
