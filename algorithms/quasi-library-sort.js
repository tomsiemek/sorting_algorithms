const sortHelper = require("../sort-helper")
function search(input, el) {
    
}

function librarySort(input) {
    const GAP_LENGTH = 3 
    const result = Array.from({length: input.length * (1+GAP_LENGTH)}, () => NaN)
    for(let i = 0; i < result.length; i++) {
        result[i + GAP_LENGTH * (i+1)] = input[i]
    }
    for(let i = 0; i < result.length; i++) {
        const key = result[i]
        let j = i - 1
        while(j > -1) {
            sortHelper.cmp(result[j],key) > 0
            result[j+1] = result[j]
            j = j - 1
        }
        result[j+1] = key
    }
    return result
}
module.exports = librarySort