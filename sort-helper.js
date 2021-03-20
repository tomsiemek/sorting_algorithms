function cmp(a,b) {
    return a-b;
}
function swap(input,a,b) {
    const temp = input[a];
    input[a] = input[b];
    input[b] = temp;
}
module.exports = {cmp,swap}