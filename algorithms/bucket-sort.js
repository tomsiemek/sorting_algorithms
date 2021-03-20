const insertSort = require("./insertion-sort")
function createBuckets(input) {
    const MAX_ELEMENTS_IN_BUCKET = 100
    const min = Math.min(...input)
    const max = Math.max(...input)
    const normalizedMax = max - min
    const numberOfBuckets = Math.ceil(input.length / MAX_ELEMENTS_IN_BUCKET)
    const buckets = Array.from({length: numberOfBuckets}, () => [])
    input.forEach( (v) => {
        const index = Math.min(numberOfBuckets-1 ,Math.floor(numberOfBuckets * v/normalizedMax))
        buckets[index].push(v)
    })
    return buckets
}
function bucketSort(input) {
    const buckets = createBuckets(input)
    buckets.forEach( (v,i,arr) => arr[i] = insertSort(arr[i]) )
    return buckets.reduce((acc, val) => acc.concat(val), [])
}
module.exports = bucketSort