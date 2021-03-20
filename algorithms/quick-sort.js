const sortHelper = require("../sort-helper")
function quicksort(input, lo, hi) {
    if(lo < hi) {
        const p = partition(input, lo, hi)
        quicksort(input, lo, p - 1)
        quicksort(input, p + 1, hi)
    }
}
function partition(input, lo , hi) {
    const pivot = input[hi]
    let i = lo
    for(let j = lo; j <= hi; j++)
        if(sortHelper.cmp(pivot, input[j]) > 0) {
            sortHelper.swap(input, i, j)
            i++
        } 
    sortHelper.swap(input, i, hi)
    return i
}
function qs(input) {
    const arr = Array.from(input)
    quicksort(arr, 0, arr.length - 1)
    return arr
}
module.exports = qs