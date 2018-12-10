module.exports = function() { 
	this.insertionSort = sort;
}

/*
* Worst-case O(n^{2}) comparisons
* Best-case O(n) comparisons
*/
function sort(arrayToSort) {
	for (let i = 1; i < arrayToSort.length; i++) {
		let j = i;
		while (j > 0 && customCompare(arrayToSort[j-1], arrayToSort[j])) {
			swap(arrayToSort, j-1, j);
			j--;	
		}
	}
	return arrayToSort;
} 