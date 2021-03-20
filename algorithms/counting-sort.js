// works only for whole numbers
function generateHistogram(input) {
    const max = Math.max(...input)
    const min = Math.min(...input)
    const histogram = Array.from({length: max - min + 1}, () => 0)
    input.forEach( (element) => {
        histogram[ element - min ]++
        
    });
    return {histogram, min,max}

}
function countingSort(input) {
    const {histogram, min} = generateHistogram(input)
    const resultArray = []
    histogram.forEach( (v,i) => {
        if(v > 0) {
            resultArray.push( ...Array.from({length: v}, () => i+min) )
        }
    } )
    return resultArray
}

module.exports = countingSort