var assert = require('./configs/assert');
var arraysToSort = require('./configs/arraysToSort');
require('./global_functions.js')();
require('./configs/customCompare.js')();
require('./algorithms/insertionSort.js')();
require('./algorithms/bubbleSort.js')();
require('./algorithms/mergeSort.js')();
require('./algorithms/quickSort.js')();

const TEST_ARRAYS = arraysToSort.exampleArrays;

try {
    TEST_ARRAYS.forEach(function(unsortedArray) {
    	console.log('Sorting array with length='+unsortedArray.length);

    	//sorted array manually to later compare to different results
    	let sortedArray = [...unsortedArray].sort(function(a,b){
    		if (customCompare(a,b)){
    			return 1;
    		}
    		return -1;
  		});

		console.time('insertionSort');
    	assert.isArrayEquals(sortedArray, insertionSort([...unsortedArray]));
    	console.timeEnd('insertionSort');

		console.time('bubbleSort');
    	assert.isArrayEquals(sortedArray, bubbleSort([...unsortedArray]));
		console.timeEnd('bubbleSort');

		console.time('mergeSort');
    	assert.isArrayEquals(sortedArray, mergeSort([...unsortedArray]));
    	console.timeEnd('mergeSort');

    	console.time('quickSort');
    	assert.isArrayEquals(sortedArray, quickSort([...unsortedArray]));
    	console.timeEnd('quickSort');
    	
    	console.log('');
	});
		console.log('');
   
    console.log('Passed All Tests');
  } catch (error) {
    console.error(error.message);
  }


