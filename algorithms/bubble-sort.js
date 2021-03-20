const sortHelper = require("../sort-helper")
function bubbleSort(input) {
    const result = Array.from(input)
    let isSorted = true
    for(let i = 0; i < input.length; i++) {
        isSorted = true
        for(let j = 0; j < input.length - 1; j++)
            if( sortHelper.cmp(result[j], result[j+1]) > 0 ) {
                sortHelper.swap(result, j, j+1)
                isSorted = false;
            }
        if(isSorted) {
            break
        }
    }                
    return result
}
module.exports = bubbleSort