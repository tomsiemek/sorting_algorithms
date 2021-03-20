const testData = require("./testData")
function test(method, array, label) {
    console.time(label)
    method(array)
    console.timeEnd(label)
}
function testNativeSort(array,label) {
    console.time(label);
    const arr = Array.from(array)
    arr.sort()
    console.timeEnd(label)
}
testData.inputs.forEach( i => {
    testData.algorithms.forEach(a => test(a.alg, i.arr, a.label + " " + i.label))
    testNativeSort(i.arr, "native sort" + " " + i.label)
    console.log("----------------------------")
})
