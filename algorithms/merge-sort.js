const sortHelper = require("../sort-helper")
function merge(leftArray, rightArray) {
    const resultArray = []
    while(leftArray.length && rightArray.length) {
        const minElement = sortHelper.cmp(leftArray[0], rightArray[0]) > 0 ? rightArray.shift() : leftArray.shift()
        resultArray.push(minElement)
    }
    return leftArray.length ? resultArray.concat(leftArray) : resultArray.concat(rightArray)
}
function mergeSort(input) {
    if (input.length < 2) {
        return input
    }
    const mediumIndex = Math.floor(input.length / 2)
    const leftArray = mergeSort(input.slice(0, mediumIndex))
    const rightArray = mergeSort(input.slice(mediumIndex, input.length))
    return merge(leftArray, rightArray)
}
module.exports = mergeSort