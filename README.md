# SortingAlgorithms
Dynamic Sorting Algorithms Implementation using NodeJS

This project implements insertion sort, bubble sort, merge sort and merge sort and displays the total time to execute the sorting.
##### Allows to dynamic change the compare method, changing the customCompare function. This configuration means that you can compare these sorting algorithms in any object or structure!

# Run Project
Navigate to _/project_ folder and run ```$ node main ```

## Change configuration variables
Navigate to _/project/configs/arraysToSort.js_ to change arrays to be sorted
Navigate to _/project/configs/customCompare.js_ to change compare function

## Default output data
```
Sorting array with length=10
insertionSort: 0.480ms
bubbleSort: 0.210ms
mergeSort: 0.308ms
quickSort: 0.353ms

Sorting array with length=10
insertionSort: 0.052ms
bubbleSort: 0.043ms
mergeSort: 0.058ms
quickSort: 0.176ms

Sorting array with length=10
insertionSort: 0.021ms
bubbleSort: 0.021ms
mergeSort: 0.046ms
quickSort: 0.044ms

Sorting array with length=31
insertionSort: 0.851ms
bubbleSort: 0.080ms
mergeSort: 0.137ms
quickSort: 0.114ms

Sorting array with length=20000
insertionSort: 242.413ms
bubbleSort: 2037.736ms
mergeSort: 63.728ms
quickSort: 80.688ms
```
