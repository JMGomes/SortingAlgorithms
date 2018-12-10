module.exports = function() {
	this.quickSort = quickSort;
}

/*
* Worst-case O(n log n) comparisons
* Best-case O(n log n) comparisons
*/
function quickSort(arrayToSort) {
	if (arrayToSort.length <= 1) {
		return arrayToSort;
	}
	let left = [];
	let right = [];
	let result = [];
	let pivot = arrayToSort.shift();

	for (let i=0; i < arrayToSort.length; i++) {
		if (customCompare(arrayToSort[i], pivot)) {
			right.push(arrayToSort[i]);
		} else {
			left.push(arrayToSort[i]);
		}
	}
	return result.concat(quickSort(left), pivot, quickSort(right));
}
