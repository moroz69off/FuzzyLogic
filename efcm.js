'use strict';

// Nelinearne Hebbovo ucenie
const NHL =
`22	0	0.872598
23	1	0.894954
24	2	0.872598
25	3	0.785124
28	3	0.634511
26	4	0.785312
29	4	0.642156
27	5	0.778638
30	5	0.633796
22	6	0.872598
23	7	0.891738
24	8	0.872598
28	9	0.760502
29	9	0.765217
30	9	0.760502
22	10	0.717133
28	10	0.673436
23	11	0.761344
29	11	0.666015
24	12	-12.459928
30	12	-3.099927
22	13	0.872598
23	14	-5.271370
24	15	0.872598
28	16	0.872598
29	17	0.871856
30	18	-8.294541
22	19	0.872598
23	20	0.902081
24	21	0.872598`;


const parse = text => text.split('\n')
    .map(line => line.split('\t').map(parseFloat));

window.nets = {
    NHL: parse(NHL)
};


window.getWeightMatrix = id => {
    const net = window.nets[id];


    // 21 * 9
    const INPUTS = 9;
    const OUTPUTS = 21;

    const matrix = new Array(INPUTS);

    for (let i = 0; i < INPUTS; i++) {
        matrix[i] = new Array(OUTPUTS);

        for (let j = 0; j < OUTPUTS; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < net.length; i++) {
        const inputIndex = net[i][0] - 22;
        const outputIndex = net[i][1];
        const weight =  net[i][2];

        matrix[inputIndex][outputIndex] = weight;
    }

    return matrix;
};

window.getWeightMatrix2 = id => {
    const net = window.nets[id];


    // 21 * 9
    const NODES = 22 + 9;

    const matrix = new Array(NODES);

    for (let i = 0; i < NODES; i++) {
        matrix[i] = new Array(NODES);

        for (let j = 0; j < NODES; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < net.length; i++) {
        const inputIndex = net[i][0];
        const outputIndex = net[i][1];
        const weight =  net[i][2];

        matrix[inputIndex][outputIndex] = weight;
    }

    return matrix;
};
