const testData = require("./testData")
function testIfWorking(method, arr, label) {
    const sorted =  method(arr)
    const error = sorted.slice(1,sorted.length-1).some( (v,i) => v < sorted[i-1] )
    console.log(label + " -> " + (!error ? 'its ok' : arr + " -> " + sorted))
}
const input = testData.inputs[0]
testData.algorithms.forEach(a => testIfWorking(a.alg, input.arr, a.label))