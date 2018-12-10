module.exports = function() {
    this.swap = function swap(arrayToSwap, firstIndex, secondIndex) {
        const temp = arrayToSwap[firstIndex];
        arrayToSwap[firstIndex] = arrayToSwap[secondIndex];
        arrayToSwap[secondIndex] = temp;
    }
}
