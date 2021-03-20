const bubbleSort = require("./algorithms/bubble-sort");
const insertionSort = require("./algorithms/insertion-sort")
const quickSort = require("./algorithms/quick-sort")
const mergeSort = require("./algorithms/merge-sort")
const countingSort = require('./algorithms/counting-sort')
const bucketSort = require('./algorithms/bucket-sort')
const radixSort = require("./algorithms/radix-sort")
const MAX = 100
const LENGTH = 10
const GIGA_LENGTH = 10000
const input = Array.from({ length: LENGTH }, () => Math.round(Math.random() * MAX))
const inputAlmostSorted = Array.from({ length: LENGTH }, (_,i) => i)
const inputGiga = Array.from({ length: GIGA_LENGTH }, () => Math.round(Math.random() * MAX))
inputAlmostSorted[7] = 400
inputAlmostSorted[3] = 900

const algs = [
    {label: "qs", alg: quickSort},
    {label: "insertsort", alg: insertionSort},
    {label: "bubblesort", alg: bubbleSort},
    {label: "mergesort", alg: mergeSort},
    {label: "countingsort", alg: countingSort},
    {label: "bucketsort", alg: bucketSort},
    {label: "radixsort", alg: radixSort}
]
const inputs = [
    {arr: input, label: `small input ${input.length} elements`},
    {arr: inputAlmostSorted, label: `almost sorted input ${inputAlmostSorted.length} elements`},
    {arr: inputGiga, label: `giga input ${inputGiga.length} elements`}
]

exports.algorithms = algs
exports.inputs = inputs