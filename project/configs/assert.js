module.exports = {
	isArrayEquals: function(sortedArray, arrayToCompare) {
		if(sortedArray.length !== arrayToCompare.length) {
			throw new Error('Assert failed, different lengths' + sortedArray + ' and ' + arrayToCompare);
		}
		const result = sortedArray.every(function(item, index) 
			{ 
				return customCompare(item, arrayToCompare[index]);
			});
		if (!result) {
			throw new Error('Assert failed, ' + arrayToCompare + ' is not correctly sorted.');
		}
		return result;
	}
};