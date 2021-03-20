function bucketSort(input, currentDivider) {
    const numberOfBuckets = 10
    const buckets = Array.from({length: numberOfBuckets}, () => [])
    input.forEach( (v) => {
        buckets[ ~~(v/currentDivider) % 10 ].push(v)
    })
    return buckets.reduce((acc, val) => acc.concat(val), [])
}

function radixSort(input) {
    const max = Math.max(...input)
    const iterations = Math.log10(max) + 1
    const dividers = Array.from({length: iterations}, (v,i) => Math.pow(10, i))
    return dividers.reduce( (acc, cur) => bucketSort(acc, cur) , input)
}
module.exports = radixSort