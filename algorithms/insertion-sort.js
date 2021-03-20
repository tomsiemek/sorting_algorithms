const sortHelper = require("../sort-helper")
function insertionSort(input) {
    const result = Array.from(input)
    for(let i = 1; i < result.length; i++) {
        const key = result[i]
        let j = i - 1
        while(j > -1 && sortHelper.cmp(result[j],key) > 0) {
            result[j+1] = result[j]
            j = j - 1
        }
        result[j+1] = key
    }
    return result
}
module.exports = insertionSort