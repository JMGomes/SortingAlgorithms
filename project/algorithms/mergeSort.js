module.exports = function() { 
    this.mergeSort = mergeSort; 
}

/*
* Worst-case O(n log n) comparisons
* Best-case O(n log n) comparisons
*/
function mergeSort(arrayToSort) {
    if (arrayToSort.length === 1) {
        return arrayToSort;
    }
    const middle = Math.floor(arrayToSort.length / 2) ;
    const left = arrayToSort.slice(0, middle); 
    const right = arrayToSort.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (customCompare(left[0],right[0])) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length){
        result.push(right.shift());
    }
    return result;
}