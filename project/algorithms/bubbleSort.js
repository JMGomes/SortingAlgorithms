module.exports = function() {
    this.bubbleSort = sort;
}

/*
* Worst-case O(n^{2}) comparisons
* Best-case O(n^{2}) comparisons - could be O(n) if added an extra check to verify if array is already sorted
*/
function sort(arrayToSort) {
    for (let i = 0; i < arrayToSort.length; i++) {
        for (let j = 0; j < (arrayToSort.length - i - 1); j++) {
            if (customCompare(arrayToSort[j], arrayToSort[j+1])) {
            	swap(arrayToSort, j, j+1);
          	}
      	}   
 	}
  	return arrayToSort;
} 